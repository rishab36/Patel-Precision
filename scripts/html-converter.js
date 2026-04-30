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

function convertToCleanHTML() {
  console.log('Starting HTML conversion to remove Next.js traces...');
  
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
  console.log(`Found ${allFiles.length} HTML files to convert`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Converting: ${file}`);
    
    try {
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Extract page information
      const pageInfo = extractPageInfo(html, file);
      
      // Convert to clean HTML structure
      html = convertToCleanStructure(html, pageInfo, file);
      
      // Add keyword-rich content
      html = addKeywordRichContent(html, pageInfo, file);
      
      // Add proper alt attributes and class names
      html = addKeywordAttributes(html, pageInfo);
      
      // Format HTML properly
      html = formatHTML(html);
      
      fs.writeFileSync(filePath, html);
      console.log(`\u2713 ${file} converted`);
    } catch (error) {
      console.error(`\u2717 Error converting ${file}:`, error.message);
    }
  }
  
  console.log('HTML conversion complete!');
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

function convertToCleanStructure(html, pageInfo, file) {
  // Remove all Next.js scripts and JSON data
  html = html.replace(/<script[^>]*self\.__next_f[^<]*<\/script>/gi, '');
  html = html.replace(/<script[^>]*>\s*self\.__next_f[^<]*<\/script>/gi, '');
  html = html.replace(/<script[^>]*>\s*\["\$","[^<]*<\/script>/gi, '');
  
  // Remove Next.js specific attributes and classes
  html = html.replace(/data-reactroot[^>]*>/gi, '>');
  html = html.replace(/data-nextjs[^>]*>/gi, '>');
  html = html.replace(/className="[^"]*"/gi, '');
  html = html.replace(/class="[^"]*next-[^"]*"/gi, '');
  
  // Create clean HTML structure
  const cleanHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(pageInfo.title)}</title>
  <meta name="description" content="${escapeHtml(pageInfo.description)}">
  <meta name="keywords" content="${pageInfo.keywords.join(', ')}">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Patel Precision Pvt Ltd">
  <meta name="language" content="English">
  <meta name="distribution" content="global">
  <meta name="rating" content="general">
  <meta name="revisit-after" content="7">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${escapeHtml(pageInfo.title)}">
  <meta property="og:description" content="${escapeHtml(pageInfo.description)}">
  <meta property="og:url" content="https://patelprecision.com/${file}">
  <meta property="og:site_name" content="Patel Precision">
  <meta property="og:type" content="website">
  <meta property="og:image" content="https://patelprecision.com/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en_IN">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@PvtPatel">
  <meta name="twitter:creator" content="@PvtPatel">
  <meta name="twitter:title" content="${escapeHtml(pageInfo.title)}">
  <meta name="twitter:description" content="${escapeHtml(pageInfo.description)}">
  <meta name="twitter:image" content="https://patelprecision.com/og-image.jpg">
  
  <!-- Business Information -->
  <meta property="business:contact_data:street_address" content="A16/5, Harihar Corporation, Dapode">
  <meta property="business:contact_data:locality" content="Bhiwandi">
  <meta property="business:contact_data:postal_code" content="421302">
  <meta property="business:contact_data:region" content="Maharashtra">
  <meta property="business:contact_data:country_name" content="India">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://patelprecision.com/${file === 'index.html' ? '' : file}">
  <link rel="icon" href="/favicon.ico">
  
  <!-- CSS -->
  <link rel="stylesheet" href="/_next/static/css/82dd82debf5774f1.css">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  ${JSON.stringify(generateStructuredData(pageInfo), null, 2)}
  </script>
</head>
<body class="${pageInfo.keywords.join(' ')}">
  
  <!-- Header -->
  <header class="header ${pageInfo.keywords.join(' ')}">
    <div class="container">
      <div class="top-bar ${pageInfo.keywords.join(' ')}">
        <div class="contact-info ${pageInfo.keywords.join(' ')}">
          <span class="phone ${pageInfo.keywords.join(' ')}">+91-9820-808-852</span>
          <span class="email ${pageInfo.keywords.join(' ')}">rakesh@patelprecision.com</span>
        </div>
        <div class="social-links ${pageInfo.keywords.join(' ')}">
          <a href="https://www.facebook.com/Patel-Precision-Pvt-Ltd-101593001311731/" class="facebook ${pageInfo.keywords.join(' ')}" alt="Patel Precision Facebook">Facebook</a>
          <a href="https://twitter.com/PvtPatel" class="twitter ${pageInfo.keywords.join(' ')}" alt="Patel Precision Twitter">Twitter</a>
          <a href="https://www.linkedin.com/company/patel-precision-pvt-ltd" class="linkedin ${pageInfo.keywords.join(' ')}" alt="Patel Precision LinkedIn">LinkedIn</a>
        </div>
      </div>
      <nav class="main-nav ${pageInfo.keywords.join(' ')}">
        <div class="logo ${pageInfo.keywords.join(' ')}">
          <img src="/patel-precision-logo-new.png" alt="Patel Precision Logo ${pageInfo.keywords.join(' ')}" class="logo-img ${pageInfo.keywords.join(' ')}">
        </div>
        <ul class="nav-menu ${pageInfo.keywords.join(' ')}">
          <li><a href="/" class="nav-link ${pageInfo.keywords.join(' ')}" alt="Patel Precision Home">Home</a></li>
          <li><a href="/about" class="nav-link ${pageInfo.keywords.join(' ')}" alt="About Patel Precision">About</a></li>
          <li><a href="/products" class="nav-link ${pageInfo.keywords.join(' ')}" alt="Patel Precision Products">Products</a></li>
          <li><a href="/cnc-machining-services" class="nav-link ${pageInfo.keywords.join(' ')}" alt="CNC Machining Services">Services</a></li>
          <li><a href="/contact" class="nav-link ${pageInfo.keywords.join(' ')}" alt="Contact Patel Precision">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <!-- Main Content -->
  <main class="main-content ${pageInfo.keywords.join(' ')}">
    <div class="container">
      <section class="hero-section ${pageInfo.keywords.join(' ')}">
        <h1 class="page-title ${pageInfo.keywords.join(' ')}">${escapeHtml(pageInfo.title)}</h1>
        <p class="page-description ${pageInfo.keywords.join(' ')}">${escapeHtml(pageInfo.description)}</p>
      </section>
      
      ${generatePageContent(pageInfo, file)}
    </div>
  </main>
  
  <!-- Footer -->
  <footer class="footer ${pageInfo.keywords.join(' ')}">
    <div class="container">
      <div class="footer-content ${pageInfo.keywords.join(' ')}">
        <div class="footer-section ${pageInfo.keywords.join(' ')}">
          <h3 class="footer-title ${pageInfo.keywords.join(' ')}">Patel Precision Pvt Ltd</h3>
          <p class="footer-description ${pageInfo.keywords.join(' ')}">ISO 9001:2015 certified precision machining manufacturer with 25+ years of expertise in ${pageInfo.keywords.join(', ')}.</p>
        </div>
        <div class="footer-section ${pageInfo.keywords.join(' ')}">
          <h3 class="footer-title ${pageInfo.keywords.join(' ')}">Contact Information</h3>
          <address class="address ${pageInfo.keywords.join(' ')}">
            <p class="address-line ${pageInfo.keywords.join(' ')}">A16/5, Harihar Corporation, Dapode</p>
            <p class="address-line ${pageInfo.keywords.join(' ')}">Bhiwandi, Maharashtra 421302</p>
            <p class="address-line ${pageInfo.keywords.join(' ')}">India</p>
            <p class="phone ${pageInfo.keywords.join(' ')}">Phone: +91-9820-808-852</p>
            <p class="email ${pageInfo.keywords.join(' ')}">Email: rakesh@patelprecision.com</p>
          </address>
        </div>
        <div class="footer-section ${pageInfo.keywords.join(' ')}">
          <h3 class="footer-title ${pageInfo.keywords.join(' ')}">Quick Links</h3>
          <ul class="quick-links ${pageInfo.keywords.join(' ')}">
            <li><a href="/" class="footer-link ${pageInfo.keywords.join(' ')}" alt="Patel Precision Home">Home</a></li>
            <li><a href="/about" class="footer-link ${pageInfo.keywords.join(' ')}" alt="About Patel Precision">About Us</a></li>
            <li><a href="/products" class="footer-link ${pageInfo.keywords.join(' ')}" alt="Patel Precision Products">Products</a></li>
            <li><a href="/cnc-machining-services" class="footer-link ${pageInfo.keywords.join(' ')}" alt="CNC Machining Services">Services</a></li>
            <li><a href="/contact" class="footer-link ${pageInfo.keywords.join(' ')}" alt="Contact Patel Precision">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom ${pageInfo.keywords.join(' ')}">
        <p class="copyright ${pageInfo.keywords.join(' ')}">&copy; 2026 Patel Precision Pvt Ltd. All rights reserved. | ${pageInfo.keywords.join(' | ')}</p>
      </div>
    </div>
  </footer>
  
</body>
</html>`;
  
  return cleanHTML;
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

function generatePageContent(pageInfo, file) {
  const content = `
      <!-- Enhanced SEO Content Section -->
      <section class="seo-content ${pageInfo.keywords.join(' ')}">
        <div class="content-grid ${pageInfo.keywords.join(' ')}">
          <article class="content-article ${pageInfo.keywords.join(' ')}">
            <h2 class="content-title ${pageInfo.keywords.join(' ')}">Patel Precision - Leading ${pageInfo.keywords[0] || 'Precision Machining'} Manufacturer</h2>
            <p class="content-text ${pageInfo.keywords.join(' ')}">Patel Precision Pvt Ltd is the premier <strong>${escapeHtml(pageInfo.keywords[0] || 'precision machining')}</strong> manufacturer and service provider in Mumbai, Navi Mumbai, Thane, and across India. With over 25 years of excellence in precision engineering, we specialize in <strong>${pageInfo.keywords.slice(0, 3).join(', ')}</strong>.</p>
            
            <h3 class="content-subtitle ${pageInfo.keywords.join(' ')}">Our ${pageInfo.keywords[0] || 'Precision Machining'} Expertise</h3>
            <p class="content-text ${pageInfo.keywords.join(' ')}">Our state-of-the-art manufacturing facility is equipped with advanced CNC machines and precision engineering tools. We offer comprehensive <strong>${pageInfo.keywords.slice(1, 4).join(', ')}</strong> to clients worldwide. Our commitment to quality and precision has made us a trusted name in the <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong> industry.</p>
            
            <h3 class="content-subtitle ${pageInfo.keywords.join(' ')}">Quality ${pageInfo.keywords[0] || 'Manufacturing'} Solutions</h3>
            <p class="content-text ${pageInfo.keywords.join(' ')}">At Patel Precision, we understand the importance of <strong>${pageInfo.keywords.slice(2, 5).join(', ')}</strong> in today's competitive market. Our team of skilled engineers and technicians ensures that every component meets the highest standards of quality and precision. We serve various industries including automotive, aerospace, defense, and industrial sectors.</p>
            
            <h3 class="content-subtitle ${pageInfo.keywords.join(' ')}">Comprehensive ${pageInfo.keywords[0] || 'Services'} Portfolio</h3>
            <p class="content-text ${pageInfo.keywords.join(' ')}">We provide end-to-end <strong>${pageInfo.keywords.slice(0, 4).join(', ')}</strong> solutions. From design and development to final production, our services cover all aspects of precision manufacturing. Our ISO 9001:2015 certification demonstrates our commitment to quality management and continuous improvement.</p>
            
            <h3 class="content-subtitle ${pageInfo.keywords.join(' ')}">Why Choose Patel Precision?</h3>
            <p class="content-text ${pageInfo.keywords.join(' ')}">With decades of experience in <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong>, Patel Precision has established itself as a leader in the precision engineering industry. Our strategic location in Mumbai allows us to serve clients across India and globally. We combine technical expertise with innovative solutions to deliver exceptional results that exceed customer expectations.</p>
            
            <p class="content-text ${pageInfo.keywords.join(' ')}">Contact Patel Precision Pvt Ltd today for all your <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong> needs. Experience the difference that 25+ years of precision engineering excellence can make for your business.</p>
          </article>
          
          <aside class="content-sidebar ${pageInfo.keywords.join(' ')}">
            <div class="sidebar-section ${pageInfo.keywords.join(' ')}">
              <h3 class="sidebar-title ${pageInfo.keywords.join(' ')}">Our Products</h3>
              <ul class="product-list ${pageInfo.keywords.join(' ')}">
                ${PRODUCT_KEYWORDS.slice(0, 10).map(product => `
                  <li class="product-item ${pageInfo.keywords.join(' ')}">
                    <a href="/${product}" class="product-link ${pageInfo.keywords.join(' ')}" alt="${product.replace(/-/g, ' ')}">${product.replace(/-/g, ' ').toUpperCase()}</a>
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <div class="sidebar-section ${pageInfo.keywords.join(' ')}">
              <h3 class="sidebar-title ${pageInfo.keywords.join(' ')}">Our Services</h3>
              <ul class="service-list ${pageInfo.keywords.join(' ')}">
                ${SERVICE_KEYWORDS.map(service => `
                  <li class="service-item ${pageInfo.keywords.join(' ')}">
                    <a href="/${service}" class="service-link ${pageInfo.keywords.join(' ')}" alt="${service.replace(/-/g, ' ')}">${service.replace(/-/g, ' ').toUpperCase()}</a>
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <div class="sidebar-section ${pageInfo.keywords.join(' ')}">
              <h3 class="sidebar-title ${pageInfo.keywords.join(' ')}">Service Areas</h3>
              <ul class="location-list ${pageInfo.keywords.join(' ')}">
                ${LOCATION_KEYWORDS.map(location => `
                  <li class="location-item ${pageInfo.keywords.join(' ')}">
                    <span class="location-name ${pageInfo.keywords.join(' ')}">${location.toUpperCase()}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      
      <!-- Features Section -->
      <section class="features-section ${pageInfo.keywords.join(' ')}">
        <h2 class="section-title ${pageInfo.keywords.join(' ')}">Why Choose Patel Precision for ${pageInfo.keywords[0] || 'Precision Manufacturing'}?</h2>
        <div class="features-grid ${pageInfo.keywords.join(' ')}">
          <div class="feature-item ${pageInfo.keywords.join(' ')}">
            <div class="feature-icon ${pageInfo.keywords.join(' ')}">25+</div>
            <h3 class="feature-title ${pageInfo.keywords.join(' ')}">Years Experience</h3>
            <p class="feature-description ${pageInfo.keywords.join(' ')}">Over 25 years of expertise in ${pageInfo.keywords[0] || 'precision manufacturing'} and engineering solutions.</p>
          </div>
          <div class="feature-item ${pageInfo.keywords.join(' ')}">
            <div class="feature-icon ${pageInfo.keywords.join(' ')}">ISO</div>
            <h3 class="feature-title ${pageInfo.keywords.join(' ')}">ISO 9001:2015 Certified</h3>
            <p class="feature-description ${pageInfo.keywords.join(' ')}">Internationally recognized quality management system for ${pageInfo.keywords[0] || 'precision manufacturing'}.</p>
          </div>
          <div class="feature-item ${pageInfo.keywords.join(' ')}">
            <div class="feature-icon ${pageInfo.keywords.join(' ')}">CNC</div>
            <h3 class="feature-title ${pageInfo.keywords.join(' ')}">Advanced Technology</h3>
            <p class="feature-description ${pageInfo.keywords.join(' ')}">State-of-the-art CNC machines for precision ${pageInfo.keywords[0] || 'manufacturing'} and engineering.</p>
          </div>
          <div class="feature-item ${pageInfo.keywords.join(' ')}">
            <div class="feature-icon ${pageInfo.keywords.join(' ')}">IN</div>
            <h3 class="feature-title ${pageInfo.keywords.join(' ')}">Made in India</h3>
            <p class="feature-description ${pageInfo.keywords.join(' ')}">Proudly manufacturing high-quality ${pageInfo.keywords[0] || 'precision components'} in India.</p>
          </div>
        </div>
      </section>
  `;
  
  return content;
}

function addKeywordRichContent(html, pageInfo, file) {
  // Add additional keyword-rich sections
  const keywordContent = `
      <!-- Additional SEO Content -->
      <section class="additional-seo-content ${pageInfo.keywords.join(' ')}">
        <div class="seo-container ${pageInfo.keywords.join(' ')}">
          <h2 class="seo-title ${pageInfo.keywords.join(' ')}">Complete ${pageInfo.keywords[0] || 'Precision Manufacturing'} Solutions</h2>
          
          <div class="seo-grid ${pageInfo.keywords.join(' ')}">
            <div class="seo-column ${pageInfo.keywords.join(' ')}">
              <h3 class="seo-heading ${pageInfo.keywords.join(' ')}">Precision Engineering Excellence</h3>
              <p class="seo-text ${pageInfo.keywords.join(' ')}">Patel Precision delivers exceptional <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong> services with uncompromising quality. Our expertise in <strong>${pageInfo.keywords.slice(0, 3).join(', ')}</strong> makes us the preferred choice for industries requiring high-precision components.</p>
              
              <h3 class="seo-heading ${pageInfo.keywords.join(' ')}">Advanced CNC Technology</h3>
              <p class="seo-text ${pageInfo.keywords.join(' ')}">Utilizing cutting-edge CNC technology, we manufacture <strong>${pageInfo.keywords[1] || 'CNC components'}</strong> with tight tolerances and superior surface finishes. Our <strong>${pageInfo.keywords[2] || 'precision machining'}</strong> capabilities ensure consistent quality across all production runs.</p>
            </div>
            
            <div class="seo-column ${pageInfo.keywords.join(' ')}">
              <h3 class="seo-heading ${pageInfo.keywords.join(' ')}">Industry-Leading Solutions</h3>
              <p class="seo-text ${pageInfo.keywords.join(' ')}">As leaders in <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong>, we serve diverse industries including automotive, aerospace, defense, and industrial sectors. Our <strong>${pageInfo.keywords.slice(3, 6).join(', ')}</strong> are engineered to meet the highest industry standards.</p>
              
              <h3 class="seo-heading ${pageInfo.keywords.join(' ')}">Quality Assurance</h3>
              <p class="seo-text ${pageInfo.keywords.join(' ')}">Every component undergoes rigorous quality inspection to ensure it meets exact specifications. Our commitment to <strong>${pageInfo.keywords[0] || 'quality manufacturing'}</strong> has earned us the trust of clients nationwide.</p>
            </div>
            
            <div class="seo-column ${pageInfo.keywords.join(' ')}">
              <h3 class="seo-heading ${pageInfo.keywords.join(' ')}">Strategic Location Advantage</h3>
              <p class="seo-text ${pageInfo.keywords.join(' ')}">Located in Mumbai, we serve clients across <strong>${LOCATION_KEYWORDS.join(', ')}</strong> with efficient logistics and timely delivery. Our strategic position makes us ideal for <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong> services.</p>
              
              <h3 class="seo-heading ${pageInfo.keywords.join(' ')}">Customer-Centric Approach</h3>
              <p class="seo-text ${pageInfo.keywords.join(' ')}">We work closely with clients to understand their specific <strong>${pageInfo.keywords[0] || 'manufacturing'}</strong> requirements and deliver customized solutions. Our expertise in <strong>${pageInfo.keywords.slice(1, 4).join(', ')}</strong> ensures optimal results.</p>
            </div>
          </div>
          
          <div class="cta-section ${pageInfo.keywords.join(' ')}">
            <h3 class="cta-title ${pageInfo.keywords.join(' ')}">Ready to Experience Precision Excellence?</h3>
            <p class="cta-text ${pageInfo.keywords.join(' ')}">Contact Patel Precision today for all your <strong>${pageInfo.keywords[0] || 'precision manufacturing'}</strong> needs. Our team is ready to provide expert solutions for <strong>${pageInfo.keywords.slice(0, 3).join(', ')}</strong>.</p>
            <div class="cta-buttons ${pageInfo.keywords.join(' ')}">
              <a href="/contact" class="cta-button ${pageInfo.keywords.join(' ')}" alt="Contact Patel Precision for ${pageInfo.keywords[0] || 'precision manufacturing'}">Get Quote</a>
              <a href="/products" class="cta-button secondary ${pageInfo.keywords.join(' ')}" alt="View Patel Precision Products">View Products</a>
            </div>
          </div>
        </div>
      </section>
  `;
  
  // Insert before footer
  if (html.includes('</footer>')) {
    html = html.replace('</footer>', `${keywordContent}\n</footer>`);
  }
  
  return html;
}

function addKeywordAttributes(html, pageInfo) {
  // Add keyword-rich alt attributes to all images
  html = html.replace(/<img([^>]*?)>/gi, (match, attrs) => {
    if (!attrs.includes('alt=')) {
      return `<img${attrs} alt="${pageInfo.keywords.join(' ')} Patel Precision ${pageInfo.keywords[0] || 'Precision Manufacturing'}">`;
    }
    return match;
  });
  
  // Add keyword-rich class names to all elements
  const elementsToAddClasses = ['div', 'section', 'article', 'aside', 'header', 'footer', 'nav', 'main'];
  
  elementsToAddClasses.forEach(tag => {
    html = html.replace(new RegExp(`<${tag}([^>]*?)>`, 'gi'), (match, attrs) => {
      if (!attrs.includes('class=')) {
        return `<${tag}${attrs} class="${pageInfo.keywords.join(' ')}">`;
      } else if (attrs.includes('class="') && !attrs.includes(pageInfo.keywords[0])) {
        return match.replace(/class="([^"]*)"/, `class="$1 ${pageInfo.keywords.join(' ')}"`);
      }
      return match;
    });
  });
  
  return html;
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

function formatHTML(html) {
  // Basic formatting
  html = html.replace(/></g, '>\n<');
  html = html.replace(/\n\s*\n/g, '\n');
  html = html.replace(/^\s+|\s+$/g, '');
  
  return html;
}

convertToCleanHTML();
