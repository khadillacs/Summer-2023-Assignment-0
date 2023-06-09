function isPalindrome(word) {
  // Insert code here;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[word.length-1])
      return true;
    else
      return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;