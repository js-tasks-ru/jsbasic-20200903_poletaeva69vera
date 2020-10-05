/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }, ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.elem.innerHTML = `
      <thead>
          <tr>
            <td>Имя</td>
            <td>Возраст</td>
            <td>Зарплата</td>
            <td>Город</td>
            <td></td>
          </tr>
      </thead>
    `;
    let tbody = document.createElement('tbody');
    this.elem.appendChild(tbody);
    
    rows.forEach(item => {
    	let row = document.createElement('tr');
    	
    	Object.values(item).forEach(text => {
    		let cell = document.createElement('td');
    		let textNode = document.createTextNode(text);
    		cell.appendChild(textNode);
    		row.appendChild(cell); 
    	})
    	let cellL = document.createElement('td');
    	cellL.innerHTML = `
    	<button class = "btn">X</button>
    	`;
    	row.appendChild(cellL); 
    	tbody.appendChild(row);
    
    });
    this.elem.addEventListener("click", del);
    function del(event){
      if (event.target.tagName != 'BUTTON') {
        return;
      }
      let tr = event.target.closest('tr');
      tr.remove();
    }
}
}

