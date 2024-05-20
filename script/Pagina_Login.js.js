
document.getElementById('login-btn').addEventListener('click', function() {

  const username = document.getElementById('Usuario').value;
  const password = document.getElementById('Senha').value;


  console.log(`Usuario: ${username}, Senha ${password}`);
});