const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

var js = fs.readFileSync('src/nrproxy.js', 'utf8');
const dom = new JSDOM('<html><head></head><body><script>' + js + '</script></body></html>', {
  url: 'http://localhost',
  referrer: 'http://localhost',
  contentType: 'text/html',
  includeNodeLocations: true,
  storageQuota: 10000000,
  runScripts: 'dangerously'
});

console.log('Test with right url! >> ' + dom.window.NRProxy('localhost', true));
console.log('Test with not right url! >> ' + dom.window.NRProxy('example.com', true));
