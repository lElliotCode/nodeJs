import {readFile} from 'node:fs/promises'

console.log('Leyendo el primer archivo')

const text = await readFile('./archivo.txt', ('utf-8'))
console.log('Primer texto con await: ', text)