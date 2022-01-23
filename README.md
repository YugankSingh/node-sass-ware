# sass-ware
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