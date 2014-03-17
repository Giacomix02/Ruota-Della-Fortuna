$(document).ready(function() {
	//This var is for block the event for keypress while the player insert the phrase
	var config = 0;
	//Counter for game played
	var game = 0;
	//Var for save the char played
	var char_used = '';
	//On click on the play button
	$('.new-phrase').click(function() {
		//Reset the textbox for the new phrase
		$('.parse-me').val('');
		$('.char-used').val('');
		$('#phrase').modal('show');
		config = 1;
	});
	//Set the focus on the textbox
	$('#phrase').on('shown', function () {
		$('.parse-me').focus();
	})
	$('.go').click(function() {
		$('#phrase').modal('hide');
		$('.tabbellone').html('');
		$('.char-used').text('Lettere giocate:');
		game += 1;
		$('.game').text(game+' Partita');
		var phrase;
		phrase = $('.parse-me').val();
		phrase_ = phrase.replace("'","");
		//Create the letter
		for (var i = 0, len = phrase_.length; i < len; i++) {
			if(phrase[i] != " "){
				$('.tabbellone').append('<span class="'+phrase[i]+' uncheck">_</span>');
			} else {
				$('.tabbellone').append('<span> </span>');
			}
		}
		config = 0;
	});
	$(this).bind('keypress', function(e) {
		if (config == 0) {
			char = String.fromCharCode(e.charCode);
			//if played all letter not generate error
			if ($(".uncheck")[0]){
				$('.'+char).text(char).addClass('check').removeClass('uncheck');
			}
			char_used += ' '+ char;
			$('.char-used').text('Lettere giocate:'+char_used);
			
			e.preventDefault();
		}
	});
});