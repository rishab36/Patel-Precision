const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');
const PORT = 8080;

/**
 * CLEAN SEO HTML GENERATION
 * Generates proper HTML without attribute stuffing
 * Uses valid semantic HTML and Schema.org structured data
 */
async function generateSeoHtmlClean() {
  console.log('Starting clean SEO HTML generation...');
  
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
      let html = await page.content();
      
      // Extract page title for keyword optimization
      const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
      const pageTitle = titleMatch ? titleMatch[1].split(',')[0].trim() : 'Patel Precision';
      const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
      
      // Generate keyword variations for meta tags
      const keywordVariations = [
        mainKeyword,
        `${mainKeyword} Services`,
        `${mainKeyword} Providers`,
        `${mainKeyword} in Mumbai`,
        `${mainKeyword} in India`
      ];
      
      // Add single set of clean meta tags
      const metaTags = `
    <meta name="keywords" content="${keywordVariations.join(', ')}">
    <meta name="description" content="Patel Precision provides high-quality ${mainKeyword} services with over 25 years of expertise in precision manufacturing.">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="revisit-after" content="7 days">
    <link rel="canonical" href="https://patelprecision.com/">`;
      
      // Remove any existing duplicate meta tags
      html = html.replace(/<meta\s+name="keywords"[^>]*>/gi, '');
      html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
      
      // Insert clean meta tags
      html = html.replace('</head>', `${metaTags}\n</head>`);
      
      // Add Schema.org JSON-LD (proper SEO, not attribute stuffing)
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Patel Precision Pvt Ltd",
        "description": `High-quality ${mainKeyword} manufacturer and service provider`,
        "url": "https://patelprecision.com",
        "telephone": "+919820808852",
        "email": "rakesh@patelprecision.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. - 9, Dewan Shah Udyog Nagar",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "401208",
          "addressCountry": "IN"
        }
      };
      
      const schemaScript = `\n    <script type="application/ld+json">\n${JSON.stringify(schemaData, null, 2)}\n    </script>`;
      
      // Remove old schema scripts if any
      html = html.replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
      
      // Insert new schema
      html = html.replace('</head>', `${schemaScript}\n</head>`);
      
      // ONLY add alt text to IMG tags (proper semantic HTML)
      html = html.replace(/<img([^>]*)>/g, (match, attributes) => {
        if (attributes.includes('alt=') || attributes.includes('alt ')) return match;
        return `<img${attributes} alt="${mainKeyword}">`;
      });
      
      // Add alt to INPUT type=image
      html = html.replace(/<input([^>]*type\s*=\s*['"]*image['"]*[^>]*)>/gi, (match, attributes) => {
        if (attributes.includes('alt=') || attributes.includes('alt ')) return match;
        return `<input${attributes} alt="${mainKeyword}">`;
      });
      
      // Clean formatting - remove excessive whitespace
      const cleanedHtml = html
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
        .trim();
      
      // Write back to the file
      fs.writeFileSync(path.join(OUT_DIR, file), cleanedHtml);
      
      await page.close();
      console.log(`✓ ${file} processed (clean method)`);
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  await context.close();
  await browser.close();
  
  server.close();
  console.log('Clean SEO HTML generation complete!');
}

generateSeoHtmlClean().catch(console.error);
