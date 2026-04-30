const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');
const PORT = 8080;

async function generateSeoHtml() {
  console.log('Starting SEO HTML generation...');
  
  // Start a simple HTTP server
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
  
  // Get all HTML files from main directory
  const htmlFiles = fs.readdirSync(OUT_DIR)
    .filter(file => file.endsWith('.html'))
    .filter(file => file !== '404.html');
  
  // Get all HTML files from products subdirectory
  let productFiles = [];
  const productsDir = path.join(OUT_DIR, 'products');
  if (fs.existsSync(productsDir)) {
    productFiles = fs.readdirSync(productsDir)
      .filter(file => file.endsWith('.html'))
      .map(file => `products/${file}`);
  }
  
  const allFiles = [...htmlFiles, ...productFiles];
  console.log(`Found ${allFiles.length} HTML files to process`);
  
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  for (const file of allFiles) {
    const url = `http://localhost:${PORT}/${file}`;
    console.log(`Processing: ${file}`);
    
    try {
      const page = await context.newPage();
      
      // Wait for page to fully render
      await page.goto(url, { waitUntil: 'networkidle' });
      
      // Wait a bit more for any dynamic content
      await page.waitForTimeout(2000);
      
      // Get the fully rendered HTML
      const html = await page.content();
      
      // Extract page title for keyword optimization
      const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
      const pageTitle = titleMatch ? titleMatch[1].split(',')[0].trim() : 'Patel Precision';
      const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
      
      // Generate multiple keyword variations like the example
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
      
      // Add multiple meta tags like the example
      let metaTags = '';
      keywordVariations.forEach(keyword => {
        metaTags += `\n    <meta name="keywords" content="${keyword}, ${keyword} Services, ${keyword} Providers, ${keyword} Service Providers">\n    <meta name="description" content="We Offer ${keyword}, ${keyword} Services, ${keyword} Providers, ${keyword} Service Providers">`;
      });
      
      // Insert multiple meta tags after existing meta tags
      let optimizedHtml = html.replace('</head>', `${metaTags}\n</head>`);
      
      // Add SEO attributes only to appropriate elements
      optimizedHtml = optimizedHtml
        // Add alt attributes to images that don't have them
        .replace(/<img(?![^>]*alt=)([^>]*)>/g, (match, attrs) => {
          return `<img${attrs} alt="${mainKeyword}">`;
        })
        // Add title attributes to links that don't have them
        .replace(/<a(?![^>]*title=)([^>]*href="[^"]*")([^>]*)>/g, (match, hrefAttrs, otherAttrs) => {
          return `<a${hrefAttrs}${otherAttrs} title="${mainKeyword}">`;
        })
        // Add semantic class names to divs and sections
        .replace(/<(div|section)(?![^>]*class=)([^>]*)>/g, (match, tag, attrs) => {
          const keywordClass = mainKeyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          return `<${tag}${attrs} class="${keywordClass}-container">`;
        })
        // Enhance existing classes with keywords
        .replace(/class="([^"]*)"/g, (match, className) => {
          const keywordClass = mainKeyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          // Only add keyword class if it doesn't already exist
          if (!className.includes(keywordClass)) {
            return `class="${className} ${keywordClass}"`;
          }
          return match;
        });

      // Better HTML formatting
      const formattedHtml = optimizedHtml
        // Add proper line breaks between block elements
        .replace(/<(\/?(?:div|section|header|footer|nav|main|article|aside|p|h[1-6]|ul|ol|li|br))>/g, '\n<$1>')
        // Clean up multiple consecutive line breaks
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        // Add proper indentation (2 spaces)
        .split('\n')
        .map((line, index, array) => {
          const trimmed = line.trim();
          if (!trimmed) return '';
          
          // Calculate indentation based on opening/closing tags
          let indent = 0;
          const openTags = (trimmed.match(/<(?!(?:img|br|hr|meta|link|input))/g) || []).length;
          const closeTags = (trimmed.match(/<\/\w/g) || []).length;
          
          // Look at previous lines to determine current indentation
          for (let i = index - 1; i >= 0; i--) {
            const prevLine = array[i].trim();
            if (prevLine && !prevLine.startsWith('</')) {
              const prevOpenTags = (prevLine.match(/<(?!(?:img|br|hr|meta|link|input))/g) || []).length;
              const prevCloseTags = (prevLine.match(/<\/\w/g) || []).length;
              indent = Math.max(0, indent + prevOpenTags - prevCloseTags);
              break;
            }
          }
          
          return '  '.repeat(Math.max(0, indent - closeTags)) + trimmed;
        })
        .join('\n')
        .trim();
      
      // Write back to the file
      fs.writeFileSync(path.join(OUT_DIR, file), formattedHtml);
      
      await page.close();
      console.log(`✓ ${file} processed`);
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  await context.close();
  await browser.close();
  
  server.close();
  console.log('SEO HTML generation complete!');
}

generateSeoHtml().catch(console.error);
