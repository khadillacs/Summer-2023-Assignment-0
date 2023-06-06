function titleCaseEdit(title) {
  // Insert code here;
  const arr = title.split(' '); // separate each word in the string
  const capital = arr.map(word => word[0].toUpperCase() + word.substring(1)); // capitalize the first letter and combine with the rest of the letters
  const titleCase = capital.join(' '); // combine each word into a single string again
  return titleCase;
}

// Do not edit this line;
module.exports = titleCaseEdit;