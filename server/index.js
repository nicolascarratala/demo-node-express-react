const express = require('express');
const path = require('path'); // NEW
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const TARGET_FILE = path.join(__dirname, '../src/assets/index.png'); // NEW
const AR = path.join(__dirname, '../src/ar/ar.html'); // NEW
const TEXTURE = path.join(__dirname, '../src/ar/Cube_BaseColor.jpg'); // NEW
const NTF = path.join(__dirname, '../src/ar/index.png'); // NEW
global.pathRoot = __dirname;


const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(DIST_DIR)); // NEW
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});
app.get('/target', (req, res) => {
  res.sendFile(TARGET_FILE); // EDIT
 });
 app.get('/ar', (req, res) => {
  res.sendFile(AR); // EDIT
 });
 app.get('/texture', (req, res) => {
  res.sendFile(TEXTURE); // EDIT
 });
 app.get('/ntf', (req, res) => {
  res.sendFile(NTF); // EDIT
 });
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
