// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar CommonJS

import {sum, sub, mult, div} from './sum.mjs'

console.log(sum(4,7))
console.log(sub(4,7))
console.log(mult(4,7))
console.log(div(4,7))