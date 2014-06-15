// Smooth Scroll
// From http://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links
$(document).ready(function() {
    $('.no-js').hide();

	// Scrolling offset should be same as the height of the MainNavigation element
	$scrollHeight = $("#MainNavigation").outerHeight(true);
	$(".scroll").click(function(event){
		event.preventDefault();
		var offset = ($($(this).attr('href')).offset().top)-$scrollHeight;
		$('html,body').animate({scrollTop:offset}, 500);
	});

	// Process the form
	$("#sendMessage").click(function(event){
		event.preventDefault();
		$('#formSuccess').css('display', 'none');
		var testPattern = function(value, pattern) {   // Private Method
			var regExp = new RegExp(pattern,"");
			return regExp.test(value);
		};
		var error = false,
            senderEmail = $('#senderEmail').val(),
            senderName = $('#senderName').val(),
            message = $('#message').val();

		if (senderEmail === '') {
			error = true;
			$('#senderEmail').css('border-color', 'red');
		} else if (!testPattern(senderEmail,"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])")) {
			error = true;
			$('#senderEmail').css('border-color', 'red');
		} else {
			$('#senderEmail').css('border-color', 'black');
		}
		if (senderName === '') {
			error = true;
			$('#senderName').css('border-color', 'red');
		} else {
			$('#senderName').css('border-color', 'black');
		}
		if (message === '') {
			error = true;
			$('#message').css('border-color', 'red');
		} else {
			$('#message').css('border-color', 'black');
		}
		if (error === true) {
			$('#formError').css('display', 'block');
		} else {
			// Yay! Clear errors and send form!
			$('#formError').css('display', 'none');

			var dataString = 'senderName='+ senderName + '&senderEmail=' + senderEmail + '&message=' + message;
			$.ajax({
				type: "POST",
				url: "email.php",
				data: dataString,
				success: function(data){
					if (data == "success") {
						// Clear the form and show success
						$('#message').val('');
						$('#senderEmail').val('');
						$('#senderName').val('');
						$('#formSuccess').css('display', 'inline');
					} else {
						alert("Looks like there was a problem with the emailer, why don't you try mailing me personally at dougalg@gmail.com ?");
					}
				},
				error: function(){
					alert("Looks like there was a problem with the emailer, why don't you try mailing me personally at dougalg@gmail.com ?");
				}
			});
		}
	});
});