/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    var a;
 
  for (item of table.rows){
  	
    if (item.cells[3].hasAttribute("data-available")==false){
    	item.setAttribute("hidden", "hidden");
    	
    } else if (item.cells[3].getAttribute("data-available")=="true"){
    	item.classList.add("available");
    	
    } else if (item.cells[3].getAttribute("data-available")=="false"){
    	item.classList.add("unavailable");
    } 
    
    if (item.cells[2].innerHTML=="m"){
    item.classList.add("male");	
    
    } else if(item.cells[2].innerHTML=="f"){
    	item.classList.add("female");	
    	
    }
    
    a = +item.cells[1].innerHTML;
    
    if(a < 18){
    	item.setAttribute("style", "text-decoration: line-through;");
    }
 };
 return table;
}
