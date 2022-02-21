console.log(`trabalhando com condicionais`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Teresina`
)

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true


console.log('destinos possíveis:')
// console.log(listaDeDestinos)


// if (idadeComprador >= 18) {

//     console.log("Comprador maior de idade")

//     listaDeDestinos.splice(3, 1) //removendo item

// } else if (estaAcompanhada == true) {
    
//         console.log('Esta acompanhada, posso vender')
//         listaDeDestinos.splice(1, 1)

//     }else {
//         console.log("Comprador menor de idade")

//     }

//A pessoa é menor de idade

console.log(listaDeDestinos)


// if (idadeComprador >= 18 || estaAcompanhada == true) {

//     listaDeDestinos.splice(1, 1) //removendo item
//     console.log("Boa Viagem!")
    


// } else {
//         console.log("Comprador menor de idade")

//     }

    console.log("Embarque: \n\n")
    if(idadeComprador >=18 && temPassagemComprada){
        listaDeDestinos.splice(1,1)
        console.log('boa viagem');
    }else{
        console.log('voce não pode embarcar')
    }

