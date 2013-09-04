$(function() {
  $(".rotating").scrollable({
    items: ".items",
    easing: "swing",
    circular: true,
    keyboard: false
  }).navigator();

  var api = $(".rotating").data("scrollable"),
      nav = $(".rotating_content > nav a"),
      scrollInterval;

  var inactiveColor = "#b0b0b0";
  var activeColor = "#a0a0a0";
      
  if (nav.length > 0) {
    scrollInterval = setInterval(function() {
      var index = (Math.max(0, api.getIndex()) + 1) % nav.length;
      api.seekTo(index);
      nav.removeClass("active");
      nav.eq(index).addClass("active");
      nav.css({"text-decoration":"none","color":"white","background-color":inactiveColor});
      nav.eq(index).css({"text-decoration":"underline","color":"yellow","background-color":activeColor});
    }, 5000);
  }

  nav.click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    clearInterval(scrollInterval);
    scrollInterval = null;
    var active = $(this);
    nav.removeClass("active");
    active.addClass("active");
    nav.css({"text-decoration":"none","color":"white","background-color":inactiveColor});
    active.css({"text-decoration":"underline","color":"yellow","background-color":activeColor});
    api.seekTo($(this).parent().index());
  });


  $("#aboutMusician").hover(function(){
    $("#aboutMusician").css({"text-decoration":"underline","color":"yellow","background-color":activeColor});
    },
    function(){
      if ($("#aboutMusician").attr("class")!="active") {
        $("#aboutMusician").css({"text-decoration":"none","color":"white","background-color":inactiveColor});
      }
  });  
  $("#aboutComposer").hover(function(){
    $("#aboutComposer").css({"text-decoration":"underline","color":"yellow","background-color":activeColor});
    },
    function(){
      if ($("#aboutComposer").attr("class")!="active") {
        $("#aboutComposer").css({"text-decoration":"none","color":"white","background-color":inactiveColor});
      }
  });
  $("#aboutPhotographer").hover(function(){
    $("#aboutPhotographer").css({"text-decoration":"underline","color":"yellow","background-color":activeColor});
    },
    function(){
      if ($("#aboutPhotographer").attr("class")!="active") {
        $("#aboutPhotographer").css({"text-decoration":"none","color":"white","background-color":inactiveColor});
      }
  }); 
  $("#aboutConductor").hover(function(){
    $("#aboutConductor").css({"text-decoration":"underline","color":"yellow","background-color":activeColor});
    },
    function(){
      if ($("#aboutConductor").attr("class")!="active") {
        $("#aboutConductor").css({"text-decoration":"none","color":"white","background-color":inactiveColor});
      }
  }); 
});
