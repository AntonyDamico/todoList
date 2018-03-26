//Check off specific todos
$("li").click(function(){
	$(this).toggleClass("done");
});

$("span").click(function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});




	e.stopPropagation();
});