$(function() {
	var contador;

	 $('.tweet-ingresados').on('click','.likeable', function(e){
	 	e.preventDefault();
	 	 $(this).toggleClass('likeado');
		 var contador = $('.counter').text();
		 var contador = parseInt(contador);
		 console.log(contador += 1)
		 $('.counter').text(contador =+ 1);


	 });


	$('#twitter-personal-form').on('submit', function (event) {
	    event.preventDefault();
	    var textoTwitter = $('#twitter-texto').val();

		$('.tweet-ingresados').append(
			'<div class="tweet-dinamico row">'
				+'<div class="float">'
					+'<button class="likeable" href="#"><i class="fas fa-heart"></i></button>'
					+'<p class="contador">Likes:'
					+'<span class="counter">0</span></p>'
				+'</div>'
				+'<div class="tweet-personal">'
					+'<p class="tweet-personal-txt"> '
					+ textoTwitter
					+'</p>'
				+'</div>'
				+'<button class="eliminar-tweet" href="#"><i class="fas fa-trash-alt"></i> Eliminar tweet</button>'
			+'</div>'
		)
		
	});

	// ELIMINAR tweet

$(".tweet-ingresados").on("click", ".eliminar-tweet", function(event){
		event.stopPropagation();
		$(this).parent().fadeOut();
	});

// corazon LIKE

	 // $('.tweet-dinamico').on('click','.likeable',function(event){
	 //  	$(this).toggleClass('likeado');
		//  });




})