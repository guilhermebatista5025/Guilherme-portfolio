const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

// Find standard Google Chrome installation path on Windows
const possibleChromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe')
];

let executablePath = null;
for (const p of possibleChromePaths) {
  if (fs.existsSync(p)) {
    executablePath = p;
    break;
  }
}

if (!executablePath) {
  console.error('Google Chrome could not be found automatically. Please configure the path.');
  process.exit(1);
}

console.log('Using Chrome executable:', executablePath);

const projects = [
  {
    name: 'auto-sport',
    url: 'https://autosportcentroautomotivo.vercel.app'
  },
  {
    name: 'pdv-manaaim',
    url: 'https://manaaim-pdv.vercel.app/'
  },
  {
    name: 'rugal-modas',
    url: 'https://rugalmodasoficiall.vercel.app'
  },
  {
    name: 'sancar-veiculos',
    url: 'https://sancarveiculosoficial.vercel.app/'
  },
  {
    name: 'spotify',
    url: 'https://projeto-spotify-frontend-eta.vercel.app/'
  },
  {
    name: 'netflix',
    url: 'https://projeto-netflix-livid.vercel.app/'
  },
  {
    name: 'food',
    url: 'https://projeto-restaurante-livid.vercel.app/'
  },
  {
    name: 'menelli-veiculos',
    url: 'https://menelliveiculosoficial.vercel.app'
  },
  {
    name: 'glaucia-elegancia',
    url: null // Local SaaS, no live URL
  },
  {
    name: 'formulario-manaaim',
    url: 'https://cantina-formulario-icm.vercel.app/'
  }
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const proj of projects) {
    const dir = path.join(__dirname, '..', 'img-projetos', proj.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`\n=== Processing: ${proj.name} ===`);

    if (!proj.url) {
      console.log(`No active live URL for ${proj.name}. Generating beautiful local placeholder sets...`);
      // For Gláucia Elegância, we can copy the local logo as slides to ensure the modal slideshow works cleanly
      try {
        fs.copyFileSync(
          path.join(__dirname, '..', 'img-projetos', 'glaucia-logo.png'),
          path.join(dir, 'slide1.png')
        );
        fs.copyFileSync(
          path.join(__dirname, '..', 'img-projetos', 'glaucia-logo.png'),
          path.join(dir, 'slide2.png')
        );
        fs.copyFileSync(
          path.join(__dirname, '..', 'img-projetos', 'glaucia-logo.png'),
          path.join(dir, 'slide3.png')
        );
        console.log(`Generated mock screenshot set for ${proj.name}.`);
      } catch (err) {
        console.error(`Failed to copy local logo placeholders for ${proj.name}:`, err.message);
      }
      continue;
    }

    try {
      console.log(`Navigating to ${proj.url}...`);
      // Use relatively generous timeout to handle slow initial loading or Vercel sleep states
      await page.goto(proj.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait another 2 seconds for active lazy-loading animations or GSAP load fades to complete
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Capture 1: Top Hero
      const screenshot1 = path.join(dir, 'slide1.png');
      await page.screenshot({ path: screenshot1 });
      console.log(`Captured slide1 (Hero) -> ${screenshot1}`);

      // Scroll to middle
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight / 2);
      });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Capture 2: Middle/Features
      const screenshot2 = path.join(dir, 'slide2.png');
      await page.screenshot({ path: screenshot2 });
      console.log(`Captured slide2 (Features) -> ${screenshot2}`);

      // Scroll to bottom
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Capture 3: Bottom/Footer
      const screenshot3 = path.join(dir, 'slide3.png');
      await page.screenshot({ path: screenshot3 });
      console.log(`Captured slide3 (Footer) -> ${screenshot3}`);

    } catch (err) {
      console.error(`Error capturing screenshots for ${proj.name}:`, err.message);
      
      // Fallback: copy logo/logo url or other image to this folder so the project doesn't have broken slides
      try {
        console.log(`Applying fallback screenshots for ${proj.name}...`);
        const fallbackSrc = path.join(__dirname, '..', 'img-projetos', 'Ambiente de trabalho moderno e acolhedor.png');
        if (fs.existsSync(fallbackSrc)) {
          fs.copyFileSync(fallbackSrc, path.join(dir, 'slide1.png'));
          fs.copyFileSync(fallbackSrc, path.join(dir, 'slide2.png'));
          fs.copyFileSync(fallbackSrc, path.join(dir, 'slide3.png'));
        }
      } catch (fbErr) {
        console.error(`Failed to apply fallback screenshots for ${proj.name}:`, fbErr.message);
      }
    }
  }

  await browser.close();
  console.log('\n=== Finished all screenshot capture operations! ===');
}

capture().catch(err => {
  console.error('Fatal execution error inside capture_screenshots.js:', err);
});
