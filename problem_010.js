/**
 * Problem 10
 * http://projecteuler.net/problem=10
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */
var p = function (n) {
  var p, i,
      size = n / 2 - 1,
      d = new Array(size),
      sum = 2;

  // Create a list of odd numbers 3 .. n
  for (i = 0, p = 3; p < n; p += 2, i++) d[i] = p;

  // Using Sieve of Eratosthenes, sum up all found primes.
  for (p = 0; p < size; p++) {
    if (d[p] === 0) continue;
    sum += d[p];
    for (i = p + d[p]; i < size; i += d[p]) d[i] = 0;
  }

  return sum;
};

console.log(p(2000000));