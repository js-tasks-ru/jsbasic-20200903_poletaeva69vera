function toggleText() {

  let button = document.querySelector('.toggle-text-button');

  let txt = document.getElementById('text');

  button.addEventListener("click", f);

  function f(){

    button.classList.toggle('active');

    if (button.classList.contains("active")){
      txt.setAttribute("hidden", "hidden");
      
     } 	else if (button.classList.contains("active")!==true){
      txt.removeAttribute("hidden", "hidden");
     }
 }
}
