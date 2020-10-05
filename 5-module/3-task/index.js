function initCarousel() {
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let btnRight = document.querySelector('.carousel__arrow_right');
  let innerBox = document.querySelector('.carousel__inner');
  let slides = document.querySelectorAll('.carousel__slide');
  let photo = document.querySelector('[data-id="penang-shrimp"]');
  btnLeft.style.display = 'none';	
  btnLeft.addEventListener("click", leafL);
  btnRight.addEventListener("click", leafR);
  
  var width = photo.offsetWidth;
  var x = 0;
  var maxPos = -(width*(slides.length-1));

  function leafR(){
  	btnLeft.style.display = '';
  	let k = 0;
  
            if (k<slides.length-1){k++;}
           
        x -= width*k;
        
    if(x == maxPos){
   	btnRight.style.display = 'none';
  } 
    		innerBox.style.transform = 'translateX(' + x + 'px)';
   }

  function leafL(){
    btnRight.style.display = ''
    
    let i = 0;
    
     if (i<slides.length-1){i++;}
     
    x += width*i;

    if (x==0){
  	btnLeft.style.display = 'none';	
  } 
    innerBox.style.transform = 'translateX(' + x + 'px)';
  }
}
