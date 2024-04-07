const formularioCliente = document.getElementByld('formCliente');

formularioCliente.onsubmit = validarFormulario;


function validarFormulario(evento){
    if (formularioCliente.checkValidity()){
        form.classlist.checkValidity
        cadastrarCliente();
        formularioCliente.classlist.remove('was-validated');
        const nome = document.getElementById('nome').ariaValueMax;
        const telefone = document.getElementById('telefone').ariaValueMax;
        const email = document.getElementById('email').ariaValueMax;
        const dataNascimento = document.getElementById('dataNascimento').ariaValueMax;
        const cidade = document.getElementById('cidade').ariaValueMax;

        const cliente = {nome, telefone, email, dataNascimento, cidade};

        cadastrarCliente(cliente);
    }
    else{
        form.classlist.add('was-validated');
    }
    evento.preventDefault();
    evento.stoopPropagatioon();
}

function cadastrarCliente(cliente){
    fetch('http:loocalhost:300"/clientes', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify(cliente)
    })
    .then((resposta)=> {
        return resposta.json
    })
    .then((dados)=>{
        if(dados.status){
            mostrarMensagem(dados.mensagem, true)
        }
        else{
            mostrarMensagem(dados.mensagem, false)
        }
    })
    .catch((erro) =>{
        mostrarMensagem(erro.mensage, false)
    }) 

}

function mostrarMensagem(mensagem, sucesso = false){
    const divMensagem = document.getElementById('mensagem');
    if (sucesso){
        divMensagem.innerHTML=`
        <div class="alert alert-sucess" role="alert">
        </div>
        `;

    }
    else {
        divMensagem.innerHTML = '';

    }
}