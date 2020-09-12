/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  
  for (let sched of Object.entries(obj)) {
    return false;
  } 
  return true;
}
