/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  var filtered = arr.filter(item => item >=a && item<=b);
  return filtered;
}
