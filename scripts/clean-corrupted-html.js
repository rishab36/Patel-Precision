const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function cleanCorruptedHtml() {
  console.log('Starting HTML cleanup...');
  
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
  console.log(`Found ${allFiles.length} HTML files to clean`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Cleaning: ${file}`);
    
    try {
      // Read the HTML file
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Store original for comparison
      const original = html;
      
      // Fix malformed self-closing tags
      html = html.replace(/<(\w+)([^>]*?)\/>/g, (match, tag, attributes) => {
        // Tags that should be self-closing
        const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'track', 'area', 'base', 'col', 'embed', 'param', 'wbr', 'command', 'keygen', 'menuitem'];
        
        if (selfClosingTags.includes(tag.toLowerCase())) {
          return `<${tag}${attributes} />`; // Proper self-closing
        } else {
          return `<${tag}${attributes}></${tag}>`; // Not self-closing
        }
      });
      
      // Remove invalid alt attributes from non-image elements
      const invalidAltElements = ['html', 'head', 'body', 'div', 'section', 'main', 'header', 'footer', 'nav', 'article', 'aside', 'ul', 'ol', 'li', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button', 'form', 'input', 'label', 'select', 'textarea', 'table', 'tr', 'td', 'th', 'tbody', 'thead', 'tfoot', 'strong', 'i', 'b', 'em'];
      
      invalidAltElements.forEach(tag => {
        // Remove alt attributes
        const altRegex = new RegExp(`<${tag}([^>]*?)\\s+alt="[^"]*"([^>]*?)>`, 'gi');
        html = html.replace(altRegex, `<${tag}$1$2>`);
        
        // Remove title attributes (except for specific semantic cases)
        const titleRegex = new RegExp(`<${tag}([^>]*?)\\s+title="[^"]*"([^>]*?)>`, 'gi');
        html = html.replace(titleRegex, `<${tag}$1$2>`);
      });
      
      // Fix malformed closing tags
      html = html.replace(/<\s*\/\s*(\w+)\s*>/g, '</$1>'); // Fix spacing in closing tags
      html = html.replace(/<(\w+)([^>]*?)\/\s*>/g, '<$1$2>'); // Remove stray slashes
      
      // Fix broken attributes
      html = html.replace(/\s+alt=/g, ' alt=');
      html = html.replace(/\s+title=/g, ' title=');
      html = html.replace(/\s+class=/g, ' class=');
      html = html.replace(/\s+href=/g, ' href=');
      html = html.replace(/\s+src=/g, ' src=');
      
      // Remove duplicate attributes
      html = html.replace(/(\s+alt="[^"]*")\s+alt="[^"]*"/g, '$1');
      html = html.replace(/(\s+title="[^"]*")\s+title="[^"]*"/g, '$1');
      html = html.replace(/(\s+class="[^"]*")\s+class="[^"]*"/g, '$1');
      
      // Clean up excessive whitespace
      html = html.replace(/\s+/g, ' ').replace(/>\s+</g, '><');
      
      // Add proper line breaks for readability
      html = html.replace(/></g, '>\n<');
      
      // Fix specific common issues
      html = html.replace(/<br\s*\/>/gi, '<br />');
      html = html.replace(/<img([^>]*?)>/gi, (match, attributes) => {
        if (!attributes.includes('alt=')) {
          return `<img${attributes} alt="">`;
        }
        return match;
      });
      
      // Only write if changes were made
      if (html !== original) {
        fs.writeFileSync(filePath, html);
        console.log(`\u2713 ${file} cleaned (${html.length} chars, was ${original.length} chars)`);
      } else {
        console.log(`- ${file} already clean`);
      }
      
    } catch (error) {
      console.error(`\u2717 Error cleaning ${file}:`, error.message);
    }
  }
  
  console.log('HTML cleanup complete!');
}

cleanCorruptedHtml();
