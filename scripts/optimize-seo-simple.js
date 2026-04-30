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
      
      // Add proper SEO attributes only to valid elements
      html = html
        // Add alt attributes to images that don't have them
        .replace(/<img(?![^>]*alt=)([^>]*)>/g, (match, attributes) => {
          return `<img${attributes} alt="${mainKeyword}">`;
        })
        // Add title attributes to links that don't have them
        .replace(/<a(?![^>]*title=)([^>]*href="[^"]*")([^>]*)>/g, (match, hrefAttrs, otherAttrs) => {
          return `<a${hrefAttrs}${otherAttrs} title="${mainKeyword}">`;
        })
        // Add semantic class names to structural elements
        .replace(/<(div|section|main|header|footer|nav|article|aside)(?![^>]*class=)([^>]*)>/g, (match, tag, attributes) => {
          const keywordClass = mainKeyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          return `<${tag}${attributes} class="${keywordClass}-container">`;
        })
        // Enhance existing classes with keywords
        .replace(/class="([^"]*)"/g, (match, className) => {
          const keywordClass = mainKeyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          if (!className.includes(keywordClass)) {
            return `class="${className} ${keywordClass}"`;
          }
          return match;
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
  const keywordClass = mainKeyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const content = `
    <!-- SEO Content Section -->
    <div class="container seo-content-section ${keywordClass}-content">
      <div class="row ${keywordClass}-row">
        <div class="col-md-12 ${keywordClass}-column">
          <p class="seo-description ${keywordClass}-description">
            <strong class="${keywordClass}-highlight">Patel Precision Pvt Ltd is the leading ${mainKeyword} manufacturer and service provider in Mumbai, Navi Mumbai, Thane, and across India. We specialize in ${keywordVariations[0]}, ${keywordVariations[1]}, and ${keywordVariations[2]} with over 25 years of expertise in precision manufacturing.</strong>
          </p>
          <p class="seo-description ${keywordClass}-description">
            <strong class="${keywordClass}-highlight">Our organization is counted as one of the premier ${mainKeyword} service providers, offering superior quality ${keywordVariations[3]} and ${keywordVariations[4]} to our valuable clients. We maintain the highest work standards to meet your specific needs and requirements.</strong>
          </p>
          <p class="seo-description ${keywordClass}-description">
            <strong class="${keywordClass}-highlight">The ${mainKeyword} services offered by Patel Precision are provided by our experienced team members who are perfect in this field. Our ${keywordVariations[5]} and ${keywordVariations[6]} are being appreciated by patrons for on-time completion and better service results.</strong>
          </p>
          <p class="seo-description ${keywordClass}-description">
            <strong class="${keywordClass}-highlight">Clients can avail our premium ${mainKeyword} services at market leading prices. We are recognized as the top ${keywordVariations[7]} and ${keywordVariations[8]} provider in Bhiwandi, Maharashtra, serving global industries with excellence.</strong>
          </p>
        </div>
      </div>
    </div>
  `;
  
  return content;
}

optimizeSeoSimple();
