	
	/*var characters = [{name: "Sponge Bob", healthPoints: 120, attackPower: 8, counterAttackPower: 10, src: "assets/images/spongeBob.jpg", index: 0}, {name: "Darth Vader", healthPoints: 100, attackPower: 10, counterAttackPower: 6, src: "assets/images/darth.jpg"}, {name: "Tigger", healthPoints: 150, attackPower: 12, counterAttackPower: 5, src: "assets/images/tigger.gif"}, {name: "Tweety", healthPoints: 180, attackPower: 9, counterAttackPower: 9, src: "assets/images/tweety.gif"}];*/
	
/*var myCharLoc = $('#myCharacter p.hps').data('ind');
var myBaseAttack = characters[myCharLoc].healthPoints;

var compCharLoc = $('#battleField p.hps').data('ind');
var compBaseAttack = characters[compCharLoc].healthPoints;*/


	var game = {
		wins: 0,
		personHPs: 0,
		computerHPs: 0,

		/*myCharLoc: $('#myCharacter p.hps').data('ind'),
		myBaseAttack: this.characters[myCharLoc].healthPoints,

		compCharLoc: $('#battleField p.hps').data('ind'),
		compBaseAttack: this.characters[compCharLoc].healthPoints,*/


		characters: [{name: "Sponge Bob", healthPoints: 120, attackPower: 8, counterAttackPower: 10, src: "assets/images/spongeBob.jpg", index: 0}, {name: "Darth Vader", healthPoints: 100, attackPower: 10, counterAttackPower: 6, src: "assets/images/darth.jpg"}, {name: "Tigger", healthPoints: 150, attackPower: 12, counterAttackPower: 5, src: "assets/images/tigger.gif"}, {name: "Tweety", healthPoints: 180, attackPower: 9, counterAttackPower: 9, src: "assets/images/tweety.gif"}], 
		

		attack: function(){
			
			if(this.characters[myCharLoc].healthPoints <= 0){

				$('p#gameStats').html("You've been defeated..GAME OVER!!");

				var newBut = $("<button></button>");
				newBut.text('Restart');
				newBut.attr('id', 'startOver');
				$('p#gameStats').append(newBut);

			} else if(this.characters[compCharLoc].healthPoints <= 0){

				$('p#gameStats').html("You have defeated " + this.characters[compCharLoc].name + ", you can choose to fight another enemy.");

				$('#battleField').children("div.imgCharacters").remove();

			} else {

				//update player 1's health
				this.characters[myCharLoc].healthPoints -= this.characters[compCharLoc].counterAttackPower;
				$('p[data-ind=' + myCharLoc + ']').text(this.characters[myCharLoc].healthPoints);

				//update player 1's attackPower
				this.characters[myCharLoc].healthPoints += myBaseAttack;


				//update computer's health
				this.characters[compCharLoc].healthPoints -= this.characters[myCharLoc].attackPower;
				$('p[data-ind=' + compCharLoc + ']').text(this.characters[compCharLoc].healthPoints);

				//update computer's attackPower??

				//print stats
				$('p#gameStats').html("You attacked " + this.characters[compCharLoc].name + " for " + this.characters[myCharLoc].attackPower + " damage.<br />" + characters[compCharLoc].name + " attacked you back for " + this.characters[compCharLoc].counterAttackPower + " damage.");
			}


			
		},

		restart: function(){

		}
	};


	$(document).ready(function(){

		var numOfClicks = 0;
		var newDiv;
		var newPara;
		var hpPara;
		var charImg;

		for(var i= 0; i < game.characters.length; i++){

			newDiv = $("<div></div>");
			newDiv.addClass("imgCharacters");
			$('div#characters').append(newDiv);

			newPara = $("<p></p>");
			newPara.attr({"id": "charName",
						  "class": "text-center"});
			newDiv.append(newPara);
			newPara.text(game.characters[i].name);

			charImg = $("<img>");
			charImg.attr({'src': game.characters[i].src,
						  'alt': game.characters[i].name});
			newDiv.append(charImg);



			hpPara = $("<p></p>");
			hpPara.addClass("hps text-center");
			hpPara.attr('data-ind', i);
			hpPara.text(game.characters[i].healthPoints);
			newDiv.append(hpPara);
		}

		

		$('.imgCharacters').on('click', function(){

			numOfClicks++;

			if(numOfClicks == 1){

				$('#enemies').append($('.imgCharacters'));
				$('.imgCharacters').css('background-color', '#FF0000');
				$(this).css({'background-color': '#FFF',
							 'border': '2px solid green'});
				$('#myCharacter').append($(this));

			
			} else if($(this).parent().attr('id') == 'enemies' && $('#battleField').children("div.imgCharacters").length == 0){

				$('#battleField').append($(this));
				$(this).css({'background-color': '#FFF',
							 'border': '2px solid green'});

			}

		});

		$('#btnAttack').on('click', function(){

			game.attack();
		});

		$('startOver').on('click', function(){

			game.restart();
		});

	});




