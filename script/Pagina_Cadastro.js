function cadastrar() {
    var nome = document.getElementById("inputNome").value;
    var matricula = document.getElementById("inputMatricula").value;
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputSenha").value;
    var confirmarSenha = document.getElementById("inputConfSenha").value;

    
    if (nome === "" || matricula === "" || email === "" || senha === "" || confirmarSenha === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }
}