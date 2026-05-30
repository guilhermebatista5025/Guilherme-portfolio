const fs = require('fs');
const https = require('https');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

const deployments = {
  'AutoSport': 'https://autosportcentroautomotivo.vercel.app',
  'PDVManaaim': 'https://manaaim-pdv.vercel.app',
  'RugalModas': 'https://rugalmodasoficiall.vercel.app',
  'Sancar': 'https://sancarveiculosoficial.vercel.app',
  'Menelli': 'https://menelliveiculosoficial.vercel.app',
  'FormularioManaaim': 'https://cantina-formulario-icm.vercel.app'
};

async function run() {
  console.log('Fetching live logos...\n');
  for (const [name, url] of Object.entries(deployments)) {
    try {
      const html = await fetchHtml(url);
      console.log(`=== ${name} (${url}) ===`);
      // Find all image tags
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let match;
      let count = 0;
      while ((match = imgRegex.exec(html)) !== null && count < 8) {
        const src = match[1];
        // Print if it looks like a logo or header image
        if (src.toLowerCase().includes('logo') || src.toLowerCase().includes('brand') || src.toLowerCase().includes('icon') || src.toLowerCase().includes('fav') || count < 3) {
          console.log(`  - Image: ${src}`);
        }
        count++;
      }
      console.log('\n');
    } catch (err) {
      console.log(`Failed to fetch ${name}: ${err.message}\n`);
    }
  }
}

run();
