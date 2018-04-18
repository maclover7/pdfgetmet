#! /usr/bin/env node

const exiftool = require('node-exiftool');
const exiftoolProcess = new exiftool.ExiftoolProcess();
const argv = process.argv.slice(2);

var filename = argv[0];
if (!filename) {
  console.log('Need to specify filename as argument to pdfgetmet');
  process.exit(1);
}


exiftoolProcess
  .open()
  .then((pid) => console.log(`Started exiftool process ${pid}`))
  .then(() => exiftoolProcess.readMetadata(filename, ['-File:all']))
  .then(console.log)
  .then(() => exiftoolProcess.close())
  .catch(console.error);
