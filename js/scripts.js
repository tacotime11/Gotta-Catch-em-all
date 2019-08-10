var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    var name = pokemon.name;
    pokemonRepository.loadDetails(pokemon)
      .then(function(details){
        showModal(details)
      })
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function addListItem(pokemonItem) {
    var listItemText = document.createTextNode(pokemonItem.name);
    var buttonText = document.createTextNode('show details');
    var $detailsButton = document.createElement('button');
    var $li = document.createElement('li');
    var $p = document.createElement('p');
    var $ul = document.querySelector('.pokemon-list');

    $detailsButton.classList.add('details-button');
    $li.classList.add('list-item');

    $detailsButton.appendChild(buttonText);
    $p.appendChild(listItemText);
    $li.appendChild($p);
    $li.appendChild($detailsButton);
    $ul.appendChild($li);

    $detailsButton.addEventListener('click', function(event) {
      showDetails(pokemonItem);
    });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
      return item;
    }).catch(function (e) {
      console.error(e);
    });
  }

  var $modalContainer = document.querySelector('#modal-container');
  var dialogPromiseReject;

  function showModal(details) {

    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');


    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = details.name

    var contentElement = document.createElement('p');
    contentElement.innerText = details.height;

    var imageElement = document.createElement('img');
    imageElement.src = details.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    $modalContainer.classList.remove('is-visible');

    if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseRejct = null;
    }
  }

  return {
    add: add,
    getAll: getAll,
    showDetails: showDetails,
    loadList: loadList,
    addListItem: addListItem,
    loadDetails: loadDetails,
  };

})();

pokemonRepository.loadList().then( () =>{
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
