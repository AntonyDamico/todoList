//Check off specific todos as done
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Delete the todo selected
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//Add a new todo pressing enter
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var todo = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todo + "</li>");
		$(this).val("");
	}
});


$(".fa-plus").click(function(){
	$('input[type="text"]').fadeToggle();
})


