$(document).ready(function() {
	console.log('ready');

/*	var imgs = [
	{'w': 200, 'h': 140},
	{'w': 160, 'h': 100},
	{'w': 140, 'h': 80}];*/

	// array of objects {x, y, w, h}
	// used for collision detection 
	/*var filledImgs = [];*/


/*	var checkCollision = function (rect) {
			    for (var i = 0; i < filledImgs.length; i++) {
			    if (filledImgs[i].x < rect.x + rect.w &&
			        filledImgs[i].x + filledImgs[i].w > rect.x &&
			        filledImgs[i].y < rect.y + rect.h &&
			        filledImgs[i].h + filledImgs[i].y > rect.y) {
			        // collision detected!
			        return true;
			    }
			    //no collision
			   
			}
			 return false;
		}*/

/*	var newImg= $('<img/>', { 'id': 'img1', 'class': 'box'})
	$('#view').append(newImg);
	newImg.css({
		'height': '200px',
		'width': '300px',
		'border': '1px solid black',
		'border-radius': '12px'
		})
		.position({
			my: 'center',
			at: 'center',
			of: '#view'
		});*/

/*	var firstImgDims = {
		'x': $('#img1').position().left,
		'y': $('#img1').position().top,
		'w': $('#img1').width(),
		'h': $('#img1').height()
	}
	console.log(firstImgDims);*/
	filledImgs.push(firstImgDims);


	
/*	var canvas = document.getElementById('tutorial');
	var ctx = canvas.getContext('2d');*/
	//console.log(ctx);
	/*var canvasPosition = $(canvas).position();
	//console.log(canvasPosition);*/



/*//imgObj {id: '', url: '', w: '', h: ''}
function placeImage (imgObj) {

	var x =($(canvas).width()/2);
	var y =($(canvas).height()/2);
	//console.log(x, y);
	var dx = (imgSizeObj.w/2);
	var dy = (imgSizeObj.h/2);
	var counter = 1;
	var horizontal = true;
	var reverse;
	for (var i = 0; i < 40; i++) {		
		//console.log('before', x, y)
		//console.log(i % 4);
		 switch (i % 4)
		  {
        case 0: horizontal = true;
        		reverse = -1;
        		break;
        case 1: //y -= dy * counter;
        		horizontal = false;
        		reverse = -1;
        		counter++;
        		break;
        case 2: //x += dx * counter; 
        		horizontal = true;
        		reverse = 1;
        		break;
        case 3: //y += dy * counter;
        		counter++;
        		horizontal = false;
        		reverse = 1;
        		break;
        default: console.log('error');
      }
      	var intervals = 4*counter;
      	var shiftX = (dx*(counter/intervals)*reverse);
      	var shiftY = (dy*(counter/intervals)*reverse);
      	while(intervals >= 0) {
      		if (horizontal) {
      			ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x-shiftX,y);
				ctx.stroke();
				x = x-shiftX;
			} else {
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x,y-shiftY);
				ctx.stroke();
				y = y-shiftY;
			}
			//console.log('after', x, y)
			//ctx.stroke();
			intervals--;

			//TODO collision detection here
			//{x, y, w, h}
			var potentialImg = {'x': x - imgSizeObj.w/2,
								'y': y - imgSizeObj.h/2,
								'w': imgSizeObj.w,
								'h': imgSizeObj.h};
			
			var doesCollide = checkCollision(potentialImg);
					if (!doesCollide) {
				console.log('Image fits at: (x, y) (' + potentialImg.x + ',' + potentialImg.y + ').');
				filledImgs.push(potentialImg);
				console.log(filledImgs);
				cb( {'top': potentialImg.x, 'left': potentialImg.y});
				return;
			};
			
			
			}
	}
}*/

	for (var i = 0; i < imgs.length; i++) {
		var putImageHere = placeImage(imgs[i], function(res) {
			console.log(res);
			var nextImg= $('<img/>', { 'id': 'img'+ (i+2), 'class': 'box'})
			$('#view').append(nextImg);
			nextImg.css({
				'height': imgs[i].h,
				'width': imgs[i].w,
				'border': '1px solid black',
				'border-radius': '12px',
				'top': res.top,
				'left': res.left
				})	
		});
		//console.log(putImageHere);
		
}
	/*console.log($('#img2').position());*/

	$('.box').on('mouseenter', function() {
		console.log($(this).position());
	})



})