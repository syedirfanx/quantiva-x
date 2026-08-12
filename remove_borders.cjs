const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  if (file.includes('Footer.tsx')) return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove border border-xxxxx
  content = content.replace(/\bborder border-[a-zA-Z0-9/-]+\b/g, '');
  
  // Remove hover:border-xxxxx
  content = content.replace(/\bhover:border-[a-zA-Z0-9/-]+\b/g, '');
  
  // Remove group-hover:border-xxxxx
  content = content.replace(/\bgroup-hover:border-[a-zA-Z0-9/-]+\b/g, '');

  // Remove focus:border-xxxxx
  content = content.replace(/\bfocus:border-[a-zA-Z0-9/-]+\b/g, '');
  
  // Remove the variable references to hoverBorder
  content = content.replace(/\$\{\w+\.hoverBorder\}/g, '');
  
  // Cleanup any double spaces or leading/trailing spaces inside className
  content = content.replace(/className="([^"]+)"/g, (match, p1) => {
    return `className="${p1.replace(/\s+/g, ' ').trim()}"`;
  });
  
  content = content.replace(/className=\{`([^`]+)`\}/g, (match, p1) => {
    return `className={\`${p1.replace(/\s+/g, ' ').trim()}\`}`;
  });

  fs.writeFileSync(file, content);
});

console.log('Borders removed.');
