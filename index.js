const path = require("path")
const fs = require("fs")
const sass = require("sass")

module.exports = async function (options) {
	const dirpath = path.join(__dirname, "./scss")
	try {
		let { src, dest } = options
		if (!src && !dest) throw new Error("src and dest are required")
		if (!src) throw new Error("src is required")
		if (!dest) throw new Error("dest is required")

		let fileNames = fs.readdirSync(src)
		// filter non sass/scss files
		fileNames = fileNames.filter(file => {
			let extension = path.extname(file).toLowerCase()
			return extension === ".scss" || extension === ".sass"
		})

		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true })
		}

		fileNames.forEach(fileName => {
			let filePath = path.join(dirpath, fileName)
			const result = sass.compile(filePath)
			const baseName = path.basename(fileName, path.extname(fileName))
			let destPath = path.join(dest, baseName + ".css")
			fs.writeFileSync(destPath, result.css)
		})
		return true
	} catch (error) {
		console.log(error)
		return false
	}
}
