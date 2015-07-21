
$(function() {
	$('#mainslideshow div .boxcaption, #mainslideshow div img').css('visibility','visible');
    $('#mainslideshow').cycle({
		fx:         'fade',
        timeout: 6000,
		delay: 4000,
		speed:  'slow',
        pager:      '#nav',
        pagerEvent: 'mouseover',
		startingSlide: Math.floor(Math.random()*10),
        fastOnEvent: true
    });
	$('#s4').cycle({ 
    fx:      'fade', 
    timeout: 6000,
		delay: 4000,
		speed:  'fast',
		<!-- startingSlide: Math.floor(Math.random()*6),-->
        fastOnEvent: true
});
});

divs = ['d1','d2','d3','d4','d5','d6','d7','d8'];<!--the number of divs for the random spotlight box-->

function hideDivs() {
for (var i=0; i<divs.length; i++)
document.getElementById(divs[i]).style.display = 'none';

}

function showDiv() {
hideDivs(); //hide them all before we show the next one.
var randomDiv = divs[Math.floor(Math.random()*divs.length)];
var div = document.getElementById(randomDiv).style.display =
'block';

//setTimeout(showDiv,500); //set a delay before showing the next div

}
showDiv();
