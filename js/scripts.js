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
  document.write ('<p>' + repository[i].name + '</p>');
  document.write ('<p>' + repository[i].height + '</p>');
  document.write ('<p>' + repository[i].type + '</p>');
  if (repository[i].height >  1.1) {
    document.write ('<p>' + 'Wow, that’s big!' + '</p>');
  }
