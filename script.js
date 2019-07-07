let validation;

let num_1 = prompt('Введите первое число', '');
num_1 = +num_1;

mas(num_1);

let operant = prompt('Введите арифмитический оператор', '');

let num_2 = prompt('Введите второе число', '');
num_2 = +num_2;

mas(num_2);

if (operant == '+') {
	res = num_1 + num_2;
} else if (operant == '-'){
	res = num_1 - num_2;
	} else if (operant == '*') {
		res = num_1 * num_2;
	} else  {
		res = num_1 / num_2;
	}

var result = num_1 +''+ operant +''+ num_2 +''+ '='+res;

alert(result);

function mas(validation) {
	validation = +validation;
	let  i = false;
	do {
	if (validation != +validation) { 
		 validation = prompt('Это не число! Введите число', '');
	
		} else {
			i = true;
			return validation;
			
			
			
}} while (i = true);

}
	


