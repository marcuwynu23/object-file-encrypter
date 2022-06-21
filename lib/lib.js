const fs = require('fs')
const encrypter = require('object-encrypter');

class ObjectFileEncrypter {
	constructor(secret, options) {
		this.secret = secret;
		this.options = options;
		this.data = null
	}
	readFile(fileName, fn) {
		try {
			fs.readFile(fileName, 'utf8', (err, hex) => {
				let engine = encrypter(this.secret,this.options);
				let data = engine.decrypt(hex)["data"]
				return fn(err, data)
			})

		} catch (err) {
			return fn(err, null)
		}
	}

	readFileSync(fileName) {
		try {
			let engine = encrypter(this.secret,this.options);
			return engine.decrypt(fs.readFileSync(fileName, 'utf8'))["data"]
		} catch (err) {
			return err
		}
	}
	writeFile(fileName, data, fn) {
		try {
			this.data = data
			let engine = encrypter(this.secret,this.options);
			let hex = engine.encrypt({ data: this.data })
			fs.writeFile(fileName, hex, (err) => {
				if (err) throw err;
			})
		} catch (err) {
			return fn(err)
		}
	}
	writeFileSync(fileName, data) {
		try {
			this.data = data
			let engine = encrypter(this.secret,this.options);
			let hex = engine.encrypt({ data: this.data })
			fs.writeFileSync(fileName, hex)
		} catch (err) {
			throw err
		}
	}

	appendFile(fileName, data, fn) {
		try {
			this.data = data
			let engine = encrypter(this.secret,this.options);
			let hex = engine.encrypt({ data: this.data })
			fs.appendFile(fileName, hex, (err) => {
				if (err) throw err;
			})
		} catch (err) {
			return fn(err)
		}
	}
	appendFileSync(fileName, data) {
		try {
			this.data = data
			let engine = encrypter(this.secret,this.options);
			let hex = engine.encrypt({ data: this.data })
			fs.appendFileSync(fileName, hex)
		} catch (err) {
			throw err
		}
	}
}

module.exports = (secret, options) => {
	return new ObjectFileEncrypter(secret, options);
}