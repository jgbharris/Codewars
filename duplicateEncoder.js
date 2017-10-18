function duplicateEncode(word){
  // convert str to array so we can run reduce on it
  var lowWord = word.toLowerCase();
  var wordArr = lowWord.split('');
  var result = '';

  // turn the string into an object where keys are unique letters and value how many times they appeared
  var letterObj = wordArr.reduce(function(total, curr) {
    if (!total[curr]) {
      total[curr] = 1;
    } else {
      total[curr]++;
    }
    return total;
  }, {});

  // loop through the string and replace each letter in the string with the corresponding paren in the object
  for (var i = 0; i < lowWord.length; i++) {
    if (letterObj[lowWord[i]] > 1) {
      result += ')';
    } else {
      result += '(';
    }
  }

  return result;
}
