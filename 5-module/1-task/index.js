function hideSelf() {
  let button = document.querySelector('.hide-self-button');
  button.addEventListener("click", f);
  function f(){
 button.setAttribute("hidden", "hidden");
 }
}
