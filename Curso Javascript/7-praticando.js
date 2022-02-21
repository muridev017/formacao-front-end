console.log('trabalhando com lista de compras')
const listaDeCompra = new Array (
    'Óleo',
    'Café',
    'Chocolate',
    'Papel Higiênico'
)

const tomeiCafe = listaDeCompra.splice(1,1)


// const useiCafe = semItensDaLista

if(listaDeCompra && tomeiCafe){
    console.log(listaDeCompra, 'vá ao mercado')
}if(listaDeCompra, tomeiCafe){
    const fuiAoMercado = listaDeCompra.push('Café')
    console.log(listaDeCompra, 'ta de boa, temos tudo')
    console.log('Fui ao mercado agora tenho', fuiAoMercado, 'items novamente')
}


