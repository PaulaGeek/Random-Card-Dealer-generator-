// //objetos literales

// // const persona = {propiedades:valores} declaracion de un objeto

// // const persona = {
// //     nombre: "Ada",
// //     apellido: "Lovelace",
// //     edad: 26,
// //     "fecha de nacimiento": "14-08-2000"
// // }

// // //dot notation / notacion de puntos
// // console.log(persona.nombre);

// // //bracket notation
// // console.log(persona["fecha de nacimiento"]);

// // //for in
// // for (let prop in persona) {
// //     // console.log(prop);
// //     // console.log(persona[prop]); // bracket notation
// //     //          persona["edad"] => 26
// //     console.log(persona[prop]);
// // }


// function mostrarEfecto() {
//     //1. obtener el elemento
//     let titulo = document.querySelector("h1");

//     // //2. manipular el estilo del elemento
//     // titulo.style.color = "red";

//     if (titulo.style.color === "red") { //true
//         titulo.style.color = "black";
//     } else {
//         titulo.style.color = "red";
//     }

// }



function ramdomCard() {
    const palos = ["♥", "♠", "♣", "♦"];
    let indexPalo = Math.floor(Math.random() * palos.length);

    console.log(palos[indexPalo]);

    //1. obtener el elemento
    let top = document.querySelector(".top")

    //2. manipular
    top.innerHTML = palos[indexPalo]

    let bottom = document.querySelector(".bottom")

    bottom.innerHTML = palos[indexPalo]

    const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumeros = Math.floor(Math.random() * numeros.length);
    console.log(numeros[indexNumeros]);
    let number = document.querySelector(".number")
    number.innerHTML = numeros[indexNumeros];

    let indexNumero = Math.floor(Math.random() * numeros.length);
    if (indexPalo === 0 || indexPalo === 3) {
        top.style.color = "red"
        bottom.style.color = "red"

    } else {
        ;
        top.style.color = "black"
        bottom.style.color = "black"
    }


};