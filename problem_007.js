/**
 * Problem 7
 * http://projecteuler.net/problem=7
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */
var p = function (n) {
  var p, i, sqrt,
      k = 0,
      primes = new Array(n);

  primes[k++] = 2;

  for (p = 3; k < n; p += 2) {
    sqrt = Math.sqrt(p);
    for (i = 0; primes[i] <= sqrt; i++) if (p % primes[i] === 0) break;
    if (primes[i] > sqrt) primes[k++] = p;
  }

  return primes[n - 1];
};

console.log(p(10001));