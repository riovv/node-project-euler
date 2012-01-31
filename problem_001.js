/**
 * Problem 1
 * http://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
var p = function (n) {
  var i,
      sum = 0;
  for (i = 1; i < n; i++) if (!(i % 3 && i % 5)) sum += i;
  return sum;
};

console.log(p(1000));
