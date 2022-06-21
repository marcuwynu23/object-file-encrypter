# Object-File-Encrypter

```
const ObjectFileEncrypter = require('object-file-encrypter')

let encrypter = new ObjectFileEncrypter('secret', {ttl: true})

encrypter.writeFile('hash.txt',{name: "Mark Wayne Menorca"},(err)=>{
	if(err)	console.log(err)
})

encrypter.readFile('hash.txt',(err,data)=>{
	if(err)	console.log(err)
	console.log(data)
})

let hash = encrypter.writeFileSync('./.encrypt/hash',{n: "dsdsd"})
console.log(encrypter.readFileSync('./.encrypt/hash'))
```