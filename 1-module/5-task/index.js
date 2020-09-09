/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength){
    var partSt = str.substr(0, maxlength-1);
    var str2 = partSt + "…";
    return str2;
  } else return str;
}

