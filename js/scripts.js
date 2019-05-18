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

for (var i = 0; i < repository.length; i++) {
  document.write ('<h1>' + repository[i].name + '</h1>');
  document.write ('<h2>' + repository[i].height + '</h2>');
  document.write ('<h3>' + repository[i].type + '</h3>');
  if (repository[i].height >  1) {
    document.write ('<p>' + 'Wow, that’s big!' + '</p>')
  }
}
