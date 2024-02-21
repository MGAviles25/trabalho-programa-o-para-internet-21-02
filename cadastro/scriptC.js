document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  let nome = document.getElementById("nome").value.trim();
  let telefone = formatarTelefone(document.getElementById("telefone").value.trim());
  let email = document.getElementById("email").value.trim();
  let dataNascimento = document.getElementById("dataNascimento").value.trim();
  let cidade = document.getElementById("cidade").value.trim();
  let senha = document.getElementById("senha").value.trim();

  if (nome === "" || telefone === "" || email === "" || dataNascimento === "" || cidade === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
      event.preventDefault();
      return;
  }

  if (!validarEmail(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      event.preventDefault();
      
      return;
  }

  if (!validarLetras(cidade)) {
      alert("Por favor, insira apenas letras no campo da cidade.");
      event.preventDefault();
      return;
  }
});

function validarLetras(texto) {
  let regex = /^[a-zA-ZÀ-ú\s]+$/;
  return regex.test(texto);
}

function formatarTelefone(telefone) {
  
  let numeros = telefone.replace(/\D/g, "");

  if (numeros.length === 11) {
      return numeros.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (numeros.length === 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
     
  }
}

function validarEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
  
}
