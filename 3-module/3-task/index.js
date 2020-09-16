/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  var words = str.split('-');
     var str2 = words.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
     return str2;
}
