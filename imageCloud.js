$(document).ready(function() {
	console.log('ready');

 function getMaxOfArray(objArr) {
 		objArr.sort(function(a, b) {
 			return b.likes - a.likes;
 		})
       return objArr[0].likes;
  }

  function getMinOfArray(objArr) {
 		objArr.sort(function(a, b) {
 			return a.likes - b.likes;
 		})
       return objArr[0].likes;
  }

//get images (will not have w and h)
var imgs = [
	{'id': 1, 'url': '/img/k2.jpg', 'likes': Math.random() * 1500},
	{'id': 2, 'url': '/img/3.jpg', 'likes': Math.random() * 1500},
	{'id': 2, 'url': '/img/2.jpg', 'likes': Math.random() * 1500},
	{'id': 3, 'url': 'http://res.cloudinary.com/di5ktveen/image/upload/v1425511757/mud2ayqllyzjpx8uluse.jpg', 'likes': Math.random() * 1500},
	{'id': 4, 'url': '/img/4.jpg', 'likes': Math.random() * 1500},
	{'id': 5, 'url': '/img/5.jpg', 'likes': Math.random() * 1500},
	{'id': 6, 'url': '/img/6.jpg', 'likes': Math.random() * 1500},
	{'id': 7, 'url': '/img/7.jpg', 'likes': Math.random() * 1500},
	{'id': 7, 'url': '/img/8.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/9.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/k2.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/1.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/2.jpg', 'likes': Math.random() * 1500},
	{'id': 10, 'url': '/img/3.jpg', 'likes': Math.random() * 1500},
	{'id': 7, 'url': '/img/4.jpg', 'likes': Math.random() * 1500},
	{'id': 7, 'url': '/img/5.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/6.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/7.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/8.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/9.jpg', 'likes': Math.random() * 1500},
	{'id': 10, 'url': '/img/k2.jpg', 'likes': Math.random() * 1500},
	{'id': 10, 'url': '/img/1.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/9.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/k2.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/1.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/2.jpg', 'likes': Math.random() * 1500},
	{'id': 10, 'url': '/img/3.jpg', 'likes': Math.random() * 1500},
	{'id': 7, 'url': '/img/4.jpg', 'likes': Math.random() * 1500},
	{'id': 7, 'url': '/img/5.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/6.jpg', 'likes': Math.random() * 1500},
	{'id': 8, 'url': '/img/7.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/8.jpg', 'likes': Math.random() * 1500},
	{'id': 9, 'url': '/img/9.jpg', 'likes': Math.random() * 1500},
	{'id': 10, 'url': '/img/k2.jpg', 'likes': Math.random() * 1500},
	{'id': 10, 'url': '/img/1.jpg', 'likes': Math.random() * 1500},
/*	{'id': 11, 'url': '/img/2.jpg', 'likes': 420},
	{'id': 11, 'url': '/img/3.jpg', 'likes': 334},
	{'id': 12, 'url': '/img/4.jpg', 'likes': 300},
	{'id': 12, 'url': '/img/5.jpg', 'likes': 240},
	{'id': 13, 'url': '/img/6.jpg', 'likes': 88},
	{'id': 10, 'url': '/img/1.jpg', 'likes': 460},
	{'id': 11, 'url': '/img/2.jpg', 'likes': 420},
	{'id': 11, 'url': '/img/3.jpg', 'likes': 334},
	{'id': 12, 'url': '/img/4.jpg', 'likes': 300},
	{'id': 12, 'url': '/img/5.jpg', 'likes': 240},
	{'id': 13, 'url': '/img/6.jpg', 'likes': 88},
	{'id': 10, 'url': '/img/1.jpg', 'likes': 460},
	{'id': 11, 'url': '/img/2.jpg', 'likes': 420},
	{'id': 11, 'url': '/img/3.jpg', 'likes': 334},
	{'id': 12, 'url': '/img/4.jpg', 'likes': 300},
	{'id': 12, 'url': '/img/5.jpg', 'likes': 240},
	{'id': 13, 'url': '/img/6.jpg', 'likes': 88},
	{'id': 10, 'url': '/img/1.jpg', 'likes': 460},
	{'id': 11, 'url': '/img/2.jpg', 'likes': 420},
	{'id': 11, 'url': '/img/3.jpg', 'likes': 334},
	{'id': 12, 'url': '/img/4.jpg', 'likes': 300},
	{'id': 12, 'url': '/img/5.jpg', 'likes': 240},
	{'id': 13, 'url': '/img/6.jpg', 'likes': 88},
	{'id': 10, 'url': '/img/1.jpg', 'likes': 460},
	{'id': 11, 'url': '/img/2.jpg', 'likes': 420},
	{'id': 11, 'url': '/img/3.jpg', 'likes': 334},
	{'id': 12, 'url': '/img/4.jpg', 'likes': 300},
	{'id': 12, 'url': '/img/5.jpg', 'likes': 240},
	{'id': 13, 'url': '/img/6.jpg', 'likes': 88},*/
	{'id': 13, 'url': '/img/7.jpg', 'likes': 1}];
//set w and h proportional to relative upvote count

//put images in tempArr, sorted by likes descending
var tempImgs = imgs.sort(function compare(a,b) {
  if (a.likes > b.likes)
     return -1;
  if (a.likes < b.likes)
    return 1;
  return 0;
}
);

console.log(tempImgs);

  var maxWidth = 300;
  var minWidth = 60;
  var maxHeight = 200;
  var minHeight = 40;
  var overlap = 6;
  var maxLikes = getMaxOfArray(tempImgs);
  //console.log(maxLikes);
  var minLikes = getMinOfArray(tempImgs);
  //console.log(minLikes);

var setSizes = function(imgArr) {
/* var total = 0;*/
   /* for (var i = 0; i < imgArr.length; i++) {
      total+=imgArr[i].likes;
    }*/
   // console.log(total);
    imgArr[0].w = maxWidth;
    console.log(maxWidth);
    imgArr[0].h = maxHeight;
	maxWidth = maxWidth - ((maxWidth - minWidth)*.67);
	maxHeight = maxHeight - ((maxHeight - minHeight)*.67);
	console.log(maxWidth);

    for (var i = 1; i < imgArr.length; i++) {
	    var percentage = (imgArr[i].likes - minLikes) / (maxLikes - minLikes);
	    var calcWidth = minWidth + (percentage * (maxWidth - minWidth));
	    var calcHeight = minHeight + (percentage * (maxHeight - minHeight));

	    imgArr[i].w = calcWidth;
	    imgArr[i].h = calcHeight;
	    console.log(i + ':  w: ' + imgArr[i].w + ' h: ' + imgArr[i].h);
	}
}

setSizes(tempImgs);

//console.log(tempImgs);
/*var imgs = [
	{'id': 1, 'url': '/img/k2.jpg', 'w': 400, 'h': 300},
	{'id': 2, 'url': '/img/k2.jpg', 'w': 200, 'h': 170},
	{'id': 2, 'url': '/img/k2.jpg', 'w': 200, 'h': 170},
	{'id': 3, 'url': '/img/k2.jpg', 'w': 190, 'h': 150},
	{'id': 4, 'url': '/img/k2.jpg', 'w': 180, 'h': 130},
	{'id': 5, 'url': '/img/k2.jpg', 'w': 180, 'h': 130},
	{'id': 6, 'url': '/img/k2.jpg', 'w': 170, 'h': 110},
	{'id': 7, 'url': '/img/k2.jpg', 'w': 170, 'h': 110},
	{'id': 7, 'url': '/img/k2.jpg', 'w': 160, 'h': 100},
	{'id': 8, 'url': '/img/k2.jpg', 'w': 160, 'h': 100},
	{'id': 8, 'url': '/img/k2.jpg', 'w': 160, 'h': 100},
	{'id': 9, 'url': '/img/k2.jpg', 'w': 150, 'h': 90},
	{'id': 9, 'url': '/img/k2.jpg', 'w': 150, 'h': 90},
	{'id': 10, 'url': '/img/k2.jpg', 'w': 100, 'h': 80},
	{'id': 10, 'url': '/img/k2.jpg', 'w': 100, 'h': 80},
	{'id': 11, 'url': '/img/k2.jpg', 'w': 90, 'h': 70},
	{'id': 11, 'url': '/img/k2.jpg', 'w': 90, 'h': 70},
	{'id': 12, 'url': '/img/k2.jpg', 'w': 80, 'h': 60},
	{'id': 12, 'url': '/img/k2.jpg', 'w': 80, 'h': 60},
	{'id': 13, 'url': '/img/k2.jpg', 'w': 65, 'h': 55},
	{'id': 13, 'url': '/img/k2.jpg', 'w': 65, 'h': 55}];
*/
//for collision detection
var filledImgs = [];
var bounds;

var checkCollision = function (rect, bounds) {
			    for (var i = 0; i < filledImgs.length; i++) {
			    //boundary check
			    if (rect.x < bounds.x ||
			    	rect.y < bounds.y ||
			    	rect.x + rect.w > bounds.x + bounds.w ||
			    	rect.y + rect.h > bounds.y + bounds.h) {
			    	//outside of boundary
			    	return true;
			    }
			    //collistion with other images
			    if (filledImgs[i].x + overlap < rect.x + rect.w &&
			        filledImgs[i].x + filledImgs[i].w - overlap  > rect.x &&
			        filledImgs[i].y + overlap < rect.y + rect.h &&
			        filledImgs[i].h + filledImgs[i].y - overlap > rect.y) {
			        // collision detected!
			        return true;
			    }
			    //no collision
			   
			}
			 return false;
		}

//place an image
//imageObj w/ position ex: {id, url, left, top, w, h}
var placeOne = function(imageObj, first, index) {
		var newImg= $('<img/>', {'class': 'box'})
		$('#view').append(newImg);
		newImg.css({
			'height'				: imageObj.h,
			'width'					: imageObj.w,
			'top'					: imageObj.top + topOffset,
			'left'					: imageObj.left + leftOffset,
			'border'				: '1px solid black',
			'border-radius' 		: '12px',
			'background-image'  	: 'url(' + imageObj.url + ')',
			'background-repeat' 	: 'no-repeat',
			'background-position'	: 'left top',
			'background-size'		: '100% 100%',
			'z-index'				: tempImgs.length - index
			})
		if(first) {
			newImg.attr("id","img1");
			newImg.css({
				'z-index': tempImgs.length
			})
		}
};

//place first image
var placeMainImg = function(imageObj) {
	tempImgs[0].left = xCenter - imageObj.w/2;
	tempImgs[0].top  = yCenter - imageObj.h/2;
	tempImgs[0].w    = maxWidth;
	tempImgs[0].h 	 = maxHeight;
	placeOne(imgs[0], true);
	filledImgs.push({   'x': tempImgs[0].left,
						'y': tempImgs[0].top,
						'w': tempImgs[0].w,
						'h': tempImgs[0].h}) 
	
};
//place 2nd and 3rd images to right and left centered, for better aesthetics
var placeSecondAndThird = function(imgObj2nd, imgObj3rd) {
	var newImg= $('<img/>', {'class': 'box'});
		$('#view').append(newImg);
		newImg.css({
			'height'				: imgObj2nd.h,
			'width'					: imgObj2nd.w,
			'top'					: imgObj2nd.top + topOffset,
			'left'					: imgObj2nd.left + leftOffset,
			'border'				: '1px solid black',
			'border-radius' 		: '12px',
			'background-image'  	: 'url(' + imgObj2nd.url + ')',
			'background-repeat' 	: 'no-repeat',
			'background-position'	: 'left top',
			'background-size'		: '100% 100%',
			'z-index'				: tempImgs.length - 1
			})
			.position({
				my: "left",
				at: "right - 15",
				of: "#img1"
			})

			tempImgs[1].left = newImg.position().left;
			tempImgs[1].top = newImg.position().top;

				filledImgs.push({   'x': newImg.position().left,
									'y': newImg.position().top,
									'w': imgObj2nd.w,
									'h': imgObj2nd.h}) 
				console.log(filledImgs)

		var newImg2= $('<img/>', {'class': 'box'});
		$('#view').append(newImg2);
		newImg2.css({
			'height'				: imgObj3rd.h,
			'width'					: imgObj3rd.w,
			'top'					: imgObj3rd.top + topOffset,
			'left'					: imgObj3rd.left + leftOffset,
			'border'				: '1px solid black',
			'border-radius' 		: '12px',
			'background-image'  	: 'url(' + imgObj3rd.url + ')',
			'background-repeat' 	: 'no-repeat',
			'background-position'	: 'left top',
			'background-size'		: '100% 100%',
			'z-index'				: tempImgs.length - 2
			})
			.position({
				my: "right",
				at: "left+15",
				of: "#img1"
			})

			tempImgs[2].left = newImg2.position().left;
			tempImgs[2].top = newImg2.position().top;

				filledImgs.push({   'x': newImg2.position().left,
									'y': newImg2.position().top,
									'w': imgObj3rd.w,
									'h': imgObj3rd.h})

}


//imgObj {id: '', url: '', w: '', h: ''}
//invoke callback with imgObj with top and left properties added
function getPosition (imgObj, start, callback) {

	var x = xCenter;
	var y = yCenter;
	//console.log(x, y);
	var dy = $(canvas).height()/80/*(imgObj.h/4)*/;
	var dx = dy*(ratio);
	var counter = 1;
	var horizontal = true;
	var reverse;
	for (var i = start; i < (start + 320); i++) {		
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
				//ctx.stroke();
				x = x-shiftX;
			} else {
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x,y-shiftY);
				//ctx.stroke();
				y = y-shiftY;
			}
			//console.log('after', x, y)
			//ctx.stroke();
			intervals--;

			//TODO collision detection here
			//{x, y, w, h}
			var potentialImg = {'x': x - imgObj.w/2,
								'y': y - imgObj.h/2,
								'w': imgObj.w,
								'h': imgObj.h};
			
			var doesCollide = checkCollision(potentialImg, bounds);
					if (!doesCollide) {
				//console.log('Image fits at: (x, y) (' + potentialImg.x + ',' + potentialImg.y + ').');
				filledImgs.push(potentialImg);
				//console.log(filledImgs);
				imgObj.top = potentialImg.y;
				imgObj.left = potentialImg.x;
				//console.log(imgObj);
				callback(imgObj);
				return;
			};
			}
	}
}


//initialize canvas and set middle coordinates and boundary
var canvas = document.getElementById('cloud');
var ctx = canvas.getContext('2d');
var topOffset = $(canvas).position().top; 
var leftOffset = $(canvas).position().left;
var xCenter =($(canvas).width()/2);
var yCenter =($(canvas).height()/2);
var ratio = ($(canvas).width()/$(canvas).height());

bounds = {
	'x': leftOffset,
	'y': topOffset,
	'w': leftOffset + $(canvas).width(),
	'h': topOffset + $(canvas).height()
}
//console.log('bounds:');
//console.log(bounds);
//place first image

placeMainImg(tempImgs[0]);
placeSecondAndThird(tempImgs[1], tempImgs[2]);

//loop through images and populate location property

//first 3 images have already been placed, so i starts at 3
for (var i = 3; i < tempImgs.length; i++) {
	//attach position info to imgs
	getPosition(tempImgs[i], i, function(imgObjWithPosition) {
		tempImgs[i] = imgObjWithPosition;
	});
}
//console.log(tempImgs);

//first 3 images have already been placed, so i starts at 3
for (var i = 3; i < tempImgs.length; i++) {
	placeOne(tempImgs[i], false, i);
}

//after placement of all images, clear filledImgs


var tempZIndex = 0;
	$('.box').on('mouseenter', function() {
		tempZIndex = $(this).css('z-index');
		$(this).css({'z-index': 100});
		//console.log(tempZIndex);
	})
	.on('mouseleave', function() {
		$(this).css({'z-index': tempZIndex});
	})


	$('.box').on('click', function() {
		console.log($(this).attr('id'));
	})


}); // end imageCloud.js