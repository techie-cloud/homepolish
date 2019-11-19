$('#s2-zip').focusin(function() {
    if (!$('#s2-address').val()) {
        $('#s2-address-err').show()
    } else {
        $('#s2-address-err').hide()
    }
});
$('.close-interior').click(function(){
	$('#fixed-ele-container').toggle();
})
$('.close-renovation').click(function(){
	$('#fixed-ele-container').toggle();
})

