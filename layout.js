class Produto {
    constructor(nome, sobrenome, idade, altura) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.altura = altura
    }
}

function carregaUsuarios() {
    fetch("usuários.json")
        .then(response => response.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const usuario = new Usuario(usuario.nome, usuario.sobrenome, usuario.idade, usuario.altura)
                
                addUsuarioTabela(usuario)
            });
        })

}

function addUsuarioTabela(usuario){
    const tabelaUsuario = document.getElementById("tabelaDeUsuarios2")

    const linhaUsuario = document.createElement("tr")

    linhaUsuario.classname = "linhas"

    linhaUsuario.innerHTML = 
    `
        <td> ${usuario.nome} </td>
        <td> ${usuario.sobrenome} </td>
        <td> ${usuario.idade} </td>
        <td> ${usuario.altura} </td>
    `
    tabelaUsuario.appendChild(linhaUsuario);
}

windows.onload = carregaUsuarios;