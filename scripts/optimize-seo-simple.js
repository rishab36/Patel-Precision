const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

/**
 * CLEAN SEO OPTIMIZATION - Proper way to add SEO
 * Uses Schema.org JSON-LD instead of attribute stuffing
 * Only adds valid attributes to proper elements
 */
async function optimizeSeClean() {
  console.log('Starting clean SEO optimization...');
  
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
  console.log(`Found ${allFiles.length} HTML files to optimize`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Optimizing: ${file}`);
    
    try {
      // Read the HTML file
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Extract page title for keyword optimization
      const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
      const pageTitle = titleMatch ? titleMatch[1].split(',')[0].trim() : 'Patel Precision';
      const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
      
      // Generate multiple keyword variations for meta tags
      const keywordVariations = [
        mainKeyword,
        `${mainKeyword} Services`,
        `${mainKeyword} Providers`,
        `${mainKeyword} in Mumbai`,
        `${mainKeyword} in India`
      ];
      
      // Create proper meta tags (only one set, not duplicates)
      const metaTags = `
    <meta name="keywords" content="${keywordVariations.join(', ')}">
    <meta name="description" content="Patel Precision provides high-quality ${mainKeyword} services with over 25 years of expertise in precision manufacturing.">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="revisit-after" content="7 days">
    <link rel="canonical" href="https://patelprecision.com/">`;
      
      // Insert proper meta tags
      html = html.replace('</head>', `${metaTags}\n</head>`);
      
      // Add Schema.org JSON-LD structured data (proper SEO method)
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Patel Precision Pvt Ltd",
        "description": `Patel Precision specializes in ${mainKeyword}`,
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
        },
        "sameAs": [
          "https://www.facebook.com/Patel-Precision-Pvt-Ltd",
          "https://twitter.com/PvtPatel"
        ]
      };
      
      const schemaScript = `\n    <script type="application/ld+json">\n${JSON.stringify(schemaData, null, 2)}\n    </script>`;
      
      // Insert schema before closing head
      html = html.replace('</head>', `${schemaScript}\n</head>`);
      
      // ONLY add alt text to IMG tags (the ONLY tag that should have alt)
      html = html.replace(/<img([^>]*)>/g, (match, attributes) => {
        if (attributes.includes('alt=')) return match; // Already has alt
        if (attributes.includes('alt')) return match;  // Already has alt
        return `<img${attributes} alt="${mainKeyword}">`;
      });
      
      // ONLY add alt to INPUT type=image
      html = html.replace(/<input([^>]*type\s*=\s*['"]*image['"]*[^>]*)>/g, (match, attributes) => {
        if (attributes.includes('alt=')) return match;
        return `<input${attributes} alt="${mainKeyword}">`;
      });
      
      // Clean up formatting - remove excessive line breaks but keep structure
      const cleanedHtml = html
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
        .trim();
      
      // Write back to the file
      fs.writeFileSync(filePath, cleanedHtml);
      
      console.log(`✓ ${file} optimized (clean method)`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('Clean SEO optimization complete!');
}

optimizeSeClean().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
