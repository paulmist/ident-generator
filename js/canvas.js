$(function() {
	//var canvas = document.getElementById('canvas').getContext('2d');
	var canvas = new SVGCanvas('canvas');
	
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

	var colorPicks = [];
	//console.log("1. colorPicks:" + colorPicks);
	
	function randRange (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function resetColors(){
		for(var i = 0; i < 6; i++){
			colorPicks[i] = 'none';
		}
	}
	
	resetColors();

	//console.log(colorPicks);
	
	function drawBlock(x, y, s, c){
		canvas.fillStyle = c;
		//canvas.lineWidth = 1;
		//canvas.strokeStyle = c;
		//canvas.lineJoin = 'square';
		canvas.fillRect(x, y, s, s);
		//canvas.stroke();

		//console.log("Drawing block: x:" + x + " y:" + y + " s:" + s + " c:" + c);
	}
	
	function drawRow(r, b){
		//console.log(colorPicks);
		for(var i = 0; i < b; i++){
			var x = 50*i;
			var y = 50*(r-1);
			var s = 50;
			var n = randRange(0,colorPicks.length-1);
			var c = colorPicks[n];
			colorPicks.splice(n,1);
			//var c = colorPicks[i];
			if(c != 'none'){
				drawBlock(x, y, s, c);	
			}
			
		}
	}
	
	function initRow(row, blocks){
		resetColors();
		//console.log(colorPicks);
		for(var i = 0; i < blocks; i++){
			var r = randRange(0, colors.length-1);
			colorPicks[i] = colors[r];
		}
		//console.log("3. colorPicks:" + colorPicks);
		drawRow(row, 6);
	}

	//initRow(1,6);

	if($('#canvas')){
		//console.log("2. colorPicks:" + colorPicks);
		for(var i = 0; i < 5; i++){
			if(i === 0){
				initRow(1,6);
			}
			if(i === 1){
				initRow(2,6);
			}
			if(i === 2){
				initRow(3,4);
			}
			if(i === 3){
				initRow(4,2);
			}
			if(i === 4){
				initRow(5,1);
			}
		}
	}
	
	//var xml = context.toDataURL( 'image/svg+xml' );
	//console.log(xml);

	//document.getElementById('svg').innerHTML = canvas.toDataURL("image/svg+xml");
	$('#output').val(canvas.toDataURL("image/svg+xml"));
});