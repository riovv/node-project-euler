/**
 * Problem 5
 * http://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
var p = function (n, m) {
  var range = [],
      smallest = 0;

  // If n is divideable by 18 it's also divideable by 9 and 3 etc.
  for (i = n; i <= m; i++) range.push(i);
  for (i = m; i >= n; i--) {
    for (j = 0; range[j] < i; j++) {
      if (range[j] === 0) continue;
      if (i % range[j] === 0) range[j] = 0;
    }
  }

  range = range.filter(function (p) { return p; });
  i = 1;

  while (!smallest) {
    for (j = 0; j < range.length; j++) {
      if (i % range[j]) break;
      else if (j === range.length -1) smallest = i;
    }
    i++;
  }

  return smallest;
};

console.log(p(1,20));
