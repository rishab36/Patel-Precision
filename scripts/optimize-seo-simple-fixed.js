const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function optimizeSeoSimpleFixed() {
  console.log('Starting SIMPLE FIXED SEO optimization...');
  
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
      
      // Validate we have HTML content
      if (!html || typeof html !== 'string') {
        console.log(`- ${file} - No valid HTML content`);
        continue;
      }
      
      // Extract page title for keyword optimization
      const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
      const pageTitle = titleMatch ? titleMatch[1].split(',')[0].trim() : 'Patel Precision';
      const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
      
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
      
      // Add proper meta tags - only if head tag exists
      if (html.includes('</head>')) {
        // Clean up existing meta tags first
        html = html.replace(/<meta name="keywords"[^>]*>/gi, '');
        html = html.replace(/<meta name="description"[^>]*>/gi, '');
        
        // Add new meta tags
        let metaTags = '';
        keywordVariations.forEach(keyword => {
          const escapedKeyword = keyword.replace(/"/g, '&quot;');
          metaTags += `\n    <meta name="keywords" content="${escapedKeyword}, ${escapedKeyword} Services, ${escapedKeyword} Providers, ${escapedKeyword} Service Providers">\n    <meta name="description" content="We Offer ${escapedKeyword}, ${escapedKeyword} Services, ${escapedKeyword} Providers, ${escapedKeyword} Service Providers">`;
        });
        
        html = html.replace('</head>', `${metaTags}\n</head>`);
      }
      
      // Add SEO content only if body tag exists
      if (html.includes('<body')) {
        const keywordContent = generateSimpleKeywordContent(mainKeyword, keywordVariations);
        html = html.replace('<body', `<body>\n${keywordContent}\n`);
      }
      
      // Add alt attributes to images that don't have them
      html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
        if (attributes.includes('alt=')) return match;
        const escapedKeyword = mainKeyword.replace(/"/g, '&quot;');
        return `<img${attributes} alt="${escapedKeyword}">`;
      });
      
      // Add title attributes to links that don't have them
      html = html.replace(/<a([^>]*?)>/g, (match, attributes) => {
        if (attributes.includes('title=')) return match;
        const escapedKeyword = mainKeyword.replace(/"/g, '&quot;');
        return `<a${attributes} title="${escapedKeyword}">`;
      });
      
      // Basic formatting
      html = html.replace(/></g, '>\n<');
      
      // Write back to the file
      fs.writeFileSync(filePath, html);
      
      console.log(`\u2713 ${file} optimized`);
    } catch (error) {
      console.error(`\u2717 Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('SEO optimization complete!');
}

// Generate simple keyword content
function generateSimpleKeywordContent(mainKeyword, keywordVariations) {
  const escapedKeyword = mainKeyword.replace(/"/g, '&quot;');
  const content = `
    <!-- SEO Content Section -->
    <div class="seo-content-section" style="display:none;">
      <p><strong>Patel Precision Pvt Ltd is the leading ${escapedKeyword} manufacturer and service provider in Mumbai, Navi Mumbai, Thane, and across India.</strong></p>
      <p><strong>We specialize in ${keywordVariations[0].replace(/"/g, '&quot;')}, ${keywordVariations[1].replace(/"/g, '&quot;')}, and ${keywordVariations[2].replace(/"/g, '&quot;')} with over 25 years of expertise in precision manufacturing.</strong></p>
      <p><strong>Our ${escapedKeyword} services are provided by experienced team members with on-time completion and better service results.</strong></p>
    </div>
  `;
  
  return content;
}

optimizeSeoSimpleFixed();
