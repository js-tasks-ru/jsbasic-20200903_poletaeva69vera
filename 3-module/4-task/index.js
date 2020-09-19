/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let someUsers = users.filter(item => item.age <= age);
 
 let result = someUsers.map(a => a.name + ', ' + a.balance).join('\n');
 return result;
}
