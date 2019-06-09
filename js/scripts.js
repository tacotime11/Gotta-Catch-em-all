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

for (var i = 0; i < pokemonRepository.length; i++) {
  document.write ('<h2>' + pokemonRepository[i].name + '</h2>');
  document.write ('<p>' + pokemonRepository[i].height + '</p>');
  document.write ('<p>' + pokemonRepository[i].name + '</p>');
