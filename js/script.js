nome = document.getElementById('nome')
senha = document.getElementById('senha')
email = document.getElementById('email')
let usuarios = []

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

function addUsuario() {
    nome = document.getElementById('nome').value
    senha = document.getElementById('senha').value
    email = document.getElementById('email').value

    if (nome == '' || email == '' || senha == '') {
        document.getElementById('alerta').innerHTML = "<font color='red'>Preencha o formulário corretamente! </font>"
    } else {
        document.getElementById('alerta').innerHTML = "<font color='green'>Registrado com sucesso! </font>"
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

function listUsuarios(){
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