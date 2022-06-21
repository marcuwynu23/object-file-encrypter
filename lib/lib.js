const fs = require('fs')
const encrypter = require('object-encrypter');

class ObjectFileEncrypter {
	constructor(secret, options) {
		this.engine = encrypter(secret, options);
	}
	readFile(fileName, fn) {
		try {
			fs.readFile(fileName, 'utf8', (err, hex) => {
				let data = this.engine.decrypt(hex)["data"]
				return fn(err, data)
			})

		} catch (err) {
			return fn(err, null)
		}
	}

	readFileSync(fileName) {
		try {
			return this.engine.decrypt(fs.readFileSync(fileName, 'utf8'))["data"]
		} catch (err) {
			return err
		}
	}
	writeFile(fileName, data, fn) {
		try {
			let hex = this.engine.encrypt({ data: data }, 5000)
			fs.writeFile(fileName, hex, (err) => {
				if (err) throw err;
			})
		} catch (err) {
			return fn(err)
		}
	}
	writeFileSync(fileName, data) {
		try {
			let hex = this.engine.encrypt({ data: data }, 5000)
			fs.writeFileSync(fileName, hex)
		} catch (err) {
			throw err
		}
	}

}

module.exports = (secret, options) => {
	return new ObjectFileEncrypter(secret, options);
}