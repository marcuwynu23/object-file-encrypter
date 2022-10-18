# Object-File-Encrypter


Node Library to convert/retrieve encrypted object to/from file

To Install
```
npm i object-file-encrypter
```
```js
const ObjectFileEncrypter = require('object-file-encrypter')

let encrypter = new ObjectFileEncrypter('secret', {ttl: true})

encrypter.writeFile('hash.txt',{text: "Hello World!"},(err)=>{
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

## Contributing
How to Contribute to this Project Repository:
1. Fork the Project
2. Create your Branch 
3. Commit your Changes 
4. Push to the Branch 
5. Open a Pull Request

Thank you in advance for your contributions! Godbless and Happy Coding! 
