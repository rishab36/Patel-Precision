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
      
      // Add extreme keyword stuffing to EVERY element like the example
      optimizedHtml = optimizedHtml
        .replace(/<([^>]+)>/g, (match, tagContent) => {
          // Skip closing tags and special tags
          if (tagContent.startsWith('/') || tagContent.startsWith('!') || tagContent.includes('alt=') || tagContent.includes('title=')) {
            return match;
          }
          
          // Add alt and title to ALL elements
          return `<${tagContent} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        .replace(/class="([^"]*)"/g, (match, className) => {
          return `class="${className}" alt="${mainKeyword}" title="${mainKeyword}"`;
        });

      // Format the HTML (basic pretty-print)
      const formattedHtml = optimizedHtml
        .replace(/></g, '>\n<')
        .replace(/\n\s*\n/g, '\n');
      
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
