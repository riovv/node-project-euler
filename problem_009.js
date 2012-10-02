/**
 * Problem 9
 * http://projecteuler.net/problem=9
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, 
 * a^2 + b^2 = c2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */
var p = function (n) {
  var a, b, c, x, y, mn, mnSqrt, bEven,
      limit = Math.floor((n / 2) / 2);

  // This method is a direct algebraic manipulation of the Euclid equations.
  // Try each possible b as if it was known.
  for (b = 1; b < limit; b++) {
    bEven = (b % 2 === 0);

    mn = bEven ? b / 2 : b;
    mnSqrt = Math.sqrt(mn);

    for (y = 1; y <= mnSqrt; y++) {
      x = mn / y;
      if (x % 1 === 0) {
        a = bEven ? x*x - y*y : (x*x - y*y) / 2;
        c = bEven ? x*x + y*y : (x*x + y*y) / 2;
        if (a + b + c === n) {
          return a * b * c;
        }
      }
    }
  }

  return;
};

console.log(p(1000));