const fs = require('fs');
const path = 'c:\\Users\\HARDZIM\\Downloads\\Guilherme-portfolio\\index.html';
let content = fs.readFileSync(path, 'utf8');

// Step 1: Revert the title-row changes from the previous round (clean up duplicate inline logos next to titles)
// We want to replace:
// <div class="project-title-row">
//     <h3 class="project-name">...</h3>
//     [logoTag]
// </div>
// with just:
// <h3 class="project-name">...</h3>

const titleRowRegex = /<div class="project-title-row">[\s\S]*?(<h3 class="project-name">[\s\S]*?<\/h3>)[\s\S]*?<\/div>/g;
content = content.replace(titleRowRegex, '$1');

// Step 2: Set the main cover image src for each card to be the official company logo crawled
const cardThumbLogos = {
  'AUTO SPORT CENTRO AUTOMOTIVO': 'https://autosportcentroautomotivo.vercel.app/img/logo-autosport.png',
  'PDV MANAAIM-ICM': 'img-projetos/pdv-pro.png', // Already its typewriter logo!
  'ECOMMERCE - RUGAL MODAS': 'https://rugalmodasoficiall.vercel.app/logo.png',
  'SANCAR VEICULOS': 'https://sancarveiculosoficial.vercel.app/img/logo-escrita-branca.png',
  'MENELLI VEICULOS': 'https://menelliveiculosoficial.vercel.app/imagens/logo/logo.png',
  'GLAUCIA ELEGANCIA ESTILO': 'img-instituições/unnamed.png',
  'FORMULARIO PRODUTOS MANAAIM': 'https://manaaim-pdv.vercel.app/icon-512.png',
  'spotify': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg',
  'netflix': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg',
  'food': 'img-projetos/food.png'
};

let updatedCovers = 0;

for (const [id, logoSrc] of Object.entries(cardThumbLogos)) {
  const cardStart = `data-id="${id}"`;
  if (content.includes(cardStart)) {
    const cardIndex = content.indexOf(cardStart);
    const searchArea = content.substring(cardIndex);
    
    // Find the main <img tag inside project-thumb
    const thumbIndex = searchArea.indexOf('<div class="project-thumb">');
    if (thumbIndex !== -1) {
      const imgIndex = searchArea.indexOf('<img', thumbIndex);
      const imgEndIndex = searchArea.indexOf('>', imgIndex) + 1;
      
      if (imgIndex !== -1 && imgEndIndex !== -1) {
        const fullImgTag = searchArea.substring(imgIndex, imgEndIndex);
        const globalStartIndex = cardIndex + imgIndex;
        const globalEndIndex = cardIndex + imgEndIndex;
        
        // Replace src="..." with the official logoSrc
        // We replace any src="[^"]*" with src="[logoSrc]"
        const newImgTag = fullImgTag.replace(/src="[^"]*"/, `src="${logoSrc}"`);
        
        content = content.substring(0, globalStartIndex) + newImgTag + content.substring(globalEndIndex);
        console.log(`Capa do card atualizada com a logo da empresa para: ${id}`);
        updatedCovers++;
      }
    }
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Sucesso! ${updatedCovers} capas de projetos atualizadas com os logotipos das marcas.`);
