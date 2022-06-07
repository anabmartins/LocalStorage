let usuarios = []

// adicionar ao localstorage
function addUsuario() {
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value
    email = document.getElementById('email').value
    csenha = document.getElementById('confsenha').value

    if (nome == '' || email == '' || senha == '') {
        document.getElementById('alerta').innerHTML = "<font color='red'>Preencha o formulário corretamente! </font>"

    } else {

        document.getElementById('alerta').innerHTML = "<font color='green'>Registrado com sucesso! </font>"

        if (localStorage.getItem('usuarios') != null) {
            usuarios = JSON.parse(localStorage.getItem('usuarios'))
        }
        document.getElementById('nome').value = ''
        document.getElementById('senha').value = ''
        document.getElementById('email').value = ''

        usuarios.push([nome, email, senha])
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }
}

function listUsuarios() {
    let tbody = document.getElementById('table-linha')
    if (localStorage.getItem('usuarios') != null) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach((usuario, index) => {
            tbody.innerHTML += "<tr> <td>" + usuario[0] + "</td> <td>" + usuario[1] +
                "</td> " + "<td><button id='trash' onclick='deleteUsuario(" + index + ")'> \u{1F5D1} </button></td></tr>"
        });
    } else {
        tbody.innerHTML = "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }
}

const deleteUsuario = (index) => {
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
    let auxUsuarios = usuarios.filter((v, i) => i != index)
    localStorage.setItem('usuarios', JSON.stringify(auxUsuarios))
    document.location.reload(true)
}

// verificar email
function validarEmail(field) {
    email = field.value.substring(0, field.value.indexOf('@'))
    dominio = field.value.substring(field.value.indexOf('@') + 1, field.value.length)

    if ((email.length >= 1) &&
        (dominio.length >= 3) &&
        (email.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (email.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById('msgemail').innerHTML = "<font color='green'>E-mail válido </font>"

    } else {
        document.getElementById('msgemail').innerHTML = "<font color='red'>E-mail inválido </font>"
    }
}

// validar senha
function validarSenha() {
    senha = document.getElementById('senha').value
    csenha = document.getElementById('confsenha').value
    
    if (senha.value == csenha.value) {
        csenha.innerHTML = "<font color='green'>Senha correta</font>"
    } else {
        csenha.innerHTML = "<font color='red'>Senha incorreta</font>"
    }
}

