document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault();
    let formData = new FormData(this);
    let formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });
    console.log(formObject);
    
});

function validarCadastro() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let isValid = true;

    if (nome.value.trim() === "") {
      nome.classList.add("invalid");
      isValid = false;
    } else {
      nome.classList.remove("invalid");
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add("invalid");
      isValid = false;
    } else {
      email.classList.remove("invalid");
    }

    if (senha.value.trim().length < 6) {
      senha.classList.add("invalid");
      isValid = false;
    } else {
      senha.classList.remove("invalid");
    }

    return isValid;
  }

  function validarTelefone(telefone) {

    let regex = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
    return regex.test(telefone);
}