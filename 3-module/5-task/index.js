/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let nums = str.split(',').join(' ').split(' ');
     
  let onlyNums = nums.filter(item => isFinite(item)==true&&item!=="");
  
  onlyNums.sort((a, b) => a - b);
  
   let minMax = {};
  
  minMax.min = +onlyNums[0];
  minMax.max = +onlyNums[onlyNums.length - 1];
  
  return minMax;
}
