const path = require("path")
const fs = require("fs")
const sass = require("sass")

function write(filePath, destPath) {
	const result = sass.compile(filePath)
	fs.writeFileSync(destPath, result.css)
}

module.exports = async function (options) {
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
			const baseName = path.basename(fileName, path.extname(fileName))
			let destPath = path.join(dest, baseName + ".css")
			let filePath = path.join(src, fileName)

			write(filePath, destPath)
			fs.watchFile(filePath, (curr, prev) => {
				write(filePath, destPath)
				console.log(fileName, " changed")
			})
		})
		return true
	} catch (error) {
		console.log(error)
		return false
	}
}
