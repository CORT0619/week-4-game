	
	/*var characters = [{name: "Sponge Bob", healthPoints: 120, attackPower: 8, counterAttackPower: 10, src: "assets/images/spongeBob.jpg", index: 0}, {name: "Darth Vader", healthPoints: 100, attackPower: 10, counterAttackPower: 6, src: "assets/images/darth.jpg"}, {name: "Tigger", healthPoints: 150, attackPower: 12, counterAttackPower: 5, src: "assets/images/tigger.gif"}, {name: "Tweety", healthPoints: 180, attackPower: 9, counterAttackPower: 9, src: "assets/images/tweety.gif"}];*/
	
/*var myCharLoc = $('#myCharacter p.hps').data('ind');
var myBaseAttack = characters[myCharLoc].healthPoints;

var compCharLoc = $('#battleField p.hps').data('ind');
var compBaseAttack = characters[compCharLoc].healthPoints;*/


	var game = {
		wins: 0,
		myBaseAttack: 0, 


		/*myCharLoc: $('#myCharacter p.hps').data('ind'),
		myBaseAttack: this.characters[myCharLoc].healthPoints,

		compCharLoc: $('#battleField p.hps').data('ind'),
		compBaseAttack: this.characters[compCharLoc].healthPoints,*/


		characters: [{name: "Sponge Bob", healthPoints: 120, attackPower: 8, counterAttackPower: 10, src: "assets/images/spongeBob.jpg", index: 0}, {name: "Darth Vader", healthPoints: 100, attackPower: 10, counterAttackPower: 6, src: "assets/images/darth.jpg"}, {name: "Tigger", healthPoints: 150, attackPower: 12, counterAttackPower: 5, src: "assets/images/tigger.gif"}, {name: "Tweety", healthPoints: 180, attackPower: 9, counterAttackPower: 9, src: "assets/images/tweety.gif"}], 
		

		attack: function(personCharIndex, computerCharIndex){

			if(this.characters[personCharIndex].healthPoints <= 0){

				$('p#gameStats').html("You've been defeated..GAME OVER!!");

				var newBut = $("<button></button>");
				newBut.text('Restart');
				newBut.attr('id', 'startOver');
				$('p#gameStats').append(newBut);

			} else if(this.characters[computerCharIndex].healthPoints <= 0){

				$('p#gameStats').html("You have defeated " + this.characters[computerCharIndex].name + ", you can choose to fight another enemy.");

				$('#battleField').children("div.imgCharacters").remove();

			} else {

				//update player 1's health
				this.characters[personCharIndex].healthPoints -= this.characters[computerCharIndex].counterAttackPower;
				$('p[data-ind=' + personCharIndex + ']').text(this.characters[personCharIndex].healthPoints);

				//update player 1's attackPower
				this.characters[personCharIndex].attackPower += this.myBaseAttack;


				//update computer's health
				this.characters[computerCharIndex].healthPoints -= this.characters[personCharIndex].attackPower;
				$('p[data-ind=' + computerCharIndex + ']').text(this.characters[computerCharIndex].healthPoints);

				//update computer's attackPower??


				//print stats
				$('p#gameStats').html("You attacked " + this.characters[computerCharIndex].name + " for " + this.characters[personCharIndex].attackPower + " damage.<br />" + this.characters[computerCharIndex].name + " attacked you back for " + this.characters[computerCharIndex].counterAttackPower + " damage.");
			}

	
		},

		restart: function(){
			numOfClicks = 0;
			 this.characters[personCharIndex].healthPoints = this.myBaseAttack;


		}
	};


	$(document).ready(function(){

		var numOfClicks = 0;
		var newDiv;
		var newPara;
		var hpPara;
		var charImg;
		var myCharLoc;
		var myBaseAttack;
		var compCharLoc;
		var compBaseAttack;

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

				myCharLoc = $('#myCharacter p.hps').data('ind');
				myBaseAttack = game.characters[myCharLoc].healthPoints;


			
			} else if($(this).parent().attr('id') == 'enemies' && $('#battleField').children("div.imgCharacters").length == 0){

				$('#battleField').append($(this));
				$(this).css({'background-color': '#FFF',
							 'border': '2px solid green'});
				compCharLoc = $('#battleField p.hps').data('ind');
				compBaseAttack = game.characters[compCharLoc].healthPoints;

			}

		});

		$('#btnAttack').on('click', function(){

			game.attack(myCharLoc, compCharLoc);
		});

		$('startOver').on('click', function(){

			game.restart();
		});

	});




