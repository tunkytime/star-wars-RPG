$(document).ready(function() {
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
  var enemyCount = 3;

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
    newDiv.attr("data-image", characters[i].imgUrl);
    newDiv.html(`<p>${characters[i].name}</p><img src=${characters[i].imgUrl} class="charImg">`);
    $("#characters").append(newDiv);
  }

  // SELECT CHARACTER
  // ================================================================================= 
  
  $(".character").on("click", function() {
	$(".hide-this").remove();
    $("#characters").empty();
    $("#hidden").css("display", "block");

    selectedChar = $(this);
    selectedChar.addClass("selected");
    selectedChar.attr("data-name", $(this).data("name"));
    selectedChar.attr("data-hp", $(this).data("hp"));
    selectedChar.attr("data-attack", $(this).data("attack"));
    selectedChar.attr("data-original", $(this).data("attack"));
    selectedChar.attr("data-counter", $(this).data("counter"));
    selectedChar.attr("data-position", $(this).data("position"));
    selectedChar.attr("data-imageUrl", $(this).data("image"));
    $(this).attr("data-selected", "true");

    var name = $(this).data("name");
    var img = $(this).data("image");
    var hp = $(this).data("hp");

    selectedChar.html(
      `<p>${name}</p><img src=${img} class="charImg"><p>Health: ${hp}</p>`
    );

    $("#selected").append(selectedChar);

    yourPickName = $(this).data("name");
    yourPickHealth = $(this).data("hp");
    yourPickAttack = $(this).data("attack");
	originalAttack = $(this).data("attack");
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
      newDiv.html(
        `<p>${characters[i].name}</p><img src=${
          characters[i].imgUrl
        } class="charImg"><p>Health: ${characters[i].hp}</p>`
      );
      $("#enemy-section").append(newDiv);
    }

    // SELECT DEFENDER
    // =================================================================================

    function resetDefenderCount() {
      defenders = 0;
    }

    $(".enemies").on("click", function() {
      defenders++;
	  enemyCount--;
      if (defenders === 1) {
        selectedDef = $(this);
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

        selectedDef.html(
          `<p>${name}</p><img src=${img} class="charImg"><p>Health: ${hp}</p>`
        );

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

      } else {
        alert("Oops! You already chose a defender");
      }
    });

    $("#attack-button").on("click", function() {
     if (defenders > 0) {
      yourPickHealth -= currentDefenderCounter;
      currentDefenderHealth -= yourPickAttack;

      selectedChar.html(
        `<p>${yourPickName}</p><img src=${yourPickImage} class="charImg"><p>Health: ${yourPickHealth}</p>`
      );

      selectedDef.html(
        `<p>${currentDefenderName}</p><img src=${currentDefenderImage} class="charImg"><p>Health: ${currentDefenderHealth}</p>`
      );

      $("#damage-message").html(
        `<p>You attacked ${currentDefenderName} for ${yourPickAttack} damage points</p><p>${currentDefenderName} attacked you for ${currentDefenderCounter} damage points</p>`
      );

      yourPickAttack = yourPickAttack + originalAttack;

	 } else { 
		alert("Choose a defender");
	 };

      if (currentDefenderHealth <= 0) {
        $(".defender").remove();
		defenders--;
		  if (enemyCount === 0 && defenders === 0) {
			$("#damage-message").html(
          `<p>You defeated all the enemies.</p>`);
			$("#game-over").html(
          `<button id='restart-button' class='btn btn-default btn-block m-1'>Play Again?</button>`
        );
        $("#restart-button").on("click", function() {
          location.reload();
        })} else {
        $("#damage-message").html(
          `<p>You defeated ${currentDefenderName}.</p>`)
		  };

        resetDefenderCount();
      };
      if (yourPickHealth <= 0) {
        $(".selected").remove();
        $("#message").text("You lost!");
        $("#game-over").html(
          `<button id='restart-button' class='btn btn-default btn-block m-1'>You Lose! Play Again?</button>`
        );
        $("#restart-button").on("click", function() {
          location.reload();
        });
      };
    });
  });
});

