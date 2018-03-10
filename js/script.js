//Pick every second span
// $(function() {

// 	var span = $('span');

// 	span.each(function(index, element) {
// 		if(index % 2 == 0) {
// 			$(element).css('color', 'red');
// 		}
// 	});
// });


//Pick every second span
$(function() {
	$('span:even').css('color', 'red');
});

//Add buttons to each parahraph
$(function() {

	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		
		var button = '<button class="btn" data-tmp=" ' + index + ' ">Click me</button>';
		$(element).append(button);
	
	});
});