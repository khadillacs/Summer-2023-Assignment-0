function fizzBuzz(start, end) {
  // Insert code here;
  const outputArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      outputArray.push("FizzBuzz");
    else if (i % 3 === 0)
      outputArray.push("Fizz");
    else if (i % 5 === 0)
      outputArray.push("Buzz");
    else
      outputArray.push(i);
  }
  return outputArray;
}

// Do not edit this line;
module.exports = fizzBuzz;