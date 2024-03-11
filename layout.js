class Produto {
    constructor(produto,imagem,preco,cor,descrição) {
        this.produto = produto
        this.imagem = imagem
        this.preco = preco
        this.cor = cor
        this.descrição = descrição
    }
}

function carregarProdutos() {
    fetch("produtos.json")
        .then(response => response.json())
        .then(produtos => {
            produtos.forEach(produto => {
                const produto = new Produto(produto.produto, produto.imagem, produto.preço, produto.cor)
                
                fotosProdutos(produto)
            });
        })

}

function fotosProdutos(produto){


    const fotosDeProdutos = document.getElementById("fotosProdutos")

    const cartaoProduto = document.createElement("div")

    cartaoProduto.classname = "Cartão Produto"

    cartaoProduto.innerHTML = 
    `
        <h2> ${produto.produto} </h2>
        <img src="${produto.imagem}" alt=" imagem do produto"> 
        <h4> ${produto.preço} </h4>
        <p> ${produto.cor} </p>
        <p> ${produto.descrição} </p>
    `
    fotosDeProdutos.appendChild(cartaoProduto);
}

windows.onload = carregarProdutos;
//npm install -global http-server
//http-server
