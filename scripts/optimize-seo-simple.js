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
      
      // Add clean keyword stuffing like the example website - only to specific elements
      html = html
        // Add to div elements (exclude self-closing and malformed tags)
        .replace(/<div([^>\/\s][^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<div${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to section elements (exclude self-closing)
        .replace(/<section([^>\/\s][^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<section${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to main elements (exclude self-closing)
        .replace(/<main([^>\/\s][^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<main${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to h1, h2, h3 elements (exclude self-closing)
        .replace(/<h([1-6])([^>\/\s][^>]*)>/g, (match, level, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<h${level}${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to p elements (exclude self-closing)
        .replace(/<p([^>\/\s][^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<p${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to span elements (exclude self-closing)
        .replace(/<span([^>\/\s][^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<span${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to a elements (exclude self-closing)
        .replace(/<a([^>\/\s][^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          return `<a${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        })
        // Add to img elements (handle self-closing properly)
        .replace(/<img([^>]*)>/g, (match, attributes) => {
          if (attributes.includes('alt=') || attributes.includes('title=')) return match;
          // Check if it's self-closing
          if (match.endsWith('/>')) {
            return `<img${attributes} alt="${mainKeyword}" title="${mainKeyword}" />`;
          }
          return `<img${attributes} alt="${mainKeyword}" title="${mainKeyword}">`;
        });
      
      // Format the HTML (safer formatting)
      const formattedHtml = html
        .replace(/></g, '>\n<')
        .replace(/\n\s*\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n');
      
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
  // Create shorter, more readable keywords
  const cleanKeyword = mainKeyword.replace(/&amp;/g, '&').replace(/ - .*$/, '');
  const locations = ['Mumbai', 'Navi Mumbai', 'Thane', 'Bhiwandi', 'India'];
  
  const content = `
    <!-- SEO Content Section -->
    <div class="container seo-content-section" alt="${cleanKeyword}" title="${cleanKeyword}">
      <div class="row" alt="${cleanKeyword}" title="${cleanKeyword}">
        <div class="col-md-12" alt="${cleanKeyword}" title="${cleanKeyword}">
          <p class="seo-description" alt="${cleanKeyword}" title="${cleanKeyword}">
            <strong alt="${cleanKeyword}" title="${cleanKeyword}">Patel Precision Pvt Ltd is the leading ${cleanKeyword} manufacturer and service provider in ${locations.join(', ')}. We specialize in precision manufacturing with over 25 years of expertise in CNC machining and precision components.</strong>
          </p>
          <p class="seo-description" alt="${cleanKeyword}" title="${cleanKeyword}">
            <strong alt="${cleanKeyword}" title="${cleanKeyword}">Our organization is counted as one of the premier ${cleanKeyword} service providers, offering superior quality precision machined components to our valuable clients. We maintain the highest work standards to meet your specific needs and requirements.</strong>
          </p>
          <p class="seo-description" alt="${cleanKeyword}" title="${cleanKeyword}">
            <strong alt="${cleanKeyword}" title="${cleanKeyword}">The ${cleanKeyword} services offered by Patel Precision are provided by our experienced team members who are perfect in this field. Our precision machining services are being appreciated by patrons for on-time completion and better service results.</strong>
          </p>
          <p class="seo-description" alt="${cleanKeyword}" title="${cleanKeyword}">
            <strong alt="${cleanKeyword}" title="${cleanKeyword}">Clients can avail our premium ${cleanKeyword} services at market leading prices. We are recognized as the top precision components provider in Bhiwandi, Maharashtra, serving global industries with excellence.</strong>
          </p>
        </div>
      </div>
    </div>
  `;
  
  return content;
}

optimizeSeoSimple();
