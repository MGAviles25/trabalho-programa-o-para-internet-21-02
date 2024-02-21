document.getElementById("loginForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
        return;
    }

    window.location.href = "pagina.html"; 
    event.preventDefault(); 
});
