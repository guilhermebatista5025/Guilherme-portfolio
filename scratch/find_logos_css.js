const fs = require('fs');
const path = 'c:\\Users\\HARDZIM\\Downloads\\Guilherme-portfolio\\style.css';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('LOGOS DE PROJETOS ESTILIZADAS') || line.includes('project-brand-logo')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
