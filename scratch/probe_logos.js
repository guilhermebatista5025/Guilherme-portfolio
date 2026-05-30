const https = require('https');

const paths = [
  'favicon.ico',
  'logo.png',
  'img/logo.png',
  'assets/logo.png',
  'favicon.png',
  'icon.png'
];

const domains = [
  'rugalmodasoficiall.vercel.app',
  'cantina-formulario-icm.vercel.app'
];

function checkPath(domain, path) {
  return new Promise((resolve) => {
    const url = `https://${domain}/${path}`;
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => {
      resolve({ url, status: 500 });
    }).end();
  });
}

async function run() {
  console.log('Probing potential logo paths...\n');
  for (const domain of domains) {
    console.log(`=== Domain: ${domain} ===`);
    for (const path of paths) {
      const res = await checkPath(domain, path);
      if (res.status === 200) {
        console.log(`  [FOUND] -> ${res.url}`);
      }
    }
    console.log('\n');
  }
}

run();
