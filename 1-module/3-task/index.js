/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
  function ucFirst(str) { 
    if (str.length===1){
      return str[0].toUpperCase();
    } else if (str===''){
  var newSt = '';
   return newSt;
} else {	
var letter = str[0].toUpperCase();
for (var i = 1; i < str.length; i++){
newSt = letter += str[i];
}
return newSt;
}
        }

