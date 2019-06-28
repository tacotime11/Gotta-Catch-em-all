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

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
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

    $ul.appendChild($li)

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

pokemonRepository.getAll().forEach(function(currentItem){
  pokemonRepository.addListItem(currentItem);
})
