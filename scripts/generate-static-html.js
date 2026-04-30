const fs = require('fs');
const path = require('path');

// Static HTML generator like the examples
function generateStaticHtml() {
  console.log('Generating clean static HTML files...');
  
  // Define pages and their content
  const pages = [
    {
      filename: 'index.html',
      title: 'Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer',
      mainKeyword: 'Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer',
      content: `
        <div class="container" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
          <div class="row mt-5 mb-2" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
            <div class="col-md-12 text-center" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
              <p class="patel-precision" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer"> 
                <h3 alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer"><strong alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer</strong></h3>
              </p>
            </div>
          </div>
          
          <div class="row gal" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
            <div class="col-md-4 mt-3 mb-3" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
              <img src="/images/patel-precision-logo-new.png" class="img-fluid" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
            </div>
            <div class="col-md-8 mt-3 mb-3" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">
              <p class="prod" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer"><strong alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">Patel Precision Pvt Ltd counted as one of the leading precision machined components manufacturer and service provider in Mumbai, Navi Mumbai, Thane over India. We keep our work standard to meet your needs. Clients can avail this service from us at market leading price.</strong></p>
              <p class="prod" alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer"><strong alt="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer" title="Patel Precision - ISO 9001:2015 Certified CNC Machining & Precision Components Manufacturer">These precision machined components services are provided by our experienced team members who are perfect in this field. Precision machined components offered by us is being appreciated by patrons for on-time completion and better service results.</strong></p>
            </div>
          </div>
        </div>
      `
    },
    {
      filename: 'precision_machined_components.html',
      title: 'Precision Machined Components - Patel Precision Pvt Ltd',
      mainKeyword: 'Precision Machined Components',
      content: `
        <div class="container" alt="Precision Machined Components" title="Precision Machined Components">
          <div class="row mt-5 mb-2" alt="Precision Machined Components" title="Precision Machined Components">
            <div class="col-md-12 text-center" alt="Precision Machined Components" title="Precision Machined Components">
              <p class="patel-precision" alt="Precision Machined Components" title="Precision Machined Components"> 
                <h3 alt="Precision Machined Components" title="Precision Machined Components"><strong alt="Precision Machined Components" title="Precision Machined Components">Precision Machined Components</strong></h3>
              </p>
            </div>
          </div>
          <div class="row gal" alt="Precision Machined Components" title="Precision Machined Components">
            <div class="col-md-4 mt-3 mb-3" alt="Precision Machined Components" title="Precision Machined Components">
              <img src="/images/precision-machined-components.jpg" class="img-fluid" alt="Precision Machined Components" title="Precision Machined Components">
            </div>
            <div class="col-md-8 mt-3 mb-3" alt="Precision Machined Components" title="Precision Machined Components">
              <p class="prod" alt="Precision Machined Components" title="Precision Machined Components"><strong alt="Precision Machined Components" title="Precision Machined Components">Our organization Patel Precision Pvt Ltd counted as one of the leading service provider engaged in rendering superior quality Precision Machined Components to our valuable clients in Mumbai, Navi Mumbai, Thane over India. We keep our work standard to meet your needs. Clients can avail this service from us at market leading price.</strong></p>
              <p class="prod" alt="Precision Machined Components" title="Precision Machined Components"><strong alt="Precision Machined Components" title="Precision Machined Components">These services are provided by our experienced team members who are perfect in this field. Precision Machined Components offered by us is being appreciated by patrons for on-time completion and better service results.</strong></p>
            </div>
          </div>
        </div>
      `
    }
  ];

  // Generate HTML for each page
  pages.forEach(page => {
    const html = generateHtmlTemplate(page.title, page.mainKeyword, page.content);
    const filePath = path.join(__dirname, '..', 'out', page.filename);
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`Generated: ${page.filename}`);
  });

  console.log('Static HTML generation complete!');
}

function generateHtmlTemplate(title, mainKeyword, content) {
  const metaTags = `
    <meta name="keywords" content="${mainKeyword}, ${mainKeyword} Services, ${mainKeyword} Providers, ${mainKeyword} Service Providers">
    <meta name="description" content="We Offer ${mainKeyword}, ${mainKeyword} Services, ${mainKeyword} Providers, ${mainKeyword} Service Providers">
    <meta name="keywords" content="${mainKeyword} Services, ${mainKeyword} Services Services, ${mainKeyword} Services Providers, ${mainKeyword} Services Service Providers">
    <meta name="description" content="We Offer ${mainKeyword} Services, ${mainKeyword} Services Services, ${mainKeyword} Services Providers, ${mainKeyword} Services Service Providers">
    <meta name="keywords" content="${mainKeyword} Providers, ${mainKeyword} Providers Services, ${mainKeyword} Providers Providers, ${mainKeyword} Providers Service Providers">
    <meta name="description" content="We Offer ${mainKeyword} Providers, ${mainKeyword} Providers Services, ${mainKeyword} Providers Providers, ${mainKeyword} Providers Service Providers">
    <meta name="keywords" content="${mainKeyword} in Mumbai, ${mainKeyword} in Mumbai Services, ${mainKeyword} in Mumbai Providers, ${mainKeyword} in Mumbai Service Providers">
    <meta name="description" content="We Offer ${mainKeyword} in Mumbai, ${mainKeyword} in Mumbai Services, ${mainKeyword} in Mumbai Providers, ${mainKeyword} in Mumbai Service Providers">
    <meta name="keywords" content="${mainKeyword} in Navi Mumbai, ${mainKeyword} in Navi Mumbai Services, ${mainKeyword} in Navi Mumbai Providers, ${mainKeyword} in Navi Mumbai Service Providers">
    <meta name="description" content="We Offer ${mainKeyword} in Navi Mumbai, ${mainKeyword} in Navi Mumbai Services, ${mainKeyword} in Navi Mumbai Providers, ${mainKeyword} in Navi Mumbai Service Providers">
    <meta name="keywords" content="${mainKeyword} in Thane, ${mainKeyword} in Thane Services, ${mainKeyword} in Thane Providers, ${mainKeyword} in Thane Service Providers">
    <meta name="description" content="We Offer ${mainKeyword} in Thane, ${mainKeyword} in Thane Services, ${mainKeyword} in Thane Providers, ${mainKeyword} in Thane Service Providers">
    <meta name="keywords" content="${mainKeyword} in India, ${mainKeyword} in India Services, ${mainKeyword} in India Providers, ${mainKeyword} in India Service Providers">
    <meta name="description" content="We Offer ${mainKeyword} in India, ${mainKeyword} in India Services, ${mainKeyword} in India Providers, ${mainKeyword} in India Service Providers">
  `;

  const keywordContent = `
    <!-- SEO Content Section -->
    <div class="container seo-content-section" alt="${mainKeyword}" title="${mainKeyword}">
      <div class="row" alt="${mainKeyword}" title="${mainKeyword}">
        <div class="col-md-12" alt="${mainKeyword}" title="${mainKeyword}">
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">Patel Precision Pvt Ltd counted as one of the leading ${mainKeyword} manufacturer and service provider in Mumbai, Navi Mumbai, Thane over India. We keep our work standard to meet your needs. Clients can avail this service from us at market leading price.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">These ${mainKeyword} services are provided by our experienced team members who are perfect in this field. ${mainKeyword} offered by us is being appreciated by patrons for on-time completion and better service results.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">We are engaged in rendering superior quality ${mainKeyword} to our valuable clients. Our organization Patel Precision Pvt Ltd counted as one of the leading service provider engaged in rendering superior quality ${mainKeyword}.</strong>
          </p>
          <p class="seo-description" alt="${mainKeyword}" title="${mainKeyword}">
            <strong alt="${mainKeyword}" title="${mainKeyword}">The ${mainKeyword} services offered by us is being appreciated by patrons for on-time completion and better service results. We keep our work standard to meet your needs and requirements.</strong>
          </p>
        </div>
      </div>
    </div>
  `;

  return `<!DOCTYPE html>
<html lang="en-US" alt="${mainKeyword}" title="${mainKeyword}">
<head alt="${mainKeyword}" title="${mainKeyword}">
<meta charset="utf-8" alt="${mainKeyword}" title="${mainKeyword}">
<meta name="viewport" content="width=device-width, initial-scale=1" alt="${mainKeyword}" title="${mainKeyword}">
<title alt="${mainKeyword}" title="${mainKeyword}">${title}</title>
<meta name="description" content="ISO 9001:2015 certified precision machining company with 25+ years expertise. CNC turned parts, machined components, air compressor parts, fasteners, pipe fittings, cable glands, automotive components. Located in Bhiwandi, serving global industries." alt="${mainKeyword}" title="${mainKeyword}">
<meta name="keywords" content="precision machined components, CNC machining services, CNC turned parts, precision manufacturing, air compressor parts, automotive components, 5 axis machining, VMC machining, CNC job work, cable glands, fasteners, pipe fittings, stainless steel flanges, industrial components, Bhiwandi, India" alt="${mainKeyword}" title="${mainKeyword}">
<meta name="robots" content="index, follow" alt="${mainKeyword}" title="${mainKeyword}">
<link rel="canonical" href="https://patelprecision.com" alt="${mainKeyword}" title="${mainKeyword}">
${metaTags}
<link rel="stylesheet" href="/css/style.css" alt="${mainKeyword}" title="${mainKeyword}">
</head>
<body alt="${mainKeyword}" title="${mainKeyword}">
${keywordContent}
${content}
</body>
</html>`;
}

generateStaticHtml();
