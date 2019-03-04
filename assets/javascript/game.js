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
				
	var yourPickPosition;
	var yourPickName;
	var yourPickAttack;
	var yourPickHealth;
	var selectedChar;
	var selectedDef;

	var currentDefender;
	var currentDefenderName;
	var currentDefenderHealth;
	var currentDefenderCounter;
	
	var defenders = 0;
			
	// DYNAMICALLY CREATE CHARACTERS
	// =================================================================================

	for (var i = 0; i < characters.length; i++) {
		var newDiv = $("<div>");
		newDiv.addClass("character");
		newDiv.attr("data-name", characters[i].name);
		newDiv.attr("data-hp", characters[i].hp);
		newDiv.attr("data-attack", characters[i].attack);
		newDiv.attr("data-counter", characters[i].counter);
		newDiv.attr("data-position", characters[i].position);
		newDiv.html("<p>" + characters[i].name + "</p>" + "<p>" + characters[i].hp + "</p>");
		$("#characters").append(newDiv);
	};	
	
	// SELECT CHARACTER
	// =================================================================================

	$(".character").on("click", function () {

		$("#characters").empty();

		selectedChar = $(this);
		selectedChar.addClass("selected");
		selectedChar.attr("data-name", $(this).data("name"));
		selectedChar.attr("data-hp", $(this).data("hp"));
		selectedChar.attr("data-attack", $(this).data("attack"));
		selectedChar.attr("data-counter", $(this).data("counter"));
		selectedChar.attr("data-position", $(this).data("position"));
		$(this).attr("data-selected", "true");
		
		var name = $(this).data("name");
		var hp = $(this).data("hp");

		selectedChar.html("<p>" + name + "</p>" + "<p>" + hp + "</p>");
		
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
			newDiv.attr("data-position", characters[i].position);
			newDiv.html("<p>" + characters[i].name + "</p>" + "<p>" + characters[i].hp + "</p>");
			$("#enemy-section").append(newDiv);
		};
		
	// SELECT DEFENDER
	// =================================================================================
	
	
			function resetDefenderCount () {
				defenders = 0;
			};
	
			$(".enemies").on("click", function () {
				defenders++;	
				if(defenders === 1) {
					selectedDef = $(this);
					selectedDef.addClass("defender");
					selectedDef.attr("data-name", $(this).data("name"));
					selectedDef.attr("data-hp", $(this).data("hp"));
					selectedDef.attr("data-attack", $(this).data("attack"));
					selectedDef.attr("data-counter", $(this).data("counter"));
					selectedDef.attr("data-position", $(this).data("position"));
								
					var name = $(this).data("name");
					var hp = $(this).data("hp");
					
					selectedDef.html("<p>" + name + "</p>" + "<p>" + hp + "</p>");
				
					$("#defender-section").append(selectedDef);
					
					currentDefender = $(this);
					currentDefenderName = $(this).data("name");
					currentDefenderHealth = $(this).data("hp");
					currentDefenderCounter = $(this).data("counter");
					currentDefenderPosition = $(this).data("position");
					
					console.log("Health: " + yourPickHealth);
					console.log("Enemy Health: " + currentDefenderHealth);

				} else {
				alert("you already chose a defender");
			};
		});

			$("#attack-button").on("click", function () {
				if(defenders === 1) {
					yourPickHealth -= currentDefenderCounter;
					currentDefenderHealth -= yourPickAttack;
					
					console.log("Counter Attack = " + currentDefenderCounter);
					console.log("Your Health = " + yourPickHealth);
					
					selectedChar.html("<p>" + yourPickName + "</p>" + "<p>" + yourPickHealth + "</p>");
					
					console.log("Attack Power = " + yourPickAttack);
					console.log("Defender Health = " + currentDefenderHealth);
					
					selectedDef.html("<p>" + currentDefenderName + "</p>" + "<p>" + currentDefenderHealth + "</p>");
					$("#damage-message").html(`
						<p>You attacked ${currentDefenderName} for ${yourPickAttack} damage points</p>
						<p>${currentDefenderName} attacked you for ${currentDefenderCounter} damage points</p>
						
						
						`);
					
					yourPickAttack = yourPickAttack + yourPickAttack;
					
					console.log("=======================");
					
					if (currentDefenderHealth <= 0) {
						$(".defender").remove();
						$("#damage-message").html(`
						
						<p>You defeated ${currentDefenderName}.</p>					
						
						`)
						resetDefenderCount();
					};	
					if (yourPickHealth <= 0) {
						$(".selected").remove();
						$("#message").text("You lost!");
						$("#game-over").html(`
							<button id='restart-button' class='btn btn-secondary btn-block m-1'>You Lose! Play Again?</button>
							`);
						
							$("#restart-button").on("click", function () {
								location.reload();
							});
						}
				} else {
					alert("you need to choose a defender");
				}
			});
		});
	});
