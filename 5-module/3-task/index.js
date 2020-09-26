function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');
  let innerBox = document.querySelector('.carousel__inner');
  let container = document.querySelector('.container');
  let slides = document.querySelectorAll('.carousel__slide');
  let photo = document.querySelector('.carousel__img');

  container.addEventListener("click", leaf);
 
  function leaf(event){
    let target = event.target; 
   

    if (target==btnLeft){
     alert('hello');
    } else if (target==btnRight){
     alert('user');
    } else if(target!==btnLeft&&btnRight) return;
  }
}
