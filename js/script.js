// $(function() {

// 	var span = $('span');

// 	span.each(function(index, element) {
// 		if(index % 2 == 0) {
// 			$(element).css('color', 'red');
// 		}
// 	});
// });

$(function() {
	$('span:even').css('color', 'red');
});
