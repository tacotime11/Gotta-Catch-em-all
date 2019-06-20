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

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(currentItem){
  console.log(pokemonRepository.getAll());
  pokemonRepository.add();
  console.log(pokemonRepository.getAll());
})

var $pokemon-list = document.querySelector('.pokemon-list');
pokemonRepository.getAll().forEach(function(currentItem){
  var listItem = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = "Bulbasaur";
  button.innerText = "Wiggilyfuff";
  button.innerText = "Butterfree";
function addListItem(pokemon) {
  repository.push(pokemon);
}
function showDetails(pokemon) {
  console.log(pokemon);
}
.addEventListener('click', function (pokemon);
)}

$element.classList.add('my-class');

$listItem.appendChild(button);

$listItem.appendChild(listItem);
