const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

// Main product keywords (20 products)
const PRODUCT_KEYWORDS = [
  'cnc-machined-components',
  'cnc-turned-parts', 
  'air-compressor-parts',
  'air-compressor-valves',
  'automotive-components',
  'cable-glands',
  'fasteners',
  'pipe-fittings',
  'stainless-steel-flanges',
  'industrial-components',
  'spray-nozzles',
  'junction-boxes',
  'rollers',
  'compressor-valve-assembly',
  '5-axis-machined-parts',
  'cnc-components',
  'complex-machined-parts',
  'custom-cnc-components',
  'industrial-rollers',
  'precision-turned-parts'
];

// Location keywords
const LOCATION_KEYWORDS = [
  'mumbai', 'navi-mumbai', 'thane', 'bhiwandi', 'india', 'maharashtra'
];

// Service keywords
const SERVICE_KEYWORDS = [
  'cnc-machining-services',
  'precision-machining',
  '5-axis-machining-services',
  'vmc-machining-services',
  'cnc-job-work',
  'machining-services'
];

function enhanceSEO() {
  console.log('Starting SEO enhancement while preserving UI...');
  
  // Get all HTML files
  const htmlFiles = fs.readdirSync(OUT_DIR)
    .filter(file => file.endsWith('.html'))
    .filter(file => file !== '404.html');
  
  let productFiles = [];
  const productsDir = path.join(OUT_DIR, 'products');
  if (fs.existsSync(productsDir)) {
    productFiles = fs.readdirSync(productsDir)
      .filter(file => file.endsWith('.html'))
      .map(file => `products/${file}`);
  }
  
  const allFiles = [...htmlFiles, ...productFiles];
  console.log(`Found ${allFiles.length} HTML files to enhance`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Enhancing: ${file}`);
    
    try {
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Extract page information
      const pageInfo = extractPageInfo(html, file);
      
      // Enhance existing HTML without destroying UI
      html = enhanceExistingHTML(html, pageInfo, file);
      
      // Add keyword attributes to existing elements
      html = addKeywordAttributesToExisting(html, pageInfo);
      
      // Add SEO content section
      html = addSEOContentSection(html, pageInfo);
      
      // Enhance meta tags
      html = enhanceMetaTags(html, pageInfo);
      
      fs.writeFileSync(filePath, html);
      console.log(`\u2713 ${file} enhanced`);
    } catch (error) {
      console.error(`\u2717 Error enhancing ${file}:`, error.message);
    }
  }
  
  console.log('SEO enhancement complete!');
}

function extractPageInfo(html, file) {
  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
  const title = titleMatch ? titleMatch[1] : 'Patel Precision';
  
  // Extract description
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i);
  const description = descMatch ? descMatch[1] : '';
  
  // Determine page type and keywords
  const pageKeywords = determinePageKeywords(file, title);
  
  return {
    title,
    description,
    keywords: pageKeywords,
    file,
    type: determinePageType(file)
  };
}

function determinePageKeywords(file, title) {
  const allKeywords = [
    ...PRODUCT_KEYWORDS,
    ...SERVICE_KEYWORDS,
    ...LOCATION_KEYWORDS
  ];
  
  // Extract keywords from filename
  const fileKeywords = file.replace('.html', '').replace(/products\//, '').split('-');
  
  // Extract keywords from title
  const titleKeywords = title.toLowerCase().split(/\s+/);
  
  // Combine and deduplicate
  const combinedKeywords = [...new Set([
    ...fileKeywords,
    ...titleKeywords,
    ...allKeywords.filter(k => file.includes(k) || title.toLowerCase().includes(k))
  ])];
  
  return combinedKeywords.filter(k => k.length > 2).slice(0, 15);
}

function determinePageType(file) {
  if (file === 'index.html') return 'home';
  if (file.includes('about')) return 'about';
  if (file.includes('contact')) return 'contact';
  if (file.includes('products/') || file === 'products.html') return 'products';
  if (SERVICE_KEYWORDS.some(k => file.includes(k))) return 'service';
  return 'page';
}

function enhanceExistingHTML(html, pageInfo, file) {
  // Remove Next.js specific scripts but keep the rendered HTML
  html = html.replace(/<script[^>]*self\.__next_f[^<]*<\/script>/gi, '');
  html = html.replace(/<script[^>]*>\s*self\.__next_f[^<]*<\/script>/gi, '');
  html = html.replace(/<script[^>]*>\s*\["\$","[^<]*<\/script>/gi, '');
  
  // Add structured data to head
  const structuredData = generateStructuredData(pageInfo);
  const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${structuredDataScript}\n</head>`);
  }
  
  return html;
}

function addKeywordAttributesToExisting(html, pageInfo) {
  // Add keyword classes to existing elements without destroying their structure
  const keywordClass = pageInfo.keywords.join(' ');
  
  // Add to body tag
  html = html.replace(/<body([^>]*)>/gi, (match, attrs) => {
    if (attrs.includes('class=')) {
      return match.replace(/class="([^"]*)"/, `class="$1 ${keywordClass}"`);
    } else {
      return `<body${attrs} class="${keywordClass}">`;
    }
  });
  
  // Add to main elements
  const mainElements = ['header', 'main', 'footer', 'section', 'article', 'aside', 'nav'];
  mainElements.forEach(tag => {
    html = html.replace(new RegExp(`<${tag}([^>]*?)>`, 'gi'), (match, attrs) => {
      if (attrs.includes('class=')) {
        return match.replace(/class="([^"]*)"/, `class="$1 ${keywordClass}"`);
      } else {
        return `<${tag}${attrs} class="${keywordClass}">`;
      }
    });
  });
  
  // Add alt attributes to images that don't have them
  html = html.replace(/<img([^>]*?)>/gi, (match, attrs) => {
    if (!attrs.includes('alt=')) {
      return `<img${attrs} alt="${pageInfo.title} - ${pageInfo.keywords.join(', ')} Patel Precision">`;
    }
    return match;
  });
  
  return html;
}

function addSEOContentSection(html, pageInfo) {
  const seoContent = `
  <!-- Enhanced SEO Content Section -->
  <div class="seo-enhancement ${pageInfo.keywords.join(' ')}" style="display:none;">
    <div class="seo-container ${pageInfo.keywords.join(' ')}">
      <h1 class="seo-title ${pageInfo.keywords.join(' ')}">${escapeHtml(pageInfo.title)}</h1>
      <p class="seo-description ${pageInfo.keywords.join(' ')}">${escapeHtml(pageInfo.description)}</p>
      
      <div class="seo-content ${pageInfo.keywords.join(' ')}">
        <h2 class="seo-heading ${pageInfo.keywords.join(' ')}">Patel Precision - Leading ${pageInfo.keywords[0] || 'Precision Manufacturing'} Expert</h2>
        <p class="seo-text ${pageInfo.keywords.join(' ')}">Patel Precision Pvt Ltd is the premier <strong>${escapeHtml(pageInfo.keywords[0] || 'precision manufacturing')}</strong> specialist in Mumbai, Navi Mumbai, Thane, and across India. With over 25 years of excellence in precision engineering, we deliver exceptional <strong>${pageInfo.keywords.slice(0, 3).join(', ')}</strong> solutions to industries worldwide.</p>
        
        <h3 class="seo-subheading ${pageInfo.keywords.join(' ')}">Our ${pageInfo.keywords[0] || 'Precision Manufacturing'} Excellence</h3>
        <p class="seo-text ${pageInfo.keywords.join(' ')}">Our state-of-the-art manufacturing facility is equipped with advanced CNC technology and precision engineering tools. We specialize in <strong>${pageInfo.keywords.slice(1, 4).join(', ')}</strong>, ensuring the highest quality standards for every component.</p>
        
        <h3 class="seo-subheading ${pageInfo.keywords.join(' ')}">Quality ${pageInfo.keywords[0] || 'Manufacturing'} Solutions</h3>
        <p class="seo-text ${pageInfo.keywords.join(' ')}">At Patel Precision, we understand the critical importance of <strong>${pageInfo.keywords.slice(2, 5).join(', ')}</strong> in today's competitive market. Our skilled engineers and technicians ensure every component meets exact specifications and quality requirements.</p>
        
        <h3 class="seo-subheading ${pageInfo.keywords.join(' ')}">Comprehensive ${pageInfo.keywords[0] || 'Services'} Portfolio</h3>
        <p class="seo-text ${pageInfo.keywords.join(' ')}">We provide complete <strong>${pageInfo.keywords.slice(0, 4).join(', ')}</strong> solutions from concept to production. Our ISO 9001:2015 certification demonstrates our commitment to quality management and continuous improvement in precision engineering.</p>
        
        <h3 class="seo-subheading ${pageInfo.keywords.join(' ')}">Why Choose Patel Precision?</h3>
        <p class="seo-text ${pageInfo.keywords.join(' ')}">With decades of experience in <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong>, Patel Precision has established itself as a leader in the precision engineering industry. Our strategic Mumbai location enables us to serve clients across India and globally with exceptional <strong>${pageInfo.keywords.slice(1, 3).join(', ')}</strong> solutions.</p>
        
        <div class="seo-keywords ${pageInfo.keywords.join(' ')}">
          <h4 class="seo-keywords-title ${pageInfo.keywords.join(' ')}">Our Products & Services</h4>
          <ul class="seo-keywords-list ${pageInfo.keywords.join(' ')}">
            ${PRODUCT_KEYWORDS.slice(0, 10).map(product => `
              <li class="seo-keyword-item ${pageInfo.keywords.join(' ')}">
                <span class="seo-keyword ${pageInfo.keywords.join(' ')}">${product.replace(/-/g, ' ').toUpperCase()}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="seo-locations ${pageInfo.keywords.join(' ')}">
          <h4 class="seo-locations-title ${pageInfo.keywords.join(' ')}">Service Areas</h4>
          <ul class="seo-locations-list ${pageInfo.keywords.join(' ')}">
            ${LOCATION_KEYWORDS.map(location => `
              <li class="seo-location-item ${pageInfo.keywords.join(' ')}">
                <span class="seo-location ${pageInfo.keywords.join(' ')}">${location.toUpperCase()}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <p class="seo-contact ${pageInfo.keywords.join(' ')}">Contact Patel Precision Pvt Ltd today for all your <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong> needs. Experience the difference that 25+ years of precision engineering excellence can make for your business. Call us at +91-9820-808-852 or email rakesh@patelprecision.com.</p>
      </div>
    </div>
  </div>
  `;
  
  // Insert before closing body tag
  if (html.includes('</body>')) {
    html = html.replace('</body>', `${seoContent}\n</body>`);
  }
  
  return html;
}

function enhanceMetaTags(html, pageInfo) {
  // Enhanced meta tags
  const enhancedMetaTags = `
  <meta name="keywords" content="${pageInfo.keywords.join(', ')}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="author" content="Patel Precision Pvt Ltd">
  <meta name="language" content="English">
  <meta name="distribution" content="global">
  <meta name="rating" content="general">
  <meta name="revisit-after" content="7 days">
  `;
  
  // Add to head
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${enhancedMetaTags}\n</head>`);
  }
  
  return html;
}

function generateStructuredData(pageInfo) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://patelprecision.com/#organization",
        "name": "Patel Precision Pvt Ltd",
        "url": "https://patelprecision.com",
        "logo": "https://patelprecision.com/patel-precision-logo-new.png",
        "description": `ISO 9001:2015 certified precision machining manufacturer with 25+ years of expertise in ${pageInfo.keywords.join(', ')}`,
        "foundingDate": "1998",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A16/5, Harihar Corporation, Dapode",
          "addressLocality": "Bhiwandi",
          "addressRegion": "Maharashtra",
          "postalCode": "421302",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9820-808-852",
          "contactType": "Customer Service",
          "areaServed": ["Mumbai", "Navi Mumbai", "Thane", "India"],
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "sameAs": [
          "https://www.facebook.com/Patel-Precision-Pvt-Ltd-101593001311731/",
          "https://twitter.com/PvtPatel",
          "https://www.linkedin.com/company/patel-precision-pvt-ltd"
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://patelprecision.com/${pageInfo.file}`,
        "url": `https://patelprecision.com/${pageInfo.file}`,
        "name": pageInfo.title,
        "description": pageInfo.description,
        "isPartOf": {
          "@id": "https://patelprecision.com/#website"
        },
        "about": {
          "@id": "https://patelprecision.com/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  // Add specific schema based on page type
  if (pageInfo.type === 'service') {
    structuredData["@graph"].push({
      "@type": "Service",
      "name": pageInfo.title,
      "description": pageInfo.description,
      "provider": {
        "@id": "https://patelprecision.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    });
  }

  if (pageInfo.type === 'products') {
    structuredData["@graph"].push({
      "@type": "Product",
      "name": pageInfo.title,
      "description": pageInfo.description,
      "brand": {
        "@type": "Brand",
        "name": "Patel Precision"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Patel Precision Pvt Ltd"
      }
    });
  }

  return structuredData;
}

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

enhanceSEO();
