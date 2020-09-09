/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  var array = [];
				
  for (var i = n; i >= 1; i--) {
    array.push(i);
  }
  
  var fact = 1;
  
  for (var k = 0; k < array.length; k++) {
     fact *= array[k];
  };
  
  return fact;
};
