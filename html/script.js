document.getElementById("cadastroForm").addEventListener("submit", function(event){
  event.preventDefault();
  let formData = new FormData(this);
  let formObject = {};
  formData.forEach(function(value, key){
      formObject[key] = value;
  });
  console.log(formObject);

});

const form = document.getElementById('formpagina');

function validar() {
    if(form.checkvalidity(e) === false) {
        form.classList.add('was-validated');
        e.preventDefault();
        e.stopPropagation();
        
    } else {
        form.classList.remove('was-validated');
        
    }
}

form.addEventListener('submit', validar);


