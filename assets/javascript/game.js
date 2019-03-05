$(document).ready(function () {

	var characters = [{
			name: "Yoda",
			hp: 210,
			attack: 5,
			counter: 7,
			position: 0,
			imgUrl: "assets/images/yoda.jpg",
		},
		{
			name: "Obi-Wan Kenobi",
			hp: 150,
			attack: 12,
			counter: 8,
			position: 1,
			imgUrl: "assets/images/obiwan.jpg",
		},
		{
			name: "Anakin Skywalker",
			hp: 180,
			attack: 7,
			counter: 20,
			position: 2,
			imgUrl: "assets/images/anakin.jpg",
		},
		{
			name: "Darth Sidious",
			hp: 200,
			attack: 12,
			counter: 25,
			position: 3,
			imgUrl: "assets/images/darthsidious.jpg",
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
	var currentDefenderImage;

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
		newDiv.attr("data-image", characters[i].imgUrl);
		newDiv.html(`<p>${characters[i].name}</p><img src=${characters[i].imgUrl} class="charImg"><p>${characters[i].hp}</p>`);
		$("#characters").append(newDiv);
	};

	// SELECT CHARACTER
	// =================================================================================

	$(".character").on("click", function () {

		$("#characters").empty();
		$("#hidden").css("display", "block");

		selectedChar = $(this);
		selectedChar.addClass("selected");
		selectedChar.attr("data-name", $(this).data("name"));
		selectedChar.attr("data-hp", $(this).data("hp"));
		selectedChar.attr("data-attack", $(this).data("attack"));
		selectedChar.attr("data-counter", $(this).data("counter"));
		selectedChar.attr("data-position", $(this).data("position"));
		selectedChar.attr("data-imageUrl", $(this).data("image"));
		$(this).attr("data-selected", "true");

		var name = $(this).data("name");
		var img = $(this).data("image");
		var hp = $(this).data("hp");

		selectedChar.html(`<p>${name}</p><img src=${img} class="charImg"><p>${hp}</p>`);

		$("#selected").append(selectedChar);

		yourPickName = $(this).data("name");
		yourPickHealth = $(this).data("hp");
		yourPickAttack = $(this).data("attack");
		yourPickPosition = $(this).data("position");
		yourPickImage = $(this).data("image");

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
			newDiv.attr("data-imageUrl", characters[i].imageUrl);
			newDiv.html(`<p>${characters[i].name}</p><img src=${characters[i].imgUrl} class="charImg"><p>${characters[i].hp}</p>`);
			$("#enemy-section").append(newDiv);
		};

		// SELECT DEFENDER
		// =================================================================================

		function resetDefenderCount() {
			defenders = 0;
		};

		$(".enemies").on("click", function () {
			defenders++;
			if (defenders === 1) {
				selectedDef = $(this);
				console.log(this);
				selectedDef.addClass("defender");
				selectedDef.attr("data-name", $(this).data("name"));
				selectedDef.attr("data-hp", $(this).data("hp"));
				selectedDef.attr("data-attack", $(this).data("attack"));
				selectedDef.attr("data-counter", $(this).data("counter"));
				selectedDef.attr("data-position", $(this).data("position"));

				var name = $(this).data("name");
				var hp = $(this).data("hp");

				if ($(this).data("name") === "Anakin Skywalker") {
					img = "assets/images/anakin.jpg";
				}
				if ($(this).data("name") === "Obi-Wan Kenobi") {
					img = "assets/images/obiwan.jpg";
				}
				if ($(this).data("name") === "Yoda") {
					img = "assets/images/yoda.jpg";
				}
				if ($(this).data("name") === "Darth Sidious") {
					img = "assets/images/darthsidious.jpg";
				}

				selectedDef.html(`<p>${name}</p><img src=${img} class="charImg"><p>${hp}</p>`);

				$("#defender-section").append(selectedDef);

				currentDefender = $(this);
				currentDefenderName = $(this).data("name");
				currentDefenderHealth = $(this).data("hp");
				currentDefenderCounter = $(this).data("counter");
				currentDefenderPosition = $(this).data("position");

				if ($(this).data("name") === "Anakin Skywalker") {
					currentDefenderImage = "assets/images/anakin.jpg";
				}
				if ($(this).data("name") === "Obi-Wan Kenobi") {
					currentDefenderImage = "assets/images/obiwan.jpg";
				}
				if ($(this).data("name") === "Yoda") {
					currentDefenderImage = "assets/images/yoda.jpg";
				}
				if ($(this).data("name") === "Darth Sidious") {
					currentDefenderImage = "assets/images/darthsidious.jpg";
				}

				console.log("Health: " + yourPickHealth);
				console.log("Enemy Health: " + currentDefenderHealth);

			} else {
				alert("Oops! You already chose a defender");
			};
		});

		$("#attack-button").on("click", function () {
			yourPickHealth -= currentDefenderCounter;
			currentDefenderHealth -= yourPickAttack;

			console.log("Counter Attack = " + currentDefenderCounter);
			console.log("Your Health = " + yourPickHealth);

			selectedChar.html(`<p>${yourPickName}</p><img src=${yourPickImage} class="charImg"><p>${yourPickHealth}</p>`);

			console.log("Attack Power = " + yourPickAttack);
			console.log("Defender Health = " + currentDefenderHealth);

			selectedDef.html(`<p>${currentDefenderName}</p><img src=${currentDefenderImage} class="charImg"><p>${currentDefenderHealth}</p>`);

			$("#damage-message").html(`<p>You attacked ${currentDefenderName} for ${yourPickAttack} damage points</p><p>${currentDefenderName} attacked you for ${currentDefenderCounter} damage points</p>`);

			yourPickAttack = yourPickAttack + yourPickAttack;

			console.log("=======================");

			if (currentDefenderHealth <= 0) {
				$(".defender").remove();
				$("#damage-message").html(`<p>You defeated ${currentDefenderName}.</p>`);
				resetDefenderCount();
			};
			if (yourPickHealth <= 0) {
				$(".selected").remove();
				$("#message").text("You lost!");
				$("#game-over").html(`<button id ='restart-button' class='btn btn-default btn-block m-1'>You Lose!Play Again ?</button>`);

				$("#restart-button").on("click", function () {
					location.reload();
				});

			}
		});
	});
});