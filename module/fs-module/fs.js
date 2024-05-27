// const fs = require('fs');
// const fs = require('fs/promises');

// write to a file //

// callback version
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//   if (err) throw err;
//   console.log('File created');
// });

// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')
//   .then(() => console.log('File created'))
//   .cath((err) => console.log(err));

// Sync version
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('File created');

// Async/Await
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('file created');
  } catch (error) {
    console.log(error);
  }
}

// Read From a File

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// delete a file
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`file ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

deleteFile('file2.txt');

// readFile('file1.txt');

// createFile('file4.txt', 'Hello World 4');
