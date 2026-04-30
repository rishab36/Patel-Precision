const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT_DIR = path.join(__dirname, '../out');
const SRC_DIR = path.join(__dirname, '../src');

async function buildStaticContent() {
  console.log('Building static content with full page content...');
  
  try {
    // First, clean the out directory
    if (fs.existsSync(OUT_DIR)) {
      fs.rmSync(OUT_DIR, { recursive: true, force: true });
    }
    
    // Build the Next.js app
    console.log('Building Next.js app...');
    execSync('npm run build', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    
    // Now run the SEO optimization
    console.log('Running SEO optimization...');
    execSync('node scripts/optimize-seo-simple.js', { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    
    console.log('Static content build complete!');
  } catch (error) {
    console.error('Error building static content:', error.message);
    process.exit(1);
  }
}

buildStaticContent();
