const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function organizeHtmlStructure() {
  console.log('Starting HTML structure organization...');
  
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
  console.log(`Found ${allFiles.length} HTML files to organize`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Organizing: ${file}`);
    
    try {
      // Read the HTML file
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Store original for comparison
      const original = html;
      
      // Fix common structural issues
      
      // 1. Ensure proper DOCTYPE
      if (!html.startsWith('<!DOCTYPE')) {
        html = '<!DOCTYPE html>\n' + html;
      }
      
      // 2. Fix HTML tag structure
      html = html.replace(/<html[^>]*>/i, '<html lang="en">');
      
      // 3. Ensure proper head structure
      if (!html.includes('<head>')) {
        html = html.replace('<html', '<html>\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Patel Precision</title>\n</head>');
      }
      
      // 4. Ensure proper body structure
      if (!html.includes('<body')) {
        html = html.replace('</head>', '</head>\n<body>');
      }
      
      // 5. Fix closing tags
      if (!html.includes('</body>')) {
        html = html.replace('</html>', '</body>\n</html>');
      }
      
      // 6. Organize meta tags properly
      html = organizeMetaTags(html);
      
      // 7. Organize CSS and JS links
      html = organizeLinks(html);
      
      // 8. Add proper indentation for readability
      html = addProperIndentation(html);
      
      // 9. Clean up excessive whitespace
      html = cleanWhitespace(html);
      
      // Only write if changes were made
      if (html !== original) {
        fs.writeFileSync(filePath, html);
        console.log(`\u2713 ${file} organized`);
      } else {
        console.log(`- ${file} already organized`);
      }
      
    } catch (error) {
      console.error(`\u2717 Error organizing ${file}:`, error.message);
    }
  }
  
  console.log('HTML structure organization complete!');
}

function organizeMetaTags(html) {
  // Find head section
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (!headMatch) return html;
  
  let headContent = headMatch[1];
  
  // Group meta tags by type
  const charsetTag = headContent.match(/<meta[^>]*charset[^>]*>/i) || '';
  const viewportTag = headContent.match(/<meta[^>]*viewport[^>]*>/i) || '';
  const titleTag = headContent.match(/<title[^>]*>[\s\S]*?<\/title>/i) || '';
  const descriptionTag = headContent.match(/<meta[^>]*description[^>]*>/i) || '';
  const keywordsTag = headContent.match(/<meta[^>]*keywords[^>]*>/i) || '';
  const otherMetaTags = headContent.match(/<meta[^>]*(?!charset|viewport|description|keywords)[^>]*>/gi) || [];
  const linkTags = headContent.match(/<link[^>]*>/gi) || [];
  const scriptTags = headContent.match(/<script[^>]*>[\s\S]*?<\/script>/gi) || [];
  
  // Rebuild head with proper order
  let newHeadContent = '\n';
  
  if (charsetTag) newHeadContent += '  ' + charsetTag + '\n';
  if (viewportTag) newHeadContent += '  ' + viewportTag + '\n';
  if (titleTag) newHeadContent += '  ' + titleTag + '\n';
  if (descriptionTag) newHeadContent += '  ' + descriptionTag + '\n';
  if (keywordsTag) newHeadContent += '  ' + keywordsTag + '\n';
  
  // Add other meta tags
  otherMetaTags.forEach(tag => {
    newHeadContent += '  ' + tag + '\n';
  });
  
  // Add link tags
  linkTags.forEach(tag => {
    newHeadContent += '  ' + tag + '\n';
  });
  
  // Add script tags
  scriptTags.forEach(tag => {
    newHeadContent += '  ' + tag + '\n';
  });
  
  newHeadContent += '\n';
  
  // Replace head content
  html = html.replace(/<head[^>]*>[\s\S]*?<\/head>/i, '<head>' + newHeadContent + '</head>');
  
  return html;
}

function organizeLinks(html) {
  // Move external CSS to head, JS to body end if needed
  // This is a simplified version - could be expanded
  
  return html;
}

function addProperIndentation(html) {
  // Simple indentation based on tag nesting
  let lines = html.split('\n');
  let indentLevel = 0;
  let result = [];
  
  for (let line of lines) {
    line = line.trim();
    
    if (line.startsWith('</')) {
      indentLevel--;
    }
    
    if (line) {
      result.push('  '.repeat(Math.max(0, indentLevel)) + line);
    }
    
    if (line.startsWith('<') && !line.startsWith('</') && !line.includes('/>') && !line.startsWith('<!')) {
      const tagName = line.match(/<(\w+)/);
      if (tagName) {
        const tag = tagName[1].toLowerCase();
        const voidElements = ['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'track', 'area', 'base', 'col', 'embed', 'param', 'wbr', 'command', 'keygen', 'menuitem'];
        
        if (!voidElements.includes(tag) && !line.includes('/>')) {
          indentLevel++;
        }
      }
    }
  }
  
  return result.join('\n');
}

function cleanWhitespace(html) {
  // Remove excessive empty lines
  html = html.replace(/\n\s*\n\s*\n/g, '\n\n');
  html = html.replace(/^\s+|\s+$/g, '');
  
  return html;
}

organizeHtmlStructure();
