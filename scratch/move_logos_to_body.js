const fs = require('fs');
const path = 'c:\\Users\\HARDZIM\\Downloads\\Guilherme-portfolio\\index.html';
let content = fs.readFileSync(path, 'utf8');

const realLogos = {
  'AUTO SPORT CENTRO AUTOMOTIVO': '<img class="project-card-brand-logo" src="https://autosportcentroautomotivo.vercel.app/img/logo-autosport.png" alt="Auto Sport Logo">',
  'PDV MANAAIM-ICM': '<img class="project-card-brand-logo" src="https://manaaim-pdv.vercel.app/icon-512.png" alt="PDV Manaaim Logo">',
  'ECOMMERCE - RUGAL MODAS': '<img class="project-card-brand-logo" src="https://rugalmodasoficiall.vercel.app/logo.png" alt="Rugal Modas Logo">',
  'SANCAR VEICULOS': '<img class="project-card-brand-logo" src="https://sancarveiculosoficial.vercel.app/img/logo-escrita-branca.png" alt="Sancar Veiculos Logo">',
  'MENELLI VEICULOS': '<img class="project-card-brand-logo" src="https://menelliveiculosoficial.vercel.app/imagens/logo/logo.png" alt="Menelli Logo">',
  'GLAUCIA ELEGANCIA ESTILO': '<img class="project-card-brand-logo" src="img-instituições/unnamed.png" alt="Gláucia Elegância Logo">',
  'FORMULARIO PRODUTOS MANAAIM': '<img class="project-card-brand-logo" src="https://manaaim-pdv.vercel.app/icon-512.png" alt="Cantina Logo">',
  'spotify': '<img class="project-card-brand-logo" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg" alt="Spotify Logo">',
  'netflix': '<img class="project-card-brand-logo" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg" alt="Netflix Logo">',
  'food': '<div class="project-card-brand-logo-text">FR</div>'
};

// Step 1: Remove the old project-brand-logo div from project-thumbs
// Search and remove all <div class="project-brand-logo...">...</div> blocks
const logoRegex = /<div class="project-brand-logo[^"]*">([\s\S]*?)<\/div>/g;
content = content.replace(logoRegex, '');

// Step 2: Insert into the project-body next to the project-name
for (const [id, logoTag] of Object.entries(realLogos)) {
  const cardStart = `data-id="${id}"`;
  if (content.includes(cardStart)) {
    const cardIndex = content.indexOf(cardStart);
    const searchArea = content.substring(cardIndex);
    
    // Find project-name in this card
    const nameSearchStr = '<h3 class="project-name">';
    const nameIndex = searchArea.indexOf(nameSearchStr);
    
    if (nameIndex !== -1) {
      const nameEndIndex = searchArea.indexOf('</h3>', nameIndex) + '</h3>'.length;
      
      const fullTitleTag = searchArea.substring(nameIndex, nameEndIndex);
      const globalStartIndex = cardIndex + nameIndex;
      const globalEndIndex = cardIndex + nameEndIndex;
      
      // We replace <h3 class="project-name">...</h3> with:
      // <div class="project-title-row">
      //     <h3 class="project-name">...</h3>
      //     [logoTag]
      // </div>
      const replacement = `<div class="project-title-row">\n                        ${fullTitleTag}\n                        ${logoTag}\n                    </div>`;
      
      content = content.substring(0, globalStartIndex) + replacement + content.substring(globalEndIndex);
      console.log(`Logo movida com sucesso para o corpo do card no projeto: ${id}`);
    }
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log('Sucesso! Marcação do HTML atualizada com as logos inseridas nos cards.');
