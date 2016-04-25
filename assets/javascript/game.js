
	var game = {
		wins: 0,
		losses: 0,
		personHPs: 0,
		computerHPs: 0,
		

		attack: function(){
			
			
		}
	};

	var characters = [{name: "Sponge Bob", healthPoints: 120, attackPower: 8, counterAttackPower: 10, src: "assets/images/spongeBob.jpg"}, {name: "Darth Vader", healthPoints: 100, attackPower: 10, counterAttackPower: 6, src: "assets/images/darth.jpg"}, {name: "Tigger", healthPoints: 150, attackPower: 12, counterAttackPower: 5, src: "assets/images/tigger.gif"}, {name: "Tweety", healthPoints: 180, attackPower: 9, counterAttackPower: 9, src: "assets/images/tweety.gif"}];


	$(document).ready(function(){

		var numOfClicks = 0;
		var newDiv;
		var newPara;
		var hpPara;
		var charImg;

		for(var i= 0; i < characters.length; i++){

			newDiv = $("<div></div>");
			newDiv.addClass("imgCharacters");
			$('div#characters').append(newDiv);

			newPara = $("<p></p>");
			newPara.attr({"id": "charName",
						  "class": "text-center"});
			newDiv.append(newPara);
			newPara.text(characters[i].name);

			charImg = $("<img>");
			charImg.attr({'src': characters[i].src,
						  'alt': characters[i].name});
			newDiv.append(charImg);



			hpPara = $("<p></p>");
			hpPara.addClass("hps text-center");
			hpPara.text(characters[i].healthPoints);
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

				game.personHPs = 
				
			} else if($(this).parent().attr('id') == 'enemies' && $('#battleField').children("div.imgCharacters").length == 0){

				$('#battleField').append($(this));
				$(this).css({'background-color': '#FFF',
							 'border': '2px solid green'});

			}

		});

		$('#btnAttack').on('click', function(){

			game.attack();
		});

	});




