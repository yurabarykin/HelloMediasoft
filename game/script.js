document.body.style = "text-align:center;text-transform:uppercase"; // Стили для всех заголовков 

//КРЕСТИКИ НОЛИКИ

let CrossZeroGame = document.querySelector('#CrossZero'); // Создание таблицы для игры Крестики Нолики
CrossZeroGame.style = "max-width:600px; margin:0px auto"; // Стили для блока с игрой
CrossZeroTable(CrossZeroGame, 3, 3);
function CrossZeroTable(parent, cols, rows){
	let CrossZeroTable = document.createElement('table');
	for (let i = 0; i < rows; i++){
		let CrossZeroTr = document.createElement('tr');
		for (let j = 0; j < cols; j++){
			let CrossZeroTd = document.createElement('td');
			CrossZeroTr.appendChild(CrossZeroTd);
			CrossZeroTd.style = "width:100px;height:100px;border:1px solid #00f"
		}
			CrossZeroTable.appendChild(CrossZeroTr);
	}
	parent.appendChild(CrossZeroTable);
	CrossZeroTable.style = "margin:0px auto"
}

//ПЯТНАШКИ

let FifteenGame = document.querySelector('#Fifteen'); // Создание таблицы для игры Крестики Нолики
FifteenGame.style = "max-width:600px; margin:0px auto"; // Стили для блока с игрой
FifteenTable(FifteenGame, 4, 4);
function FifteenTable(parent, cols, rows){
	let FifteenTable = document.createElement('table');
	for (let i = 0; i < rows; i++){
		let FifteenTr = document.createElement('tr');
		for (let j = 0; j < cols; j++){
			let FifteenTd = document.createElement('td');
			FifteenTr.appendChild(FifteenTd);
			FifteenTd.style = "width:100px;height:100px;border:1px solid #f00"
		}
			FifteenTable.appendChild(FifteenTr);
	}
	parent.appendChild(FifteenTable);
	FifteenTable.style = "margin:0px auto"
}

// ШАХМАТЫ

let СhessGame = document.querySelector('#Сhess'); // Создание таблицы для игры Крестики Нолики
СhessGame.style = "max-width:600px; margin:0px auto"; // Стили для блока с игрой
СhessTable(СhessGame, 8, 8);
function СhessTable(parent, cols, rows){
	let СhessTable = document.createElement('table');
	СhessTable.style = "border-collapse:collapse"
	for (let i = 0; i < rows; i++){
		if (i%2==0){
		let СhessTr = document.createElement('tr');
		for (let j = 0; j < cols; j++){
			if (j%2 == 0){
			let СhessTd = document.createElement('td');
			СhessTr.appendChild(СhessTd);
			СhessTd.style = "width:60px;height:60px;border:1px solid #000;background-color:#000"
		} else {
			let СhessTd = document.createElement('td');
			СhessTr.appendChild(СhessTd);
			СhessTd.style = "width:60px;height:60px;border:1px solid #000"
		}
		}
			СhessTable.appendChild(СhessTr);
		}
		else {
		let СhessTr = document.createElement('tr');
		for (let j = 0; j < cols; j++){
			if (j%2 !== 0){
			let СhessTd = document.createElement('td');
			СhessTr.appendChild(СhessTd);
			СhessTd.style = "width:60px;height:60px;border:1px solid #000;background-color:#000"
		} else {
			let СhessTd = document.createElement('td');
			СhessTr.appendChild(СhessTd);
			СhessTd.style = "width:60px;height:60px;border:1px solid #000"
		}
		}
			СhessTable.appendChild(СhessTr);
	}
	} 


	parent.appendChild(СhessTable);
	СhessTable.style = "margin:0px auto;border-collapse:collapse"
}

