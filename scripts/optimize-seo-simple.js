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
      
      // Add flowing keyword content like Gemsons example
      const keywordContent = generateKeywordContent(mainKeyword, keywordVariations);
      
      // Insert keyword content after body tag
      html = html.replace('<body', `<body>\n${keywordContent}\n`);
      
      // Add clean keyword stuffing like the example website - only to specific elements, exclude self-closing
      html = html
        // Add to div elements (like example) - exclude self-closing
        .replace(/<div([^>]*)>(?!<\/div>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<div${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to section elements - exclude self-closing
        .replace(/<section([^>]*)>(?!<\/section>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<section${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to main elements - exclude self-closing
        .replace(/<main([^>]*)>(?!<\/main>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<main${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to h1, h2, h3 elements - exclude self-closing
        .replace(/<h([1-6])([^>]*)>(?!<\/h\1>)/g, (match, level, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<h${level}${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to p elements - exclude self-closing
        .replace(/<p([^>]*)>(?!<\/p>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<p${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to span elements - exclude self-closing
        .replace(/<span([^>]*)>(?!<\/span>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<span${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to a elements - exclude self-closing
        .replace(/<a([^>]*)>(?!<\/a>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<a${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to img elements (ensure they have alt) - only for non-self-closing
        .replace(/<img([^>]*)(?!\/>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<img${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to body element - exclude self-closing
        .replace(/<body([^>]*)>(?!<\/body>)/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<body${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        });
      
      // Format the HTML (basic pretty-print)
      const formattedHtml = html
        .replace(/></g, '>\n<')
        .replace(/\n\s*\n/g, '\n');
      
      // Write back to the file
      fs.writeFileSync(filePath, formattedHtml);
      
      console.log(`\u2713 ${file} optimized`);
    } catch (error) {
      console.error(`\u2717 Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('SEO optimization complete!');
}

// Generate flowing keyword content like Gemsons example
function generateKeywordContent(mainKeyword, keywordVariations) {
  const content = `
    <!-- SEO Content Section - Patel Precision -->
    <div class="container seo-content-section" alt="${mainKeyword}" title="${mainKeyword}">
      <div class="row" alt="${mainKeyword}" title="${mainKeyword}">
        <div class="col-md-12" alt="${mainKeyword}" title="${mainKeyword}">
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">Patel Precision Pvt Ltd counted as one of the leading ${mainKeyword} manufacturer and service provider in Mumbai, Navi Mumbai, Thane over India. We keep our work standard to meet your needs. Clients can avail this service from us at market leading price.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">These ${mainKeyword} services are provided by our experienced team members who are perfect in this field. ${mainKeyword} offered by us is being appreciated by patrons for on-time completion and better service results.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">We are engaged in rendering superior quality ${mainKeyword} to our valuable clients. Our organization Patel Precision Pvt Ltd counted as one of the leading service provider engaged in rendering superior quality ${mainKeyword}.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">The ${mainKeyword} services offered by us is being appreciated by patrons for on-time completion and better service results. We keep our work standard to meet your needs and requirements.</strong>
          </p>
        </div>
      </div>
    </div>
    
    <!-- Additional SEO Content -->
    <div class="container seo-content-section" alt="${mainKeyword}" title="${mainKeyword}">
      <div class="row" alt="${mainKeyword}" title="${mainKeyword}">
        <div class="col-md-12" alt="${mainKeyword}" title="${mainKeyword}">
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">Patel Precision Pvt Ltd is the leading ${mainKeyword} manufacturer in Bhiwandi, Maharashtra, India. We specialize in precision manufacturing with over 25 years of expertise in ${keywordVariations[0]} and ${keywordVariations[1]}.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">Our organization is counted as one of the premier ${mainKeyword} service providers, offering superior quality ${keywordVariations[2]} and ${keywordVariations[3]} to our valuable clients across Mumbai, Navi Mumbai, and Thane.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">Clients can avail our premium ${mainKeyword} services at market leading prices. We are recognized as the top ${keywordVariations[4]} provider serving global industries with excellence.</strong>
          </p>
        </div>
      </div>
    </div>
  `;
  
  return content;
}

optimizeSeoSimple();
