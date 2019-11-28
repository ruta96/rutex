var tot;
(function () {
    function id(v) {return document.getElementById(v); }
    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0;
        tot = img.length;

        function imgLoaded() {
            c += 1;
            var perc = ((100 / tot * c) << 0) + "%";
            prog.style.width = perc;
            stat.innerHTML = "Loading " + perc;
            if (c === tot) {return doneLoading(); }
        }
        function doneLoading() {
            ovrl.style.opacity = 0;
            setTimeout(function () {ovrl.style.display = "none"; }, 1200);
        }
        for (var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());
$(document).on("scroll", function(){
		if
        ($(window).width()>767 && $(document).scrollTop() > 1)
        {
		  $("#banner").addClass("shrink");
		}
		else
        {
			$("#banner").removeClass("shrink");
		}
	});

$(function(){$.scrollify({
            section : ".scroll-panel",});
});

$(".scroll-down").click(function(){
$.scrollify.next();
});
        
$("#goup").click(function(){
$.scrollify.move("#home");
});

$("#offer").click(function(){
$.scrollify.move("#info-panel");
});

$(".navbar-brand").click(function(){
$.scrollify.move("#home");
});
        
$("#gohome").click(function(){
$.scrollify.move("#home");
});

$(".cont").click(function(){
$.scrollify.move("#kontakt");
});
