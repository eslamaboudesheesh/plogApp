function myFunction(num) {

    var popup = document.getElementById("myPopup"+num);
    popup.classList.toggle("show");
  }

  $("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});