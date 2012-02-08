/**
 * Problem 6
 * http://projecteuler.net/problem=6
 *
 * The sum of the squares of the first ten natural numbers is,
 * 12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)2 = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
var p = function (n) {
  var i,
      sqsum = 0,
      sumsq = 0;

  for (i = 1; i <= n; i++) {
    sumsq += i * i;
    sqsum += i;
  }

  sqsum = sqsum * sqsum;

  return sqsum - sumsq;
};

console.log(p(100));
