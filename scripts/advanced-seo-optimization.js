const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function advancedSeoOptimization() {
  console.log('Starting ADVANCED SEO optimization...');
  
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
  console.log(`Found ${allFiles.length} HTML files for advanced SEO optimization`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Optimizing: ${file}`);
    
    try {
      // Read the HTML file
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Extract page title and determine main keywords
      const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
      const pageTitle = titleMatch ? titleMatch[1].split(',')[0].split('|')[0].trim() : 'Patel Precision';
      const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
      
      // Add comprehensive structured data
      html = addStructuredData(html, mainKeyword, file, pageTitle);
      
      // Add flowing keyword content like Gemsons
      html = addFlowingKeywordContent(html, mainKeyword, file);
      
      // Enhance meta tags
      html = enhanceMetaTags(html, mainKeyword, file);
      
      // Add social media integration
      html = addSocialMediaIntegration(html, mainKeyword);
      
      // Add breadcrumb structured data
      html = addBreadcrumbStructuredData(html, file);
      
      // Add FAQ structured data for relevant pages
      if (file === 'index.html' || file === 'about.html') {
        html = addFAQStructuredData(html, mainKeyword);
      }
      
      // Add service structured data for service pages
      if (file.includes('cnc') || file.includes('machining') || file.includes('precision')) {
        html = addServiceStructuredData(html, mainKeyword, file);
      }
      
      // Add product structured data for product pages
      if (file.includes('products/') || file === 'products.html') {
        html = addProductStructuredData(html, mainKeyword, file);
      }
      
      // Clean up any remaining invalid attributes
      html = cleanupInvalidAttributes(html);
      
      // Format HTML properly
      html = formatHtml(html);
      
      // Write back to the file
      fs.writeFileSync(filePath, html);
      
      console.log(`\u2713 ${file} optimized`);
    } catch (error) {
      console.error(`\u2717 Error optimizing ${file}:`, error.message);
    }
  }
  
  console.log('Advanced SEO optimization complete!');
}

function addStructuredData(html, mainKeyword, file, pageTitle) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://patelprecision.com/#organization",
        "name": "Patel Precision Pvt Ltd",
        "alternateName": "Patel Precision",
        "url": "https://patelprecision.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://patelprecision.com/patel-precision-logo-new.png",
          "width": 400,
          "height": 200,
          "caption": "Patel Precision Logo"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://patelprecision.com/patel-precision-logo-new.png",
          "width": 400,
          "height": 200,
          "caption": "Patel Precision Logo"
        },
        "description": `ISO 9001:2015 certified ${mainKeyword.toLowerCase()} manufacturer with 25+ years of expertise in precision engineering and CNC machining`,
        "foundingDate": "1998",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A16/5, Harihar Corporation, Dapode",
          "addressLocality": "Bhiwandi",
          "addressRegion": "Maharashtra",
          "postalCode": "421302",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.2982",
          "longitude": "73.1648"
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
        ],
        "openingHours": "Mo-Fr 09:00-18:00",
        "priceRange": "$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://patelprecision.com/#website",
        "url": "https://patelprecision.com",
        "name": "Patel Precision",
        "description": `Leading ${mainKeyword.toLowerCase()} manufacturer and service provider in Mumbai, India`,
        "publisher": {
          "@id": "https://patelprecision.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://patelprecision.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `https://patelprecision.com/${file}`,
        "url": `https://patelprecision.com/${file}`,
        "name": pageTitle,
        "isPartOf": {
          "@id": "https://patelprecision.com/#website"
        },
        "about": {
          "@id": "https://patelprecision.com/#organization"
        },
        "description": `Patel Precision Pvt Ltd - ISO 9001:2015 certified ${mainKeyword.toLowerCase()} manufacturer in Mumbai, India. 25+ years expertise in precision engineering.`,
        "breadcrumb": {
          "@id": `https://patelprecision.com/${file}#breadcrumb`
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "ReadAction",
          "target": `https://patelprecision.com/${file}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://patelprecision.com/${file}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://patelprecision.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageTitle,
            "item": `https://patelprecision.com/${file}`
          }
        ]
      }
    ]
  };

  // Remove existing structured data
  html = html.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
  
  // Add new structured data
  const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${structuredDataScript}\n</head>`);
  } else {
    html = html.replace('<head>', `<head>\n${structuredDataScript}`);
  }
  
  return html;
}

function addFlowingKeywordContent(html, mainKeyword, file) {
  const flowingContent = generateFlowingContent(mainKeyword, file);
  
  // Insert flowing content after body tag
  if (html.includes('<body')) {
    html = html.replace('<body', `<body>\n${flowingContent}\n`);
  }
  
  return html;
}

function generateFlowingContent(mainKeyword, file) {
  const keywordVariations = [
    mainKeyword,
    `${mainKeyword} Services`,
    `${mainKeyword} Providers`,
    `${mainKeyword} Service Providers`,
    `${mainKeyword} in Mumbai`,
    `${mainKeyword} in Navi Mumbai`,
    `${mainKeyword} in Thane`,
    `${mainKeyword} in India`,
    'Precision Machining',
    'CNC Machining Services',
    'CNC Turned Parts',
    'Precision Components',
    'Manufacturing Excellence',
    'Quality Engineering'
  ];

  const content = `
    <!-- Enhanced SEO Content Section -->
    <div class="enhanced-seo-content" style="display:none;">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Patel Precision - Leading ${escapeHtml(mainKeyword)} Manufacturer</h2>
            <p>Patel Precision Pvt Ltd is the premier <strong>${escapeHtml(mainKeyword)}</strong> manufacturer and service provider in Mumbai, Navi Mumbai, Thane, and across India. With over 25 years of excellence in precision engineering, we specialize in <strong>${keywordVariations[1]}</strong>, <strong>${keywordVariations[2]}</strong>, and <strong>${keywordVariations[3]}</strong>.</p>
            
            <h3>Our ${escapeHtml(mainKeyword)} Expertise</h3>
            <p>Our state-of-the-art manufacturing facility is equipped with advanced CNC machines and precision engineering tools. We offer comprehensive <strong>${keywordVariations[4]}</strong>, <strong>${keywordVariations[5]}</strong>, and <strong>${keywordVariations[6]}</strong> to clients worldwide. Our commitment to quality and precision has made us a trusted name in the <strong>${keywordVariations[7]}</strong> industry.</p>
            
            <h3>Quality ${escapeHtml(mainKeyword)} Solutions</h3>
            <p>At Patel Precision, we understand the importance of <strong>${keywordVariations[8]}</strong> and <strong>${keywordVariations[9]}</strong> in today's competitive market. Our team of skilled engineers and technicians ensures that every component meets the highest standards of quality and precision. We serve various industries including automotive, aerospace, defense, and industrial sectors.</p>
            
            <h3>Comprehensive ${escapeHtml(mainKeyword)} Services</h3>
            <p>We provide end-to-end <strong>${keywordVariations[10]}</strong> and <strong>${keywordVariations[11]}</strong> solutions. From design and development to final production, our <strong>${keywordVariations[12]}</strong> services cover all aspects of precision manufacturing. Our ISO 9001:2015 certification demonstrates our commitment to quality management and continuous improvement.</p>
            
            <h3>Why Choose Patel Precision for ${escapeHtml(mainKeyword)}?</h3>
            <p>With decades of experience in <strong>${keywordVariations[13]}</strong>, Patel Precision has established itself as a leader in the precision manufacturing industry. Our strategic location in Mumbai allows us to serve clients across India and globally. We combine technical expertise with innovative solutions to deliver exceptional <strong>${keywordVariations[14]}</strong> that exceed customer expectations.</p>
            
            <p>Contact Patel Precision Pvt Ltd today for all your <strong>${escapeHtml(mainKeyword)}</strong> needs. Experience the difference that 25+ years of precision engineering excellence can make for your business.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  return content;
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

function enhanceMetaTags(html, mainKeyword, file) {
  // Remove existing keywords and descriptions
  html = html.replace(/<meta name="keywords"[^>]*>/gi, '');
  html = html.replace(/<meta name="description"[^>]*>/gi, '');
  
  // Add enhanced meta tags
  const enhancedMetaTags = `
    <meta name="keywords" content="${escapeHtml(mainKeyword)}, precision machining, CNC machining services, CNC turned parts, precision components, manufacturing excellence, quality engineering, industrial manufacturing, precision engineering, CNC manufacturing, custom machining, precision parts, machined components, engineering services, manufacturing solutions">
    <meta name="description" content="Patel Precision Pvt Ltd - ISO 9001:2015 certified ${escapeHtml(mainKeyword.toLowerCase())} manufacturer in Mumbai, India. 25+ years expertise in precision engineering, CNC machining, and quality manufacturing solutions.">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="author" content="Patel Precision Pvt Ltd">
    <meta name="language" content="English">
    <meta name="distribution" content="global">
    <meta name="rating" content="general">
    <meta name="revisit-after" content="7 days">
    <meta property="article:author" content="Patel Precision Pvt Ltd">
    <meta property="article:publisher" content="https://www.facebook.com/Patel-Precision-Pvt-Ltd-101593001311731/">
  `;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${enhancedMetaTags}\n</head>`);
  }
  
  return html;
}

function addSocialMediaIntegration(html, mainKeyword) {
  const socialMetaTags = `
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Patel Precision">
    <meta property="og:locale" content="en_US">
    <meta property="og:locale:alternate" content="en_IN">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@PvtPatel">
    <meta name="twitter:creator" content="@PvtPatel">
    <meta property="fb:admins" content="1000000000000000">
    <meta property="fb:app_id" content="1234567890123456">
  `;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${socialMetaTags}\n</head>`);
  }
  
  return html;
}

function addBreadcrumbStructuredData(html, file) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://patelprecision.com"
      }
    ]
  };

  // Add current page to breadcrumb
  if (file !== 'index.html') {
    const pageName = file.replace('.html', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    breadcrumbData.itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": `https://patelprecision.com/${file}`
    });
  }

  const breadcrumbScript = `<script type="application/ld+json">${JSON.stringify(breadcrumbData, null, 2)}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${breadcrumbScript}\n</head>`);
  }
  
  return html;
}

function addFAQStructuredData(html, mainKeyword) {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is ${mainKeyword}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${mainKeyword} is a precision manufacturing process that involves creating high-precision components and parts using advanced CNC machining technology. Patel Precision specializes in ${mainKeyword.toLowerCase()} services with ISO 9001:2015 certification.`
        }
      },
      {
        "@type": "Question",
        "name": `Why choose Patel Precision for ${mainKeyword}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patel Precision has 25+ years of experience in precision manufacturing, ISO 9001:2015 certification, state-of-the-art facilities, and a team of skilled engineers. We deliver high-quality ${mainKeyword.toLowerCase()} solutions to clients worldwide."
        }
      },
      {
        "@type": "Question",
        "name": `What industries do you serve with ${mainKeyword}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve various industries including automotive, aerospace, defense, industrial machinery, and general engineering sectors with our ${mainKeyword.toLowerCase()} services."
        }
      },
      {
        "@type": "Question",
        "name": `Where are you located for ${mainKeyword} services?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patel Precision is located in Bhiwandi, Mumbai, India. We serve clients across Mumbai, Navi Mumbai, Thane, and throughout India with our ${mainKeyword.toLowerCase()} services."
        }
      }
    ]
  };

  const faqScript = `<script type="application/ld+json">${JSON.stringify(faqData, null, 2)}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${faqScript}\n</head>`);
  }
  
  return html;
}

function addServiceStructuredData(html, mainKeyword, file) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": mainKeyword,
    "description": `Professional ${mainKeyword.toLowerCase()} services by Patel Precision Pvt Ltd. ISO 9001:2015 certified precision manufacturing with 25+ years of expertise.`,
    "provider": {
      "@type": "Organization",
      "name": "Patel Precision Pvt Ltd",
      "url": "https://patelprecision.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${mainKeyword} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${mainKeyword} Manufacturing`
          }
        }
      ]
    }
  };

  const serviceScript = `<script type="application/ld+json">${JSON.stringify(serviceData, null, 2)}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${serviceScript}\n</head>`);
  }
  
  return html;
}

function addProductStructuredData(html, mainKeyword, file) {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": mainKeyword,
    "description": `High-quality ${mainKeyword.toLowerCase()} manufactured by Patel Precision Pvt Ltd. Precision engineered components for various industrial applications.`,
    "brand": {
      "@type": "Brand",
      "name": "Patel Precision"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Patel Precision Pvt Ltd",
      "url": "https://patelprecision.com"
    },
    "material": "Various metals including steel, aluminum, brass, stainless steel",
    "category": "Precision Components",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": {
        "@type": "Organization",
        "name": "Patel Precision Pvt Ltd"
      }
    }
  };

  const productScript = `<script type="application/ld+json">${JSON.stringify(productData, null, 2)}</script>`;
  
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${productScript}\n</head>`);
  }
  
  return html;
}

function cleanupInvalidAttributes(html) {
  // Remove any remaining invalid alt and title attributes
  const invalidElements = ['html', 'head', 'meta', 'link', 'script', 'style', 'title', 'base', 'body', 'div', 'section', 'main', 'header', 'footer', 'nav', 'article', 'aside'];
  
  invalidElements.forEach(tag => {
    const altRegex = new RegExp(`\\s+alt="[^"]*"`, 'gi');
    const titleRegex = new RegExp(`\\s+title="[^"]*"`, 'gi');
    
    html = html.replace(new RegExp(`<${tag}([^>]*?)${altRegex.source}([^>]*?)>`, 'gi'), `<${tag}$1$2>`);
    html = html.replace(new RegExp(`<${tag}([^>]*?)${titleRegex.source}([^>]*?)>`, 'gi'), `<${tag}$1$2>`);
  });
  
  return html;
}

function formatHtml(html) {
  // Basic formatting
  html = html.replace(/></g, '>\n<');
  html = html.replace(/\n\s*\n/g, '\n');
  html = html.replace(/^\s+|\s+$/g, '');
  
  return html;
}

advancedSeoOptimization();
