console.log(`trabalhando com listas`)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Teresina`
)


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true

listaDeDestinos.push(`Manaus`)

console.log ('destinos possíveis:')
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos)
console.log(listaDeDestinos[1])
console.log(listaDeDestinos[2], listaDeDestinos[1])

console.log("Embarque: \n\n")
if(idadeComprador >=18 && temPassagemComprada){
    listaDeDestinos.splice(1,1)
    console.log('boa viagem');
}else{
    console.log('voce não pode embarcar')
}

