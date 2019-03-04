$(document).ready(function () {

	var characters = [
		{
			name: "kylo",
			hp: 120,
			attack: 150,
			counter: 20,
			selected: false,
			position: 0,
		},
		{
			name: "ren",
			hp: 150,
			attack: 50,
			counter: 20,
			selected: false,
			position: 1,
		},
		{
			name: "luke",
			hp: 200,
			attack: 50,
			counter: 20,
			selected: false,
			position: 2,
		},
		{
			name: "vader",
			hp: 200,
			attack: 50,
			counter: 20,
			selected: false,
			position: 3,
		},
	];
	
	var ememies = [];
	
	var yourPickPosition;
	var yourPickName;
	var yourPickAttack;
	var yourPickHealth;

	var currentDefender;
	var currentDefenderName;
	var currentDefenderHealth;
	var currentDefenderCounter;
	
	console.log(characters);
		
	// DYNAMICALLY CREATE CHARACTERS
	// =================================================================================

	for (var i = 0; i < characters.length; i++) {
		var newDiv = $("<div>");
		newDiv.addClass("character");
		newDiv.attr("data-name", characters[i].name);
		newDiv.attr("data-hp", characters[i].hp);
		newDiv.attr("data-attack", characters[i].attack);
		newDiv.attr("data-counter", characters[i].counter);
		newDiv.attr("data-selected", characters[i].selected);
		newDiv.attr("data-position", characters[i].position);
		newDiv.html("<p>" + characters[i].name + "</p>" + "<p>" + characters[i].hp + "</p>");
		$("#characters").append(newDiv);
	};	
	
	// SELECT CHARACTER
	// =================================================================================

	$(".character").on("click", function () {

		$("#characters").empty();

		var selectedChar = $(this);
		selectedChar.addClass("selected");
		selectedChar.attr("data-name", $(this).data("name"));
		selectedChar.attr("data-hp", $(this).data("hp"));
		selectedChar.attr("data-attack", $(this).data("attack"));
		selectedChar.attr("data-counter", $(this).data("counter"));
		selectedChar.attr("data-selected", $(this).data("selected"));
		selectedChar.attr("data-position", $(this).data("position"));
		$(this).attr("data-selected", "true");
		selectedChar.text($(this).data("name") + $(this).data("hp"));
		$("#selected").append(selectedChar);

		yourPickName = $(this).data("name");
		yourPickHealth = $(this).data("hp");
		yourPickAttack = $(this).data("attack");	
		yourPickPosition = $(this).data("position");	
		
		characters.splice(yourPickPosition, 1);
		
		console.log(characters);
		
	// MOVE OTHER CHARACTERS TO ENEMY SECTION
	// =================================================================================

		for (var i = 0; i < characters.length; i++) {
			var newDiv = $("<div>");
			newDiv.addClass("enemies");
			newDiv.attr("data-name", characters[i].name);
			newDiv.attr("data-hp", characters[i].hp);
			newDiv.attr("data-attack", characters[i].attack);
			newDiv.attr("data-counter", characters[i].counter);
			newDiv.attr("data-selected", characters[i].selected);
			newDiv.attr("data-position", characters[i].position);
			newDiv.html("<p>" + characters[i].name + "</p>" + "<p>" + characters[i].hp + "</p>");
			$("#enemy-section").append(newDiv);
		}
		
	// SELECT DEFENDER
	// =================================================================================
			
		$(".enemies").on("click", function () {
			var selectedDef = $(this);
			selectedDef.addClass("defender");
			selectedDef.attr("data-name", $(this).data("name"));
			selectedDef.attr("data-hp", $(this).data("hp"));
			selectedDef.attr("data-attack", $(this).data("attack"));
			selectedDef.attr("data-counter", $(this).data("counter"));
			selectedDef.attr("data-position", $(this).data("position"));
			selectedDef.text($(this).data("name") + $(this).data("hp"));
			$("#defender-section").append(selectedDef);
			
			currentDefender = $(this);
			currentDefenderName = $(this).data("name");
			currentDefenderHealth = $(this).data("hp");
			currentDefenderCounter = $(this).data("counter");
			currentDefenderPosition = $(this).data("position");
			
			console.log(currentDefenderPosition);
			
			console.log(characters);

			attack();

			function attack() {
				$("#attack-button").on("click", function () {
					if (currentDefenderHealth <= 0) {
						characters.splice(currentDefenderPosition, 1);
						$(".defender").remove();
					} 
					else if (yourPickHealth <= 0) {
						$(".selected").remove();
					}
					else if (characters.length = 0) {
						alert("You win");
					} else {
						console.log("Your Pick Health: " + yourPickHealth);
						console.log("Your Pick Attack: " + yourPickAttack);
						console.log("Defender Name: " + currentDefenderName);
						console.log("Defender Health: " + currentDefenderHealth);
						console.log("Defender Counter: " + currentDefenderCounter);
						console.log("Your health after attack: " + (yourPickHealth -= currentDefenderCounter));
						console.log("Defender health after attack: " + (currentDefenderHealth -= yourPickAttack));
					}
				});
			};
		});
	});
					
	// RELOAD PAGE TO PLAY AGAIN
	$(".restart").click(function () {
		location.reload();
	});
	
});