var pokemonRepository = (function () {
  var repository = [
    { name: 'Bulbasaur',
      height: 0.7,
      type: ['grass', 'poison'], },

    { name: 'Wigglyfuff',
      height: 1,
      type: ['fairy', 'normal'], },

    { name: 'Butterfree',
      height: 1.1,
      type: ['bug', 'flying'], },
  ];
 var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

function showDetails(pokemon) {
  var name = pokemon.name;
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

return {
  add: add,
  getAll: getAll,
  search: search,
  loadList: loadList
};
})();

pokemonRepository.loadList().then(function() {

pokemonRepository.getAll().forEach(function(pokemon){
  addListItem(pokemon);
});
});
var pokemonRepository = (function () {
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

  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll
  };
})();
function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {

    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
}

return {
  add: add,
  getAll: getAll,
  search: search,
  loadList: loadList,
  loadDetails: loadDetails
};
})();
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);   });
}
pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
});
