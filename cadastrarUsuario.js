function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmarSenha').value;

    if (nome.length < 4) {
        alert("O nome de usuário deve conter pelo menos 4 caracteres.");
        return false;
    }

    if (senha.length < 6) {
        alert("A senha deve conter pelo menos 6 caracteres.");
        return false;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    return true;
}

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    if (!validarFormulario()) {
        return;
    }

    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    var novoUsuario = {
        nome: nome,
        senha: senha
    };

    enviarDados(novoUsuario);
});

function enviarDados(usuario) {
    console.log(usuario);
    alert("Usuário cadastrado com sucesso!");
    window.location.href = "login.html";   
}
