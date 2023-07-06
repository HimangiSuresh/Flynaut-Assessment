

const word = '00000111110101001111100001001';

// Using regular expressions and the match() function
const longestChain = word.match(/1+/g) // Find all occurrences of consecutive 1s
  .reduce((maxChain, currentChain) => {
    return currentChain.length > maxChain.length ? currentChain : maxChain;
  }, '');

console.log('Longest Chain:', longestChain);
