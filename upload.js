import { Storage } from 'megajs'

const storage = await new Storage({
  email: 'studentisaronno@gmail.com',
  password: 'Studenti_Saronno2026!'
}).ready



const file = await storage.upload('hello-world.txt', 'Hello world!').complete
console.log('The file was uploaded!', file)