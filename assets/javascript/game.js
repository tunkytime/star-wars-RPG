$(document).ready(function () {

	// Use this array to dynamically create buttons on the screen.
	// var charactersOld = ["kylo", "ren", "luke", "vader"];
	// var hp = ["150", "100", "125", "200"];

	var characters = [{
			name: "kylo",
			hp: 120,
			attack: 50,
			counterAttack: 20,
			selected: false,
		},
		{
			name: "ren",
			hp: 100,
			attack: 50,
			counterAttack: 20,
			selected: false,
		},
		{
			name: "luke",
			hp: 130,
			attack: 50,
			counterAttack: 20,
			selected: false,
		},
		{
			name: "vader",
			hp: 200,
			attack: 50,
			counterAttack: 20,
			selected: false,
		},
	];


	// MAJOR TASK #1: DYNAMICALLY CREATE CHARACTERS
	// =================================================================================

	for (var i = 0; i < characters.length; i++) {
		var newDiv = $("<div>");
		newDiv.addClass("character");
		newDiv.attr("data-name", characters[i].name);
		newDiv.attr("data-hp", characters[i].hp);
		newDiv.attr("data-selected", characters[i].selected);
		newDiv.html("<p>" + characters[i].name + "</p>" + "<p>" + characters[i].hp + "</p>");
		$("#characters").append(newDiv);
	};

	$(".character").on("click", function () {

		$("#characters").empty();

		var selectedChar = $(this);
		selectedChar.addClass("selected");
		selectedChar.attr("data-name", $(this).data("name"));
		selectedChar.attr("data-hp", $(this).data("hp"));
		selectedChar.attr("data-selected", $(this).data("selected"));
		$(this).attr("data-selected", "true");
		selectedChar.text($(this).data("name") + $(this).data("hp"));
		$("#selected").append(selectedChar);


		var yourPick = $(this).data("name");
		console.log("Your Character: " + yourPick);

		for (var i = 0; i < characters.length; i++) {
			var newDiv = $("<div>");
			newDiv.addClass("enemies");
			newDiv.attr("data-name", characters[i].name);
			newDiv.attr("data-hp", characters[i].hp);
			newDiv.attr("data-selected", characters[i].selected);
			newDiv.html("<p>" + characters[i].name + "</p>" + "<p>" + characters[i].hp + "</p>");
			$("#enemy-section").append(newDiv);
		};

		$(".enemies").on("click", function () {
			var selectedDef = $(this);
			selectedDef.addClass("defender");
			selectedDef.attr("data-name", $(this).data("name"));
			selectedDef.attr("data-hp", $(this).data("hp"));
			selectedDef.text($(this).data("name") + $(this).data("hp"));
			$("#defender-section").append(selectedDef);

			var currentDefender = $(this).data("name");
			console.log("Defender: " + currentDefender);
		});

		$("#attack-button").on("click", function () {
			alert("attack");
		});

	});
});