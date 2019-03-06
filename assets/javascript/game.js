$(document).ready(function () {

	// VARIABLES
	var characters = [{
			name: "Yoda",
			hp: 200,
			attack: 7,
			counter: 21,
			index: 0,
			imgUrl: "assets/images/yoda.jpg"
		},
		{
			name: "Obi-Wan Kenobi",
			hp: 135,
			attack: 16,
			counter: 7,
			index: 1,
			imgUrl: "assets/images/obiwan.jpg"
		},
		{
			name: "Anakin Skywalker",
			hp: 140,
			attack: 14,
			counter: 8,
			index: 2,
			imgUrl: "assets/images/anakin.jpg"
		},
		{
			name: "Darth Sidious",
			hp: 190,
			attack: 8,
			counter: 19,
			index: 3,
			imgUrl: "assets/images/darthsidious.jpg"
		}
	];

	var gameOver = false;
	var cSelected = false;

	console.log(characters.length);

	// WHEN IS THE GAME OVER
	if (characters.length === 0) {
		gameOver = true;
	} else {
		for (var i = 0; i < characters.length; i++) {
			var charDiv = $("<div>");
			charDiv.addClass("character");
			charDiv.attr("data-name", characters[i].name);
			charDiv.attr("data-hp", characters[i].hp);
			charDiv.attr("data-attack", characters[i].attack);
			charDiv.attr("data-oAttack", characters[i].attack);
			charDiv.attr("data-cAttack", characters[i].counter);
			charDiv.attr("data-index", characters[i].index);
			charDiv.attr("data-image", characters[i].imgUrl);

			charDiv.html(`<p>${characters[i].name}</p><img class="charImg m-3" src=${characters[i].imgUrl} width="150px">`);
			$("#charDiv").append(charDiv);
		};

		$(".character").on("click", function () {
			if (cSelected) {
				alert("You already chose a character");
			} else {
				var selChar = $(this);
				var index = selChar.data("index");
				selChar.addClass("selected");
				selChar.attr("data-name", selChar.data("name"));
				selChar.attr("data-hp", selChar.data("hp"));
				selChar.attr("data-attack", selChar.data("attack"));
				selChar.attr("data-original", selChar.data("attack"));
				selChar.attr("data-counter", selChar.data("counter"));
				selChar.attr("data-index", selChar.data("index"));
				selChar.attr("data-imageUrl", selChar.data("image"));
				$("#selCharDiv").append(selChar);
				selChar.prepend(`<h2 class="text-left">You Selected:</h2>`);
				$("#stHeading").text("Enemies Available to Attack");
				$("#enDiv").append($("#charDiv"));
				cSelected = true;
				console.log(cSelected);
				characters.splice(index, 1);
				console.log(characters.length);
			};
		});





	}



});