const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function finalCleanup() {
  console.log('Starting FINAL HTML cleanup...');
  
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
  console.log(`Found ${allFiles.length} HTML files for final cleanup`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Cleaning: ${file}`);
    
    try {
      // Read the HTML file
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Store original for comparison
      const original = html;
      
      // Remove ALL invalid alt and title attributes from non-image elements
      html = removeAllInvalidAttributes(html);
      
      // Fix duplicate meta tags
      html = removeDuplicateMetaTags(html);
      
      // Fix broken title tags
      html = fixTitleTags(html);
      
      // Clean up formatting
      html = cleanFormatting(html);
      
      // Only write if changes were made
      if (html !== original) {
        fs.writeFileSync(filePath, html);
        console.log(`\u2713 ${file} cleaned`);
      } else {
        console.log(`- ${file} already clean`);
      }
      
    } catch (error) {
      console.error(`\u2717 Error cleaning ${file}:`, error.message);
    }
  }
  
  console.log('Final cleanup complete!');
}

function removeAllInvalidAttributes(html) {
  // List of elements that should NEVER have alt or title attributes
  const invalidElements = [
    'html', 'head', 'meta', 'link', 'script', 'style', 'title', 'base',
    'body', 'div', 'section', 'main', 'header', 'footer', 'nav', 'article', 'aside',
    'ul', 'ol', 'li', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'a', 'button', 'form', 'input', 'label', 'select', 'textarea', 'option',
    'table', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot', 'caption',
    'strong', 'b', 'i', 'em', 'u', 'br', 'hr',
    'iframe', 'object', 'embed', 'param', 'source', 'track'
  ];
  
  invalidElements.forEach(tag => {
    // Remove alt attributes
    const altRegex = new RegExp(`\\s+alt="[^"]*"`, 'gi');
    html = html.replace(new RegExp(`<${tag}([^>]*?)${altRegex.source}([^>]*?)>`, 'gi'), `<${tag}$1$2>`);
    
    // Remove title attributes (except for specific cases)
    const titleRegex = new RegExp(`\\s+title="[^"]*"`, 'gi');
    html = html.replace(new RegExp(`<${tag}([^>]*?)${titleRegex.source}([^>]*?)>`, 'gi'), `<${tag}$1$2>`);
  });
  
  // Also remove any remaining alt/title attributes that are not on images
  html = html.replace(/<(?!img)([^>]+?)\s+alt="[^"]*"([^>]*?)>/gi, '<$1$2>');
  html = html.replace(/<(?!img|a)([^>]+?)\s+title="[^"]*"([^>]*?)>/gi, '<$1$2>');
  
  return html;
}

function removeDuplicateMetaTags(html) {
  // Remove duplicate charset meta tags
  const charsetTags = html.match(/<meta[^>]*charset[^>]*>/gi) || [];
  if (charsetTags.length > 1) {
    // Keep only the first one
    html = html.replace(/<meta[^>]*charset[^>]*>/gi, (match, offset, string) => {
      const firstIndex = string.indexOf('<meta');
      const currentIndex = string.substring(0, offset).match(/<meta/g)?.length || 0;
      return currentIndex === 0 ? match : '';
    });
  }
  
  // Remove duplicate viewport meta tags
  const viewportTags = html.match(/<meta[^>]*viewport[^>]*>/gi) || [];
  if (viewportTags.length > 1) {
    html = html.replace(/<meta[^>]*viewport[^>]*>/gi, (match, offset, string) => {
      const firstIndex = string.indexOf('<meta');
      const currentIndex = string.substring(0, offset).match(/<meta/g)?.length || 0;
      return currentIndex === 0 ? match : '';
    });
  }
  
  return html;
}

function fixTitleTags(html) {
  // Fix broken title tags with attributes
  html = html.replace(/<title[^>]*alt="[^"]*"[^>]*title="[^"]*"([^>]*?)>/gi, '<title$1>');
  
  // Ensure title tag is properly formatted
  html = html.replace(/<title([^>]*)>/gi, (match, attributes) => {
    if (attributes.trim()) {
      // Move any content inside title to the title text
      const content = attributes.replace(/alt="[^"]*"/g, '').replace(/title="[^"]*"/g, '').trim();
      return `<title>${content}`;
    }
    return match;
  });
  
  return html;
}

function cleanFormatting(html) {
  // Fix broken lines and excessive spacing
  html = html.replace(/\s+/g, ' ');
  html = html.replace(/>\s*</g, '>\n<');
  html = html.replace(/\n\s*\n/g, '\n');
  
  // Fix specific formatting issues
  html = html.replace(/<title([^>]*)>/g, '<title>');
  html = html.replace(/<\/title>\s*<meta/g, '</title>\n  <meta');
  
  return html;
}

finalCleanup();
