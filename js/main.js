function sumar(n1 ,n2) {
    return n1 + n2;
}

function saludar() {
    alert('Hola Mundo');
}

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    area() {
        return this.alto * this.ancho;
    }
}

// function consultarJson() {
//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//         .then((response) => { return response.json() })
//         .then((data) => { console.log(data); });
// }

async function consultarJson() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    let rep = response.json();
    console.log(rep);
}