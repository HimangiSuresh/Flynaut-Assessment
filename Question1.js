var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

// Find duplicate values using Filer()
var duplicates = fullWordList.filter(function (value, index, self) {
  return self.indexOf(value) !== index && wordsToRemove.includes(value);
});

// Find same values using Includes()
var sameValues = fullWordList.filter(function (value) {
  return wordsToRemove.includes(value);
});

console.log('Duplicates:', duplicates);
console.log('Same Values:', sameValues);