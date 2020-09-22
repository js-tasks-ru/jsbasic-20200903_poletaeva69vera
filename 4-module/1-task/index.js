/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  var result = friends.map(a => a.firstName + ' ' + a.lastName);
 var list = document.createElement('ul');
  document.body.appendChild(list);
 for (let i = 0; i < result.length; i++) {
	let li = document.createElement('li');
	li.innerHTML = result[i];
	list.appendChild(li);
}
}
