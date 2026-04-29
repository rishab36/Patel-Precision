const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function generateStaticHtml() {
  console.log('Generating clean static HTML...');
  
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
  console.log(`Found ${allFiles.length} HTML files to convert`);
  
  for (const file of allFiles) {
    const filePath = path.join(OUT_DIR, file);
    console.log(`Converting: ${file}`);
    
    try {
      // Read the HTML file
      let html = fs.readFileSync(filePath, 'utf8');
      
      // Extract page title for keyword optimization
      const titleMatch = html.match(/<title[^>]*>([^<]+)</i);
      const pageTitle = titleMatch ? titleMatch[1].split(',')[0].trim() : 'Patel Precision';
      const mainKeyword = pageTitle.replace(/\s*\|.*$/, '').trim();
      
      // Create clean static HTML structure
      const cleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="description" content="We offer ${mainKeyword} services with ISO 9001:2015 certification. Leading precision machining manufacturer in Mumbai, Navi Mumbai, Thane, India.">
    <meta name="keywords" content="${mainKeyword}, ${mainKeyword} Services, ${mainKeyword} Providers, ${mainKeyword} Service Providers, ${mainKeyword} in Mumbai, ${mainKeyword} in Navi Mumbai, ${mainKeyword} in Thane, ${mainKeyword} in India">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://patelprecision.vercel.app/">
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #333; margin-bottom: 20px; }
        h2 { color: #444; margin: 30px 0 15px 0; }
        p { margin-bottom: 15px; }
        .service-list { list-style: none; padding: 0; }
        .service-list li { margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 5px; }
        .contact { margin-top: 40px; padding: 20px; background: #333; color: white; border-radius: 5px; }
    </style>
</head>
<body alt="${mainKeyword}" title="${mainKeyword}">
    <div class="container" alt="${mainKeyword}" title="${mainKeyword}">
        <header alt="${mainKeyword}" title="${mainKeyword}">
            <h1 alt="${mainKeyword}" title="${mainKeyword}">${pageTitle}</h1>
        </header>
        
        <main alt="${mainKeyword}" title="${mainKeyword}">
            <section alt="${mainKeyword}" title="${mainKeyword}">
                <h2 alt="${mainKeyword}" title="${mainKeyword}">About Our ${mainKeyword} Services</h2>
                <p alt="${mainKeyword}" title="${mainKeyword}">
                    Patel Precision Pvt Ltd is an ISO 9001:2015 certified company specializing in ${mainKeyword} services. 
                    With over 25 years of expertise, we provide high-quality precision machining solutions for various industries.
                </p>
                <p alt="${mainKeyword}" title="${mainKeyword}">
                    Our state-of-the-art facility in Bhiwandi, Maharashtra is equipped with advanced machinery and 
                    skilled technicians to deliver exceptional ${mainKeyword} solutions.
                </p>
            </section>
            
            <section alt="${mainKeyword}" title="${mainKeyword}">
                <h2 alt="${mainKeyword}" title="${mainKeyword}">Our ${mainKeyword} Capabilities</h2>
                <ul class="service-list" alt="${mainKeyword}" title="${mainKeyword}">
                    <li alt="${mainKeyword}" title="${mainKeyword}">Precision ${mainKeyword} Services</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">CNC Machining Components</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">Air Compressor Parts</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">Industrial Components</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">Custom Manufacturing Solutions</li>
                </ul>
            </section>
            
            <section alt="${mainKeyword}" title="${mainKeyword}">
                <h2 alt="${mainKeyword}" title="${mainKeyword}">Service Areas</h2>
                <p alt="${mainKeyword}" title="${mainKeyword}">
                    We provide ${mainKeyword} services across multiple locations:
                </p>
                <ul class="service-list" alt="${mainKeyword}" title="${mainKeyword}">
                    <li alt="${mainKeyword}" title="${mainKeyword}">${mainKeyword} in Mumbai</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">${mainKeyword} in Navi Mumbai</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">${mainKeyword} in Thane</li>
                    <li alt="${mainKeyword}" title="${mainKeyword}">${mainKeyword} across India</li>
                </ul>
            </section>
            
            <section alt="${mainKeyword}" title="${mainKeyword}">
                <h2 alt="${mainKeyword}" title="${mainKeyword}">Why Choose Patel Precision?</h2>
                <p alt="${mainKeyword}" title="${mainKeyword}">
                    - ISO 9001:2015 Certified Company<br>
                    - 25+ Years of Experience<br>
                    - Advanced Manufacturing Facility<br>
                    - Quality Assurance at Every Step<br>
                    - Timely Delivery<br>
                    - Competitive Pricing
                </p>
            </section>
        </main>
        
        <footer class="contact" alt="${mainKeyword}" title="${mainKeyword}">
            <h3 alt="${mainKeyword}" title="${mainKeyword}">Contact Us for ${mainKeyword}</h3>
            <p alt="${mainKeyword}" title="${mainKeyword}">
                Email: rakesh@patelprecision.com<br>
                Phone: +91-9820-808-852<br>
                Location: A16/5, Harihar Corporation, Dapode, Bhiwandi - 421302, Maharashtra, India
            </p>
        </footer>
    </div>
</body>
</html>`;
      
      // Write the clean HTML back to the file
      fs.writeFileSync(filePath, cleanHtml);
      
      console.log(`\u2713 ${file} converted to static HTML`);
    } catch (error) {
      console.error(`\u2717 Error converting ${file}:`, error.message);
    }
  }
  
  console.log('Static HTML generation complete!');
}

generateStaticHtml();
