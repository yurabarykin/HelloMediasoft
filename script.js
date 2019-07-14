
let middleAge = 0;
let numberDirectors = 0;

films.forEach(function(film){
	 if (film.director.oscarsCount === 0) {
	 	middleAge = film.actors.reduce(function(age,actor){
	 	numberDirectors = numberDirectors + 1;
	 	return age + actor.age;

	 }, middleAge);

	 }
});
console.log('Средний возраст актеров - ' + Math.round(middleAge/numberDirectors) + ' лет')

console.log(" ")

const actorName = [];
function Tom(actor) {
  return actor.name === 'Tom Hanks';
}
let actorNames = "";
let actorObject = "";
let namesObject = "";

films.forEach(function(names){
	if (names.creationYear > 1995 && names.actors.some(Tom)){
	actorNames = actorName.concat(names.actors);
	for (let key in names.actors) {
		actorObject = names.actors[key];
		namesObject = actorObject.name;
		if (namesObject != 'Tom Hanks') {
		actorName.push(namesObject);
		};
	}
};
});
const actorNameLine = actorName.join('\n');
console.log(actorNameLine);

console.log(" ")

let budget = 0;
let currency = ' ';
let currencyDel = "";
let budgetArray = [];
let budgetSum = 0;

films.forEach(function(money) {
	if (money.director.age < 70 && money.actors.some(Tom) == false) {
		currency = money.budget.indexOf("$");
		currency = currency + 1
		currencyDel = money.budget.substring(currency);
		budgetArray = currencyDel.split(' ');
		budgetSum = budgetArray.join('');
		budget = budget + +budgetSum;
	}
	});
console.log('Общий бюджет фильмов ' + budget);
