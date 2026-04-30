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
      
      // Add clean keyword stuffing like the example website - avoid self-closing tags
      html = html
        // Add to div elements (like example) - avoid self-closing
        .replace(/<div([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<div${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to section elements - avoid self-closing
        .replace(/<section([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<section${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to main elements - avoid self-closing
        .replace(/<main([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<main${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to h1, h2, h3 elements - avoid self-closing
        .replace(/<h([1-6])([^>]*)>/g, (match, level, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<h${level}${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to p elements - avoid self-closing
        .replace(/<p([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<p${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to span elements - avoid self-closing
        .replace(/<span([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<span${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to a elements - avoid self-closing
        .replace(/<a([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<a${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Fix self-closing tags properly - only modify if they don't have alt/title
        .replace(/<img([^>]*?)\/>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<img${attributes} alt="${mainKeyword}" title="${mainKeyword}"/>`;
        })
        .replace(/<meta([^>]*?)\/>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<meta${attributes} alt="${mainKeyword}" title="${mainKeyword}"/>`;
        })
        .replace(/<link([^>]*?)\/>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<link${attributes} alt="${mainKeyword}" title="${mainKeyword}"/>`;
        })
        // Add to body element - avoid self-closing
        .replace(/<body([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=') || attributes.includes('/>')) return match;
          return `<body${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        });
      
      // Format the HTML to be clean and readable like Gemsons
      const formattedHtml = html
        .replace(/></g, '>\n<')
        .replace(/\n\s*\n/g, '\n')
        .replace(/\n\s{2,}/g, '\n    ')
        .replace(/<html/g, '\n<html')
        .replace(/<head/g, '\n<head')
        .replace(/<body/g, '\n<body')
        .replace(/<\/head>/g, '\n</head>\n')
        .replace(/<\/body>/g, '\n</body>\n')
        .replace(/<\/html>/g, '\n</html>');
      
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
    <!-- SEO Content Section -->
    <div class="container seo-content-section" alt="${mainKeyword}" title="${mainKeyword}">
    <div class="row" alt="${mainKeyword}" title="${mainKeyword}">
      <div class="col-md-12" alt="${mainKeyword}" title="${mainKeyword}">
         <p class="patel-precision" alt="${mainKeyword}" title="${mainKeyword}"> 
          <h3 alt="${mainKeyword}" title="${mainKeyword}"><strong alt="${mainKeyword}" title="${mainKeyword}">${mainKeyword} Services</strong></h3>
         
       </div>
     </div>
      <div class="row gal" alt="${mainKeyword}" title="${mainKeyword}">
        <div class="col-md-4 mt-3 mb-3" alt="${mainKeyword}" title="${mainKeyword}">
          <img src="https://patelprecision.com/images/${mainKeyword.toLowerCase().replace(/\s+/g, '-')}.jpg" class="img-fluid" alt="${mainKeyword}" title="${mainKeyword}">
        </div>
        <div class="col-md-8 mt-3 mb-3" alt="${mainKeyword}" title="${mainKeyword}">
          <p class="prod" alt="${mainKeyword}" title="${mainKeyword}"><strong alt="${mainKeyword}" title="${mainKeyword}">Our organization Patel Precision Pvt Ltd counted as one of the leading service provider engaged in rendering superior quality ${mainKeyword} to our valuable clients in Mumbai, Navi Mumbai, Thane over India. We keep our work standard to meet your needs. Clients can avail this service from us at market leading price.</strong></p>
		  <p class="prod" alt="${mainKeyword}" title="${mainKeyword}"><strong alt="${mainKeyword}" title="${mainKeyword}">These services are provided by our experienced team members who are perfect in this field. ${mainKeyword} offered by us is being appreciated by patrons for on-time completion and better service results. </strong></p>
        </div>
      </div>
    </div>
  `;
  
  return content;
}

optimizeSeoSimple();
