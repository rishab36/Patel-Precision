const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function optimizeSeoSimple() {
  console.log('Starting simple SEO optimization...');
  
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
      html = html.replace('</head>', `${metaTags}\n</head>`);
      
      // Add keyword stuffing to specific HTML elements only
      html = html
        // Add to div elements
        .replace(/<div([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<div${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to section elements
        .replace(/<section([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<section${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to main elements
        .replace(/<main([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<main${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to h1, h2, h3 elements
        .replace(/<h([1-6])([^>]*)>/g, (match, level, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<h${level}${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to p elements
        .replace(/<p([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<p${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to body element
        .replace(/<body([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<body${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        });
      
      // Format the HTML (basic pretty-print)
      const formattedHtml = html
        .replace(/></g, '>\n<')
        .replace(/\n\s*\n/g, '\n');
      
      // Write back to the file
      fs.writeFileSync(filePath, formattedHtml);
      
      console.log(`✓ ${file} optimized`);
    } catch (error) {
      console.error(`✗ Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('SEO optimization complete!');
}

optimizeSeoSimple();
