$(document).ready(function() {
	
// VARIABLES
var characters = [{
		name: "Obi-Wan Kenobi",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	},
	{
		name: "Luke Skywalker",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	},
	{
		name: "Darth Vader",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	},
	{
		name: "Kylo Ren",
		hp: 100,
		attackPow: 50,
		cAttackPow: 25,
	}
];
	
	$(".character").on("click", function() {
		$(".character").appendTo("#enemy").addClass("enemy").removeClass("character");
		$(this).appendTo("#selected").removeClass("character").removeClass("enemy");
	});
	
	
});