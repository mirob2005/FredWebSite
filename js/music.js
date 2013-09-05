$(function() {

	$(".song_list li").hover(function(){
		$(this).css({"color":"yellow","text-decoration":"underline","cursor":"pointer"});
	},
	function(){
		$(this).css({"color":"black","text-decoration":"none"});
	});

	$(".song_list li").click(function(){
		var songSource = $(".song_back>audio>source:first");
		var audio = $(".song_back>audio");
		songSource.attr("src","media/"+$(this).text()+".ogg");
		songSource.next().attr("src","media/"+$(this).text()+".mp3");
		songSource.next().attr("src","media/"+$(this).text()+".wav");
		audio.load();

		$(".song_back>p").text($(this).text()+" (now playing)");
	});
});