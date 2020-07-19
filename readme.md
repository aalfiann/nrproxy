# nrproxy
![Version](https://img.shields.io/github/package-json/v/aalfiann/nrproxy)
[![Build Status](https://travis-ci.com/aalfiann/nrproxy.svg?branch=master)](https://travis-ci.com/aalfiann/nrproxy)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)
![License](https://img.shields.io/github/license/aalfiann/nrproxy)  
NRProxy means No Reverse Proxy (for browser only).

### How this work
This library is worked as client-side in the browser, to protect your website from unkown web proxies out there. The rejected web proxies will be turn into your backlink and redirect the visitor to your original website automatically.

### Install using NPM
```bash
$ npm install nrproxy

// then use with path
<script src="node_modules/nrproxy/src/nrproxy.min.js"></script>
```

**Or simply use with CDN**
```html
<!-- Always get the latest version -->
<!-- Not recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy/src/nrproxy.min.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy@1/src/nrproxy.min.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy@1.0/src/nrproxy.min.js"></script>

<!-- Get a specific version -->
<!-- Recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy@1.0.4/src/nrproxy.min.js"></script>
```

### Usage
```javascript
NRProxy('yourdomain.com');
```
If you have your own web proxy and want to allow it
```javascript
NRProxy('yourdomain.com, domain2.com, domain3.com');
```
