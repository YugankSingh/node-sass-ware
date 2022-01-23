const sassWare = require("./")

async function test() {
	let result = await sassWare({ src: "./scss", dest: "./css" })
	if (result) console.log("No Errors Thrown 👍")
	else 
		console.log("Shit Errors 🤐")
}
test()
