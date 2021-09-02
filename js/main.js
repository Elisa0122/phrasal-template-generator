var start = alert('Let’s make a story together!');
var colour = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adjective = prompt('An adjective (beautiful, super, etc.)');
var verbed = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like?\n' +
                  'a) Snacking\n' +
                  'b) Escaping\n' +
                  'c) Winning\n' +
                  'Enter the letter below:');

var snacking = `After snacking on ${adjective} treats, the ${colour} bellied ${creature} ${verbed} for hours.`;
var escaping = `Amelia ${verbed} through the ${adjective} ${colour} nebula escaping the space ${creature}.`;
var winnipeg = `Jackson chose his ${adjective}, ${colour} ${creature} card and ${verbed} it to the table knowing he won.`;

if (story =='a') {
  document.write(snacking);
};

if (story == 'b') {
  document.write(escaping);
};

if (story == 'c') {
  document.write(winnipeg);
};
