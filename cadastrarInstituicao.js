document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cep = document.getElementById("cep").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var rua = document.getElementById("rua").value;
    var bairro = document.getElementById("bairro").value;

    var novaInstituicao = {
        nome: nome,
        email: email,
        telefone: telefone,
        cep: cep,
        cidade: cidade,
        estado: estado,
        rua: rua,
        bairro: bairro
    };

    enviarDados(novaInstituicao);
});

function enviarDados(instituicao) {
    console.log(instituicao);
    alert("Instituição cadastrada com sucesso!");
    window.location.href = "login.html";
}
