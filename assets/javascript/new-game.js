// VARIABLES
var characters = [
	{
		name: "Yoda",
		hp: 200,
		attack: 7,
		counter: 21,
		position: 0,
		imgUrl: "assets/images/yoda.jpg"
	},
	{
		name: "Obi-Wan Kenobi",
		hp: 135,
		attack: 16,
		counter: 7,
		position: 1,
		imgUrl: "assets/images/obiwan.jpg"
	},
	{
		name: "Anakin Skywalker",
		hp: 140,
		attack: 14,
		counter: 8,
		position: 2,
		imgUrl: "assets/images/anakin.jpg"
	},
	{
		name: "Darth Sidious",
		hp: 190,
		attack: 8,
		counter: 19,
		position: 3,
		imgUrl: "assets/images/darthsidious.jpg"
	}
];

var gameOver = false;
var enemyCount = characters.length;
console.log(enemyCount);

// WHEN IS THE GAME OVER?
if (enemyCount === 0) {
	gameOver = true;
} else {
	for (var i = 0; i < characters.length; i++) {
		var charDiv = $("<div>");
		charDiv.addClass("character");
		charDiv.attr("data-name", characters[i].name);
		charDiv.attr("data-hp", characters[i].hp);
		charDiv.attr("data-attack", characters[i].attack);
		charDiv.attr("data-original", characters[i].attack);
		charDiv.attr("data-counter", characters[i].counter);
		charDiv.attr("data-position", characters[i].position);
		charDiv.attr("data-image", characters[i].imgUrl);
		charDiv.html(`<p>${characters[i].name}</p><img src=${characters[i].imgUrl} class="charImg">`);
		$("#characters").append(charDiv);
	}
	
	
	
	
	
	
	
	
	
	
	
}