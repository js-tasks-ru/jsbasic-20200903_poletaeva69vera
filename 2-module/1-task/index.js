/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};  

function sumSalary(salaries) {
  
  let sum = 0;
                for (let sal of Object.values(salaries)) {
                	if (isFinite(sal)==false){
			 	continue;
			}
                	sum += sal;
                       }
                   
			return sum;

}
