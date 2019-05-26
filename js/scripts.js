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
]

document.write('<h3>Pokemon</h3>');
repository.forEach(function(currentItem){
  document.write('<h2>' + currentItem.name + '</h2>');
  document.write('<p>' + currentItem.height + '</p>');
  document.write('<p>' + currentItem.type + '</p>');
});
