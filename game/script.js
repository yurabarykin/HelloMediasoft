document.body.style = "text-align:center;text-transform:uppercase"; // Стили для всех заголовков 

//КРЕСТИКИ НОЛИКИ

let CrossZeroGame = document.querySelector('#CrossZero'); // Создание поля для игры Крестики Нолики
CrossZeroGame.style = "max-width:450px; margin:0px auto; background-color: #f00;display: flex;flex-wrap: wrap"; // Стили для блока с игрой

	for (let i=0; i<9; i++){
		document.getElementById('CrossZero').innerHTML+='<div class="block"></div>';
	}

	let GameCourse = 0;
	document.getElementById('CrossZero').onclick = function(event){
		if (event.target.className == 'block'){
			if ( GameCourse%2 === 0) {
				event.target.classList.add('cross');
			} else	{
				event.target.classList.add('zero');
			}
			GameCourse++;
			Winner();
		}
	} 

function Winner(){
	var AllBlock = document.getElementsByClassName('block');
	if (
	AllBlock[0].className == 'block cross' && AllBlock[1].className == 'block cross' && AllBlock[2].className == 'block cross' || 
	AllBlock[3].className == 'block cross' && AllBlock[4].className == 'block cross' && AllBlock[5].className == 'block cross' ||
	AllBlock[6].className == 'block cross' && AllBlock[7].className == 'block cross' && AllBlock[8].className == 'block cross' ||
	AllBlock[0].className == 'block cross' && AllBlock[3].className == 'block cross' && AllBlock[6].className == 'block cross' ||
	AllBlock[1].className == 'block cross' && AllBlock[4].className == 'block cross' && AllBlock[7].className == 'block cross' ||
	AllBlock[2].className == 'block cross' && AllBlock[5].className == 'block cross' && AllBlock[8].className == 'block cross' ||
	AllBlock[0].className == 'block cross' && AllBlock[4].className == 'block cross' && AllBlock[8].className == 'block cross' ||
	AllBlock[2].className == 'block cross' && AllBlock[4].className == 'block cross' && AllBlock[6].className == 'block cross'
	) {
		alert('Победа крестиков!');
	} if (
		AllBlock[0].className == 'block zero' && AllBlock[1].className == 'block zero' && AllBlock[2].className == 'block zero' || 
		AllBlock[3].className == 'block zero' && AllBlock[4].className == 'block zero' && AllBlock[5].className == 'block zero' ||
		AllBlock[6].className == 'block zero' && AllBlock[7].className == 'block zero' && AllBlock[8].className == 'block zero' ||
		AllBlock[0].className == 'block zero' && AllBlock[3].className == 'block zero' && AllBlock[6].className == 'block zero' ||
		AllBlock[1].className == 'block zero' && AllBlock[4].className == 'block zero' && AllBlock[7].className == 'block zero' ||
		AllBlock[2].className == 'block zero' && AllBlock[5].className == 'block zero' && AllBlock[8].className == 'block zero' ||
		AllBlock[0].className == 'block zero' && AllBlock[4].className == 'block zero' && AllBlock[8].className == 'block zero' ||
		AllBlock[2].className == 'block zero' && AllBlock[4].className == 'block zero' && AllBlock[6].className == 'block zero'
	) {
		alert('Победа ноликов!');
	} 
	
	
}	

	