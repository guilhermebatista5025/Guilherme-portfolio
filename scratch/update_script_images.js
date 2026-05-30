const fs = require('fs');
const path = 'c:\\Users\\HARDZIM\\Downloads\\Guilherme-portfolio\\script.js';
let content = fs.readFileSync(path, 'utf8');

// We replace the images field for each project in projectsData
const imagesMapping = {
  'AUTO SPORT CENTRO AUTOMOTIVO': "images: ['https://autosportcentroautomotivo.vercel.app/img/logo-autosport.png'],",
  'ECOMMERCE - RUGAL MODAS': "images: ['img-projetos/rugal-logo.png'],",
  'SANCAR VEICULOS': "images: ['https://sancarveiculosoficial.vercel.app/img/logo-escrita-branca.png'],",
  'MENELLI VEICULOS': "images: ['https://menelliveiculosoficial.vercel.app/imagens/logo/logo.png'],",
  'GLAUCIA ELEGANCIA ESTILO': "images: ['img-projetos/glaucia-logo.png'],",
  'FORMULARIO PRODUTOS MANAAIM': "images: ['https://manaaim-pdv.vercel.app/icon-512.png'],"
};

for (const [id, imagesReplacement] of Object.entries(imagesMapping)) {
  const idStr = `id: '${id}'`;
  if (content.includes(idStr)) {
    const idIndex = content.indexOf(idStr);
    const searchArea = content.substring(idIndex);
    
    // Find the first "images: [...]," after this ID
    const imagesRegex = /images:\s*\[[^\]]*\],/g;
    const match = imagesRegex.exec(searchArea);
    
    if (match) {
      const matchStr = match[0];
      const matchIndex = match.index;
      const globalStartIndex = idIndex + matchIndex;
      const globalEndIndex = globalStartIndex + matchStr.length;
      
      content = content.substring(0, globalStartIndex) + imagesReplacement + content.substring(globalEndIndex);
      console.log(`Imagens do modal atualizadas no banco de dados do script para: ${id}`);
    }
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log('Sucesso! Banco de dados de projetos em script.js atualizado com as novas logos.');
