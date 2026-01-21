
const fs = require('fs');


fs.readFile('input.txt', 'utf8', (error, data) => {
  if (error) {
    console.log('Error reading file');
    return;
  }

  
  const words = data.trim().split(/\s+/);
  const wordCount = words.length;

  
  fs.writeFile('output.txt', `Word count: ${wordCount}`, () => {
    console.log('Word count written to output.txt');
  });
});
