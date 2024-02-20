document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault();
    let formData = new FormData(this);
    let formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });
    console.log(formObject);
    
});
