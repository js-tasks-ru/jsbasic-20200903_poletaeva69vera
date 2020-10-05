/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    var sqs = [];
    for (let i = 0; i < table.rows.length; i++ ){
    	sqs.push(table.rows[i].cells[i]);
    	sqs[i].style.backgroundColor = "red";
    }
}
