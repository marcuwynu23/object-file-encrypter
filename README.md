# Object-File-Encrypter

Node Library to convert/retrieve encrypted object to/from file

```js
const ObjectFileEncrypter = require('object-file-encrypter')

let encrypter = new ObjectFileEncrypter('secret', {ttl: true})

encrypter.writeFile('hash.txt',{name: "Marco Mulleda"},(err)=>{
	if(err)	console.log(err)
})

encrypter.readFile('hash.txt',(err,data)=>{
	if(err)	console.log(err)
	console.log(data)
})

let hash = encrypter.writeFileSync('./.encrypt/hash',{name: "Marco Mulleda"})
console.log(encrypter.readFileSync('./.encrypt/hash'))
```

### Dependency
- https://github.com/voronianski/node-object-encrypter
