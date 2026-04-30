const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function optimizeSeoFixed() {
  console.log('Starting FIXED SEO optimization...');
  
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
      
      // Add proper meta tags - replace existing ones if any
      let metaTags = '';
      keywordVariations.forEach(keyword => {
        metaTags += `\n    <meta name="keywords" content="${escapeHtml(keyword)}, ${escapeHtml(keyword)} Services, ${escapeHtml(keyword)} Providers, ${escapeHtml(keyword)} Service Providers">\n    <meta name="description" content="We Offer ${escapeHtml(keyword)}, ${escapeHtml(keyword)} Services, ${escapeHtml(keyword)} Providers, ${escapeHtml(keyword)} Service Providers">`;
      });
      
      // Clean up existing meta tags first
      html = html.replace(/<meta name="keywords"[^>]*>/gi, '');
      html = html.replace(/<meta name="description"[^>]*>/gi, '');
      
      // Insert new meta tags after existing meta tags or before </head>
      if (html.includes('</head>')) {
        html = html.replace('</head>', `${metaTags}\n</head>`);
      }
      
      // Add flowing keyword content
      const keywordContent = generateCleanKeywordContent(mainKeyword, keywordVariations);
      
      // Insert keyword content after body tag
      if (html.includes('<body')) {
        html = html.replace('<body', `<body>\n${keywordContent}\n`);
      }
      
      // Clean up existing invalid alt and title attributes
      html = cleanInvalidAttributes(html);
      
      // Add SEO attributes ONLY to appropriate elements
      html = addValidSeoAttributes(html, mainKeyword);
      
      // Format the HTML properly
      const formattedHtml = formatHtml(html);
      
      // Write back to the file
      fs.writeFileSync(filePath, formattedHtml);
      
      console.log(`\u2713 ${file} optimized`);
    } catch (error) {
      console.error(`\u2717 Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('SEO optimization complete!');
}

// Escape HTML special characters
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Clean up invalid alt and title attributes from non-image elements
function cleanInvalidAttributes(html) {
  // Remove alt attributes from elements that shouldn't have them
  const invalidAltElements = ['html', 'head', 'body', 'div', 'section', 'main', 'header', 'footer', 'nav', 'article', 'aside', 'ul', 'ol', 'li', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button', 'form', 'input', 'label', 'select', 'textarea', 'table', 'tr', 'td', 'th', 'tbody', 'thead', 'tfoot'];
  
  invalidAltElements.forEach(tag => {
    // Remove alt attributes
    const altRegex = new RegExp(`<${tag}([^>]*?)\\s+alt="[^"]*"([^>]*?)>`, 'gi');
    html = html.replace(altRegex, `<${tag}$1$2>`);
    
    // Remove title attributes (keep some semantic ones)
    const titleRegex = new RegExp(`<${tag}([^>]*?)\\s+title="[^"]*"([^>]*?)>`, 'gi');
    html = html.replace(titleRegex, `<${tag}$1$2>`);
  });
  
  return html;
}

// Add valid SEO attributes only to appropriate elements
function addValidSeoAttributes(html, mainKeyword) {
  // Add alt attributes to img elements that don't have them
  html = html.replace(/<img([^>]*?)>/g, (match, attributes) => {
    if (attributes.includes('alt=')) return match;
    return `<img${attributes} alt="${escapeHtml(mainKeyword)}">`;
  });
  
  // Add title attributes to links that don't have them
  html = html.replace(/<a([^>]*?)>/g, (match, attributes) => {
    if (attributes.includes('title=')) return match;
    return `<a${attributes} title="${escapeHtml(mainKeyword)}">`;
  });
  
  // Add semantic title attributes to section headers
  html = html.replace(/<h([1-6])([^>]*?)>([^<]+)</g, (match, level, attributes, content) => {
    if (attributes.includes('title=')) return match;
    return `<h${level}${attributes} title="${escapeHtml(content.trim())}">${content}</`;
  });
  
  return html;
}

// Generate clean keyword content without invalid attributes
function generateCleanKeywordContent(mainKeyword, keywordVariations) {
  const content = `
    <!-- SEO Content Section -->
    <div class="container seo-content-section" style="display:none;">
      <div class="row">
        <div class="col-md-12">
          <p class="seo-description">
            <strong>Patel Precision Pvt Ltd is the leading ${escapeHtml(mainKeyword)} manufacturer and service provider in Mumbai, Navi Mumbai, Thane, and across India. We specialize in ${escapeHtml(keywordVariations[0])}, ${escapeHtml(keywordVariations[1])}, and ${escapeHtml(keywordVariations[2])} with over 25 years of expertise in precision manufacturing.</strong>
          </p>
          <p class="seo-description">
            <strong>Our organization is counted as one of the premier ${escapeHtml(mainKeyword)} service providers, offering superior quality ${escapeHtml(keywordVariations[3])} and ${escapeHtml(keywordVariations[4])} to our valuable clients. We maintain the highest work standards to meet your specific needs and requirements.</strong>
          </p>
          <p class="seo-description">
            <strong>The ${escapeHtml(mainKeyword)} services offered by Patel Precision are provided by our experienced team members who are perfect in this field. Our ${escapeHtml(keywordVariations[5])} and ${escapeHtml(keywordVariations[6])} are being appreciated by patrons for on-time completion and better service results.</strong>
          </p>
          <p class="seo-description">
            <strong>Clients can avail our premium ${escapeHtml(mainKeyword)} services at market leading prices. We are recognized as the top ${escapeHtml(keywordVariations[7])} and ${escapeHtml(keywordVariations[8])} provider in Bhiwandi, Maharashtra, serving global industries with excellence.</strong>
          </p>
        </div>
      </div>
    </div>
  `;
  
  return content;
}

// Format HTML properly without breaking structure
function formatHtml(html) {
  // Basic formatting - ensure proper spacing between tags
  let formatted = html
    .replace(/></g, '>\n<')
    .replace(/\n\s*\n/g, '\n')
    .replace(/\n\s*<(meta|link)/g, '\n    <$1')  // Indent meta/link tags
    .replace(/\n\s*<\/(head|body|html)/g, '\n</$1'); // Fix closing tags
  
  return formatted;
}

optimizeSeoFixed();
