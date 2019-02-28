$(document).ready(function() {

// VARIABLES


// display pictures of all the characters in HTML
	// <img src="" id="1">
	// <img src="" id="2">
	// <img src="" id="3">
	// <img src="" id="4">

// user clicks which characters they want to fight with 
	// $("#1").on("click", function () {
		
	})
	
		// attach an onclick event to each character
			// if one character is clicked, move the rest to a different section
	// user clicks an opponent, and the clicked opponent is moved to the defender section
	
var characters = [{
		name: "Obi-Wan Kenobi",
		img: "assets/images/obiwan.jpg",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
		isSelected: false,
	},
	{
		name: "Luke Skywalker",
		img: "assets/images/luke.jpg",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
		isSelected: false,
	},
	{
		name: "Darth Vader",
		img: "assets/images/darthvader.jpg",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
		isSelected: false,
	},
	{
		name: "Kylo Ren",
		img: "assets/images/kylo.jpg",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
		isSelected: false,
	}
];

$("#character1").attr("src", characters[0].img);
$("#character2").attr("src", characters[1].img);
$("#character3").attr("src", characters[2].img);
$("#character4").attr("src", characters[3].img);


$("#character1").on("click", function() {
	characters[0].isSelected = true;
	addClasses();
});

	console.log(characters[0].name);
	console.log(characters[0].isSelected);
	console.log(characters[1].name);
	console.log(characters[1].isSelected);
	
	
function addClasses() {	
	if (characters[1].isSelected = false) {
		$("#newDiv").append("<p>enemy</p>");
	};
};

	
	/*characterSelected = true
	if (characterSelected = true) {
		$(this).addClass("hero");
	} else {
		$(characters[1]).addClass("enemy")
	}
});*/
	
/*
$("#character2").on("click", function() {
	$(this).addClass("hero");
	$("#character1, #character3, #character4").addClass("enemy");
		console.log(`You selected ${characters[1].name}`);
});

$("#character3").on("click", function() {
	$(this).addClass("hero");
	$("#character1, #character2, #character4").addClass("enemy");
		console.log(`You selected ${characters[2].name}`);
});

$("#character4").on("click", function() {
	$(this).addClass("hero");
	$("#character1, #character2, #character3").addClass("enemy");
		console.log(`You selected ${characters[3].name}`);
});*/





