const fs = require('fs');
const path = 'c:\\Users\\HARDZIM\\Downloads\\Guilherme-portfolio\\index.html';
let content = fs.readFileSync(path, 'utf8');

// The new real company logos we crawled and verified
const realLogos = {
  'AUTO SPORT CENTRO AUTOMOTIVO': '<div class="project-brand-logo"><img src="https://autosportcentroautomotivo.vercel.app/img/logo-autosport.png" alt="Auto Sport Logo"></div>',
  'PDV MANAAIM-ICM': '<div class="project-brand-logo"><img src="https://manaaim-pdv.vercel.app/icon-512.png" alt="PDV Manaaim Logo"></div>',
  'ECOMMERCE - RUGAL MODAS': '<div class="project-brand-logo"><img src="https://rugalmodasoficiall.vercel.app/logo.png" alt="Rugal Modas Logo"></div>',
  'SANCAR VEICULOS': '<div class="project-brand-logo"><img src="https://sancarveiculosoficial.vercel.app/img/logo-escrita-branca.png" alt="Sancar Veiculos Logo"></div>',
  'MENELLI VEICULOS': '<div class="project-brand-logo"><img src="https://menelliveiculosoficial.vercel.app/imagens/logo/logo.png" alt="Menelli Logo"></div>',
  'GLAUCIA ELEGANCIA ESTILO': '<div class="project-brand-logo"><img src="img-instituições/unnamed.png" alt="Gláucia Elegância Logo"></div>',
  'FORMULARIO PRODUTOS MANAAIM': '<div class="project-brand-logo"><img src="https://manaaim-pdv.vercel.app/icon-512.png" alt="Cantina Logo"></div>',
  'spotify': '<div class="project-brand-logo"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg" alt="Spotify Logo"></div>',
  'netflix': '<div class="project-brand-logo"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg" alt="Netflix Logo"></div>',
  'food': '<div class="project-brand-logo text-avatar"><span>FR</span></div>' // Food & Restaurante initials
};

let updatedCount = 0;

for (const [id, logoHtml] of Object.entries(realLogos)) {
  // Let's find the card
  const cardStart = `data-id="${id}"`;
  if (content.includes(cardStart)) {
    const cardIndex = content.indexOf(cardStart);
    // We already have a project-brand-logo in the card from the previous script!
    // So let's find the existing project-brand-logo block and replace it!
    const searchArea = content.substring(cardIndex);
    
    // We search for <div class="project-brand-logo"> up to </div>
    const logoStartStr = '<div class="project-brand-logo';
    const logoStartIndex = searchArea.indexOf(logoStartStr);
    
    if (logoStartIndex !== -1) {
      const logoEndIndex = searchArea.indexOf('</div>', logoStartIndex) + '</div>'.length;
      
      const targetBlock = searchArea.substring(logoStartIndex, logoEndIndex);
      const globalStartIndex = cardIndex + logoStartIndex;
      const globalEndIndex = cardIndex + logoEndIndex;
      
      content = content.substring(0, globalStartIndex) + logoHtml + content.substring(globalEndIndex);
      console.log(`Logo real atualizada no projeto: ${id}`);
      updatedCount++;
    } else {
      console.error(`Erro: Não encontrei a div de marcação prévia para: ${id}`);
    }
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Sucesso! ${updatedCount} logos reais de empresas atualizadas em index.html.`);
