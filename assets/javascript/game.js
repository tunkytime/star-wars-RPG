$(document).ready(function () {

	var characters = [
		{
			name: "ren",
			hp: 100,
			attack: 5,
			counter: 10,
			position: 0,
		},
		{
			name: "luke",
			hp: 120,
			attack: 10,
			counter: 20,
			position: 1,
		},
		{
			name: "kylo",
			hp: 150,
			attack: 15,
			counter: 30,
			position: 2,
		},		
		{
			name: "vader",
			hp: 200,
			attack: 20,
			counter: 40,
			position: 3,
		},
	];
	
	var ememies = [];
	
	var yourPickPosition;
	var yourPickName;
	var originalAttack;
	var yourPickAttack;
	var yourPickHealth;

	var currentDefender;
	var currentDefenderName;
	var currentDefenderHealth;
	var currentDefenderCounter;
			
	// DYNAMICALLY CREATE CHARACTERS
	// =================================================================================

	for (var i = 0; i < characters.length; i++) {
		var newDiv = $("<div>");
		newDiv.addClass("character");
		newDiv.attr("data-name", characters[i].name);
		newDiv.attr("data-hp", characters[i].hp);
		newDiv.attr("data-attack", characters[i].attack);
		newDiv.attr("data-original", characters[i].attack);
		newDiv.attr("data-counter", characters[i].counter);
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
		selectedChar.attr("data-original", $(this).data("attack"));
		selectedChar.attr("data-counter", $(this).data("counter"));
		selectedChar.attr("data-position", $(this).data("position"));
		$(this).attr("data-selected", "true");
		selectedChar.text($(this).data("name") + $(this).data("hp"));
		$("#selected").append(selectedChar);

		yourPickName = $(this).data("name");
		yourPickHealth = $(this).data("hp");
		originalAttack = $(this).data("original")
		yourPickAttack = $(this).data("attack");	
		yourPickPosition = $(this).data("position");	
		
		characters.splice(yourPickPosition, 1);
				
	// MOVE OTHER CHARACTERS TO ENEMY SECTION
	// =================================================================================

		for (var i = 0; i < characters.length; i++) {
			var newDiv = $("<div>");
			newDiv.addClass("enemies");
			newDiv.attr("data-name", characters[i].name);
			newDiv.attr("data-hp", characters[i].hp);
			newDiv.attr("data-attack", characters[i].attack);
			newDiv.attr("data-original", characters[i].attack);
			newDiv.attr("data-counter", characters[i].counter);
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
			selectedDef.attr("data-original", $(this).data("attack"));
			selectedDef.attr("data-counter", $(this).data("counter"));
			selectedDef.attr("data-position", $(this).data("position"));
			selectedDef.text($(this).data("name") + $(this).data("hp"));
			$("#defender-section").append(selectedDef);
			
			currentDefender = $(this);
			currentDefenderName = $(this).data("name");
			currentDefenderHealth = $(this).data("hp");
			currentDefenderCounter = $(this).data("counter");
			currentDefenderPosition = $(this).data("position");
								
			console.log("Health: " + yourPickHealth);
			console.log("Enemy Health: " + currentDefenderHealth);
		});

			$("#attack-button").on("click", function () {					
				if (characters.length = 0) {
					alert("You win");
				} else {
					
					yourPickHealth -= currentDefenderCounter;
					currentDefenderHealth -= yourPickAttack;
					
					console.log("Counter Attack = " + currentDefenderCounter);
					console.log("Your Health = " + yourPickHealth);
					console.log("Attack Power = " + yourPickAttack);
					console.log("Defender Health = " + currentDefenderHealth);
					
					yourPickAttack = yourPickAttack + yourPickAttack;
					
					console.log("=======================");
					
					if (currentDefenderHealth <= 0) {
						characters.splice(currentDefenderPosition, 1);
						$(".defender").remove();
					};	
					if (yourPickHealth <= 0) {
						$(".selected").remove();
					};
				};
			});
		});
	});
					
	// RELOAD PAGE TO PLAY AGAIN
	$(".restart").click(function () {
		location.reload();
	});