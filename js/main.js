$(function() {
	function randRange (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var colors = [
	'#4b727f',
	'#7da3ac',
	'#444444',
	'#594e70',
	'#6c6b6b',
	'#9c89ba',
	'#00a2a0',
	'#a5478e'
	];

	function resetColors(){
		for(var i = 0; i < 6; i++){
			colorPicks[i] = 'none';
		}
	}
	var colorPicks = [];
	resetColors();
	function makeBlock(){
		var n = randRange(0,colorPicks.length-1);
		var c = colorPicks[n];
		var block = '<div class="block" style="background: ' + c + '"></div>';
		colorPicks.splice(n,1);
		return block;
	}
	function buildRow(nb){
		var row = '<div class="pixel-row group">';
		for(var i = 0; i < nb; i++){
			row += makeBlock();
		}
		row += '</div>';
		$('div.pixels').append(row);
	}
	function makeRow(nb){
		resetColors();
		for(var ii = 0; ii < nb; ii++){
			var n = randRange(0, colors.length-1);
			colorPicks[ii] = colors[n];
		}
		buildRow(6);
	}
	if($('section.ident')){
		for(var i = 0; i < 5; i++){
			if(i === 0){
				makeRow(6);
			}
			if(i === 1){
				makeRow(6);
			}
			if(i === 2){
				makeRow(4);
			}
			if(i === 3){
				makeRow(2);
			}
			if(i === 4){
				makeRow(1);
			}
		}
	}
});