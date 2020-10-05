import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
	this.product = product;

    this.elem = document.createElement('div');
  	this.elem.className = 'card';
  	
  	let cardTop = document.createElement('div');
  	cardTop.className = 'card__top';
  	this.elem.appendChild(cardTop);
  	
  	let cardBody = document.createElement('div');
  	cardBody.className = 'card__body';
  	this.elem.appendChild(cardBody);
  	
  	let cardImage = document.createElement('img');
  	cardImage.className = 'card__image';
  	cardImage.setAttribute("alt", "product");
  	cardTop.appendChild(cardImage);
  	
  	let price = document.createElement('span');
  	price.className = 'card__price';
  	cardTop.appendChild(price);
  	
  	let cardTitle = document.createElement('div');
  	cardTitle.className = 'card__title';
  	cardBody.appendChild(cardTitle);
  	
  	let cardButton = document.createElement('button');
  	cardButton.className = 'card__button';
  	cardButton.setAttribute("type", "button");
  	cardBody.appendChild(cardButton);
  	
  	let iconPlus = document.createElement('img');
  	cardBody.appendChild(iconPlus);
  	iconPlus.setAttribute("alt", "icon");
  	iconPlus.setAttribute("src", "/VSCode/jsbasic/jsbasic-20200903_poletaeva69vera/assets/images/icons/plus-icon.svg");
  	
  	let productArray = Object.values(product);
  	let cardImagePath = '/VSCode/jsbasic/jsbasic-20200903_poletaeva69vera/assets/images/products/' + productArray[3];
  	cardImage.setAttribute("src", cardImagePath);
  	
  	cardTitle.innerHTML = productArray[0];
  	
	price.innerHTML = "€" + productArray[1].toFixed(2);
	
	cardButton.addEventListener("click", genE);
	
	function genE(){
		this.elem.dispatchEvent(new CustomEvent("product-add", {
			detail: this.product.id,
			bubbles: true
		  }));
		  this.elem.addEventListener("product-add");
   }
  }
}
