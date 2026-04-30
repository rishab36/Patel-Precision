const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = path.join(__dirname, '../out');
const PORT = 8080;

async function generateStaticHtml() {
  console.log('Generating complete static HTML with full content...');
  
  try {
    // Clean and rebuild
    if (fs.existsSync(OUT_DIR)) {
      fs.rmSync(OUT_DIR, { recursive: true, force: true });
    }
    
    console.log('Building Next.js app...');
    execSync('npm run build', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    
    // Start server to capture fully rendered content
    const http = require('http');
    const serveStatic = require('serve-static');
    const finalhandler = require('finalhandler');
    
    const serve = serveStatic(OUT_DIR);
    const server = http.createServer((req, res) => {
      serve(req, res, finalhandler(req, res));
    });
    
    await new Promise((resolve) => {
      server.listen(PORT, resolve);
    });
    
    console.log(`Server running on http://localhost:${PORT}`);
    
    // Get all HTML files
    const htmlFiles = fs.readdirSync(OUT_DIR)
      .filter(file => file.endsWith('.html'))
      .filter(file => file !== '404.html');
    
    let productFiles = [];
    const productsDir = path.join(OUT_DIR, 'products');
    if (fs.existsSync(productsDir)) {
      productFiles = fs.readdirSync(productsDir)
        .filter(file => file.endsWith('.html'))
        .map(file => `products/${file}`);
    }
    
    const allFiles = [...htmlFiles, ...productFiles];
    console.log(`Processing ${allFiles.length} HTML files...`);
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    
    for (const file of allFiles) {
      const url = `http://localhost:${PORT}/${file}`;
      console.log(`Processing: ${file}`);
      
      try {
        const page = await context.newPage();
        
        // Wait for page to fully render including client-side content
        await page.goto(url, { waitUntil: 'networkidle' });
        
        // Wait for client-side hydration and content rendering
        await page.waitForTimeout(3000);
        
        // Get the fully rendered HTML
        const html = await page.content();
        
        // Extract page information for SEO
        const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
        const pageTitle = titleMatch ? titleMatch[1].split(',')[0].trim() : 'Patel Precision';
        const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
        
        // Generate SEO optimizations
        const optimizedHtml = await optimizeHtmlForSEO(html, mainKeyword);
        
        // Write the optimized HTML
        fs.writeFileSync(path.join(OUT_DIR, file), optimizedHtml);
        
        await page.close();
        console.log(`\u2713 ${file} processed with full content`);
      } catch (error) {
        console.error(`\u2717 Error processing ${file}:`, error.message);
      }
    }
    
    await context.close();
    await browser.close();
    server.close();
    
    console.log('Static HTML generation complete!');
    console.log('HTML files now contain full page content and are SEO optimized!');
    
  } catch (error) {
    console.error('Error generating static HTML:', error.message);
    process.exit(1);
  }
}

async function optimizeHtmlForSEO(html, mainKeyword) {
  // Generate keyword variations
  const keywordVariations = [
    mainKeyword,
    `${mainKeyword} Services`,
    `${mainKeyword} Providers`,
    `${mainKeyword} Service Providers`,
    `${mainKeyword} in Mumbai`,
    `${mainKeyword} in Navi Mumbai`,
    `${mainKeyword} in Thane`,
    `${mainKeyword} in India`
  ];
  
  // Add comprehensive meta tags
  let metaTags = '';
  keywordVariations.forEach(keyword => {
    metaTags += `\n    <meta name="keywords" content="${keyword}, ${keyword} Services, ${keyword} Providers, ${keyword} Service Providers, Patel Precision, Bhiwandi, India">\n    <meta name="description" content="Patel Precision Pvt Ltd - Leading ${keyword} manufacturer and service provider. ISO 9001:2015 certified with 25+ years expertise in precision manufacturing.">`;
  });
  
  // Insert meta tags
  let optimizedHtml = html.replace('</head>', `${metaTags}\n</head>`);
  
  // Add SEO content section
  const keywordClass = mainKeyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const seoContent = `
    <!-- SEO Content Section -->
    <div class="seo-content-section ${keywordClass}-content" style="display: none;">
      <h1 class="${keywordClass}-title">Patel Precision - Leading ${mainKeyword} Manufacturer</h1>
      <p class="${keywordClass}-description">Patel Precision Pvt Ltd is the premier ${mainKeyword} manufacturer and service provider in Mumbai, Navi Mumbai, Thane, and across India. We specialize in ${keywordVariations.join(', ')} with over 25 years of expertise.</p>
      <p class="${keywordClass}-description">Our ISO 9001:2015 certified facility ensures the highest quality standards for all ${mainKeyword} services. We are recognized as the top ${keywordVariations[2]} in Bhiwandi, Maharashtra.</p>
      <p class="${keywordClass}-description">Clients can avail our premium ${mainKeyword} services at competitive prices. We maintain the highest work standards to meet your specific requirements.</p>
    </div>
  `;
  
  // Insert SEO content after body tag
  optimizedHtml = optimizedHtml.replace('<body', `<body>\n${seoContent}\n`);
  
  // Add proper SEO attributes to images and links
  optimizedHtml = optimizedHtml
    // Add alt attributes to images
    .replace(/<img(?![^>]*alt=)([^>]*)>/g, (match, attrs) => {
      return `<img${attrs} alt="${mainKeyword} - Patel Precision">`;
    })
    // Add title attributes to links
    .replace(/<a(?![^>]*title=)([^>]*href="[^"]*")([^>]*)>/g, (match, hrefAttrs, otherAttrs) => {
      return `<a${hrefAttrs}${otherAttrs} title="${mainKeyword} - Patel Precision">`;
    })
    // Add semantic class names
    .replace(/class="([^"]*)"/g, (match, className) => {
      if (!className.includes(keywordClass)) {
        return `class="${className} ${keywordClass}"`;
      }
      return match;
    });
  
  // Format HTML properly
  return formatHtml(optimizedHtml);
}

function formatHtml(html) {
  return html
    // Add proper line breaks between block elements
    .replace(/<(\/?(?:div|section|header|footer|nav|main|article|aside|p|h[1-6]|ul|ol|li|br|script|style|meta|link|title|head|body|html))>/g, '\n<$1>')
    // Clean up multiple consecutive line breaks
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    // Add proper indentation
    .split('\n')
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return '';
      
      // Calculate indentation based on tag structure
      let indent = 0;
      if (trimmed.startsWith('</')) {
        // Closing tag - reduce indentation
        indent = -1;
      } else if (trimmed.match(/^<(?!br|hr|img|meta|link|input)[^>]*\/>$/)) {
        // Self-closing tag - same level
        indent = 0;
      } else if (trimmed.startsWith('<')) {
        // Opening tag - increase indentation for content
        indent = 0;
      }
      
      return '  '.repeat(Math.max(0, getCurrentIndentation() + indent)) + trimmed;
    })
    .join('\n')
    .trim();
}

function getCurrentIndentation() {
  // Simplified indentation calculation
  return 0;
}

generateStaticHtml().catch(console.error);
