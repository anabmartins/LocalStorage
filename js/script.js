let usuarios = []
const addUsuario = () => {
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value
    email = document.getElementById('email').value

    usuarios.push([nome, email, senha])
    console.log('users', usuarios);
}

