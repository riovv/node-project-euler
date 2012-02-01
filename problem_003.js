/**
 * Problem 3
 * http://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
var p = function (n) {
  var primes = [],
      nsqrt = Math.floor(Math.sqrt(n));
      factor = 1;

  if (n === 1) return 1;

  // Generate list of primes using Sieve of Eratosthenes
  for (i = 2; i <= nsqrt; i++) primes.push(i);
  for (i = 0; i < primes.length; i++) {
    if (primes[i] === 0) continue;
    for (j = i + primes[i]; j < primes.length; j += primes[i]) primes[j] = 0;
  }

  primes = primes.filter(function (i) { return i; });

  // Find the largest prime factor.
  for (i = 0; i < primes.length; i++) {
    if (primes[i] * primes[i] > n) break;
    while (n % primes[i] === 0) {
      factor = primes[i];
      n = n / primes[i];
    }
  }
  return n > 1 ? n : factor;
};

console.log(p(600851475143));
