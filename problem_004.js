/**
 * Problem 4
 * http://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
var p = function (n) {
  var f,i,fi,a
      pal = 0;

  for (f = Math.pow(10, n) - 1; f > 0; f--) {
    for (i = f; i > 0; i--) {
      fi = f * i;
      a = (fi + '').split('');

      if (a.length % 2 && a.length !== 1) a.splice(a.length / 2, 1);
      if (a.splice(a.length / 2).reverse().toString() === a.toString()) pal = fi > pal ? fi : pal;
    }
  }

  return pal;
};

console.log(p(3));
