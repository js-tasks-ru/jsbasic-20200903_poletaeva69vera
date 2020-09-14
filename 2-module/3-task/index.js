let calculator = {
  num1: 0,

  num2: 0,

  read(a, b) {
    this.num1 = a;
    this.num2 = b; 
  },
  sum(){
    let s = this.num1 + this.num2;
	return s;
  },
  mul(){
    let m = this.num1 * this.num2;
	return m; 
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
