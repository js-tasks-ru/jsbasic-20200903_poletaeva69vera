/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  var str2 = str.toLowerCase();
          if (~str2.indexOf('1xbet') || ~str2.indexOf('xxx')) {
            return true;
          } else return false;
          }
