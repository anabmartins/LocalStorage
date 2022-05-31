let usuarios = []
const addUsuario = () => {
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value
    email = document.getElementById('email').value
    erro = document.querySelector('.erro')

    if (nome == "" || email == '' || senha == "") {
        erro.style.display = 'block'
    } else {
        erro.style.display = 'none'
        window.alert('Registrado com sucesso!')
    }

    if (localStorage.getItem('usuarios') != null) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        nome = document.getElementById('nome').value = ''
        senha = document.getElementById('senha').value = ''
        email = document.getElementById('email').value = ''
    }

    usuarios.push([nome, email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

const listUsuarios = () => {
    let tbody = document.getElementById('table-linha')
    if (localStorage.getItem('usuarios') != null) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(usuario => {
            tbody.innerHTML += "<tr> <td>" + usuario[0] + "</td> <td>" + usuario[1] + "</td></tr>"
        });
    } else {
        tbody.innerHTML = "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }
}