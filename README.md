# sass-ware
This is a basic sass compiler for node.  
Just tell the source for scss/sass files and it will spit out corresponding css files at the specified location.  

#### This is not Meant for production, just for development.
<small>Note: This is not a middleware, instead just a function.</small> 
## Installation
`npm i --save-dev sass-ware`

## Usage

```js

const sassWare = require('sass-ware')
sassWare({
	src: path.join(__dirname, env.asset_path, "path/to/sass"),
	dest: path.join(__dirname, env.asset_path, "path/to/css"),
})

```

## Developer Build
``` bash
git clone git@github.com:YugankSingh/sass-ware.git
cd sass-ware
npm i
npm test
```