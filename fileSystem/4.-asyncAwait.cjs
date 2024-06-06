const { readFile } = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression (Crear y ejecutar una función en el momento que se crea)
(async () => {
    console.log("Leyendo el primer archivo");

    const text = await readFile("./archivo.txt", "utf-8");
    console.log("Primer texto con await - IIFE: ", text);

    console.log("Leyendo el segundo archivo");

    const secondText = await readFile("./archivo.txt", "utf-8");
    console.log("Segundo texto con await - IIFE: ", secondText);
})();

const asyncFunction = async () => {
    console.log("Leyendo el primer archivo");

    const text = await readFile("./archivo.txt", "utf-8");
    console.log("Primer texto con await - NO - IIFE: ", text);

    console.log("Leyendo el segundo archivo");

    const secondText = await readFile("./archivo.txt", "utf-8");
    console.log("Segundo texto con await - NO - IIFE: ", secondText);
}

asyncFunction()