# NRProxy
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
<script src="node_modules/nrproxy/dist/nrproxy.js"></script>
```

**Or simply use with CDN**
```html
<!-- Always get the latest version -->
<!-- Not recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy/dist/nrproxy.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy@1/dist/nrproxy.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy@1.0/dist/nrproxy.js"></script>

<!-- Get a specific version -->
<!-- Recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/npm/nrproxy@1.0.7/dist/nrproxy.js"></script>
```

### Usage
```javascript
NRProxy('yourdomain.com');
```
If you have your own web proxy and want to allow it
```javascript
NRProxy('yourdomain.com, domain2.com, domain3.com');
```
Note: 
- If you allow many domains, then the rejected proxy will always redirected to the first array of domain.
- Please use file `nrproxy.js` from `dist` directory, because web proxies out there is very smart, we just need to obfuscated it.

### Example
```html
<html>
    <head></head>
    <body>
        <H1>NRProxy Example</H1>
        <script src="https://cdn.jsdelivr.net/npm/nrproxy/dist/nrproxy.js"></script>
        <script>
            NRProxy('yourdomain.com, localhost:1313');
        </script>
    </body>
</html>
```