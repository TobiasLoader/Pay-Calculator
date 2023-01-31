$('body').removeClass('hide');

function focusInput(e,inputSelectorId){
	let input = $('#'+inputSelectorId);
	input.focus();
	if (e.target.id!=inputSelectorId){
		let v = input.val();
		input.val('');
		input.val(parseFloat(v));
	}
}

$('#minutes-container').click(function(e){focusInput(e,'minutes-worked');});
$('#hour-container').click(function(e){focusInput(e,'per-hour');});

function restrictInput(e) {
   let value = String.fromCharCode(e.which);
   let pattern = new RegExp(/[0-9.]/i);
   return pattern.test(value);
}

$('#minutes-worked').bind('keypress', restrictInput);
$('#per-hour').bind('keypress', restrictInput);


$(document).on('keypress',function(e) {
	if(e.which == 13) {
		$('#minutes-worked').blur();
		$('#per-hour').blur();
	}
});

$('body').on('mousemove', function(e){
	if (e.pageX<window.innerWidth/2){
		$('body').addClass('mouseLeft');
		$('body').removeClass('mouseRight');
	} else {
		$('body').addClass('mouseRight');
		$('body').removeClass('mouseLeft');
	}
});
$('#top').on('mouseleave', function(e){
	$('body').removeClass('mouseRight');
	$('body').removeClass('mouseLeft');
});

function updatePay(){
	$('#pay').text('£'+($('#minutes-worked').val()*$('#per-hour').val()/60).toFixed(2))
}

function updateInputWidth(inputContainer){
	$(inputContainer+' .input-span').text($(inputContainer+' input').val());
	$(inputContainer+' input').width($(inputContainer+' .input-span').width()+10);
}

function jqueryUpdateNumbers(inputContainer){
	return $(function() {
	  updateInputWidth(inputContainer);
	  updatePay();
	}).on('input', function() {
	  updateInputWidth(inputContainer);
	  updatePay();
	});
}

jqueryUpdateNumbers('#minutes-container');
jqueryUpdateNumbers('#hour-container');

// 
// let hourlyRate;
// let minutesWorked;
// let pay;
// 
// function setup() {
//   	W = window.innerWidth;
//   	H = window.innerHeight;
//   	canvas = createCanvas(W, H);
//   	angleMode(DEGREES);
//   	textAlign(CENTER,CENTER);
//   	hourlyRate = 0;
//   	minutesWorked = 0;
//   	pay = 0;
//   	textFont('Avenir Next');
// }
// 
// 
// function draw() {
// 	cursor('pointer');
// 	rectMode(CENTER);
// 	pay = round(100*hourlyRate*minutesWorked/60)/100;
// 	background(255,255,255);
// 	noStroke();
// 	fill(0,0,0);
// 	textSize(120);
// 	textAlign(CENTER);
// 	text('£ ' + str(pay),W/2,H/2);
// 	textSize(15);
// 	fill(0,0,0,150)
// 	text('AT',W/2,11*H/32)
// 	textSize(25);
// 	fill(0,0,0);
// 	text('£ ' + str(hourlyRate),3*W/4,H/8-15);
// 	fill(0,0,0,100);
// 	textSize(20)
// 	text('per hour',3*W/4,H/8+20);
// 	fill(0,0,0);
// 	textSize(25);
// 	text(str(minutesWorked),W/4,H/8-15);
// 	fill(0,0,0,100);
// 	textSize(20)
// 	text('minutes worked',W/4,H/8+20);
// 	strokeWeight(1);
// 	stroke(0,0,0,100);
// 	line(W/2,0,W/2,H/4);
// 	line(W/2,3*H/4,W/2,H);
// 	stroke(111, 130, 179,100);
// 	strokeWeight(3);
// 	noFill();
// 	if (mouseX<W/2){
// 		line(W/2-10,H/8,W/2-40,H/8);
// 		line(W/2-40,H/8,W/2-30,H/8-10);
// 		line(W/2-40,H/8,W/2-30,H/8+10);
// 		
// 		line(W/2-10,7*H/8,W/2-40,7*H/8);
// 		line(W/2-40,7*H/8,W/2-30,7*H/8-10);
// 		line(W/2-40,7*H/8,W/2-30,7*H/8+10);
// 		
// 		strokeWeight(1);
// 		rect(W/4,H/8,250,100);
// 	} else {
// 		line(W/2+10,H/8,W/2+40,H/8);
// 		line(W/2+40,H/8,W/2+30,H/8-10);
// 		line(W/2+40,H/8,W/2+30,H/8+10);
// 		
// 		line(W/2+10,7*H/8,W/2+40,7*H/8);
// 		line(W/2+40,7*H/8,W/2+30,7*H/8-10);
// 		line(W/2+40,7*H/8,W/2+30,7*H/8+10);
// 		
// 		strokeWeight(1);
// 		rect(3*W/4,H/8,150,100);
// 	}
// }
// 
// 
// function mouseClicked(){
// 	if (mouseX<W/2){
// 		minutesWorked = prompt('Minutes Worked: ');
// 	} else {
// 		hourlyRate = prompt('Hourly Rate: ');
// 	}
// }
// 
// window.onresize = function() {
// 	resizeCanvas(windowWidth, windowHeight);
// 	W = windowWidth;
// 	H = windowHeight
// };