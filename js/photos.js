$(function() {

	function hidePhotos(number){
		var divSelector = $(".photo_hide>#"+number+">div");
		var pSelector = $(".photo_hide>#"+number+">p");
		if(divSelector.attr("class")=="shown"){
			pSelector.text("Group "+number+" (click to show)");
			divSelector.attr("class","hide")
		}
		else{
			pSelector.text("Group "+number+" (click to hide)");
			divSelector.attr("class","shown")
		}
	}

	$(".photo_hide>#1>p").click(function(){
		$(".photo_hide>#1>div").toggle(500,hidePhotos(1));
	});
	$(".photo_hide>#2>p").click(function(){
		$(".photo_hide>#2>div").toggle(500,hidePhotos(2));
	});
	$(".photo_hide>#3>p").click(function(){
		$(".photo_hide>#3>div").toggle(500,hidePhotos(3));
	});
	$(".photo_hide>#4>p").click(function(){
		$(".photo_hide>#4>div").toggle(500,hidePhotos(4));
	});

	$(".photo_hide img").hover(function(){
		$(this).css("border","5px solid yellow");
	},
	function(){
		$(this).css("border","5px solid black");	
	});

	$(".photo_hide p").hover(function(){
		$(this).css({"color":"yellow","text-decoration":"underline"});
	},
	function(){
		$(this).css({"color":"white","text-decoration":"none"});
	});
});