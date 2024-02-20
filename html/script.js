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

document.addEventListener('DOMContentLoaded', () => {

    const eventos = [
      {
        id: 1,
        nome: 'Corinthians X Palmeiras',
        data: '04/04/2024',
        local: 'Maracanã, Rio de Janeiro - RJ',
        preco: 'R$ 50,00'
      },
      {
        id: 2,
        nome: 'Show Zé Ramalho',
        data: '05/05/2024',
        local: 'Bosque Marechal Cândido Rondon, Londrina - PR',
        preco: 'R$ 100,00'
      },
      {
        id: 3,
        nome: 'Show Danilo Gentili',
        data: '06/06/2024',
        local: 'Teatro municipal, Presidente Prudente - SP',
        preco: 'R$ 150,00'
      },
      {
        id: 4,
        nome: 'Turne Leo Lins 4',
        data: '07/07/2024',
        local: 'Teatro municipal, Marília - SP',
        preco: 'R$ 200,00'
      }
    ];
  
    const eventosContainer = document.querySelector('.eventos');
  
    eventos.forEach(evento => {
      const eventoElemento = document.createElement('div');
      eventoElemento.className = 'evento';
      eventoElemento.innerHTML = `
        <h2>${evento.nome}</h2>
        <p>Data: ${evento.data}</p>
        <p>Local: ${evento.local}</p>
        <p>Preço: ${evento.preco}</p>
        <button onclick="window.location.href='/evento/${evento.id}'">Ver detalhes</button>
      `;
      eventosContainer.appendChild(eventoElemento);
    });
  });
