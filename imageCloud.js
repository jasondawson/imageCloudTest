$(document).ready(function() {
	console.log('ready');
var lowOpacity = 1;
var drawLines = false;

//cloudinary test

$.cloudinary.config("cloud_name", "di5ktveen");


//end cloudinary test

var mainImgId;

 function getMaxOfArray(objArr) {
 		objArr.sort(function(a, b) {
 			return b.likes - a.likes;
 		})
 		//console.log('Max ' + objArr[0].likes)
       return objArr[0].likes;
  }

  function getMinOfArray(objArr) {
 		objArr.sort(function(a, b) {
 			return a.likes - b.likes;
 		})
 		//console.log('Min ' + objArr[0].likes)
       return objArr[0].likes;
  }

var test = $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' })
console.log(test);
//get images (will not have w and h)
//format {id, url, likes}
var imgs = [
	{'id': 1, 'url': $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 2, 'url': $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 3, 'url': $.cloudinary.url('fox.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 4, 'url': $.cloudinary.url('fox.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 5, 'url': $.cloudinary.url('fox.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 6, 'url': $.cloudinary.url('fox.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 7, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 8, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 9, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 10, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 11, 'url': $.cloudinary.url('fox.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 12, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 13, 'url': $.cloudinary.url('fox.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 14, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 15, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 16, 'url': $.cloudinary.url('fox', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 17, 'url': $.cloudinary.url('fox', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 18, 'url': $.cloudinary.url('fox', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 19, 'url': $.cloudinary.url('fox', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 20, 'url': $.cloudinary.url('fox', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 21, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 22, 'url': $.cloudinary.url('fox', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 23, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 24, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 25, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 26, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 27, 'url': $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 28, 'url': $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 29, 'url': $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 30, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 31, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 32, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 33, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 34, 'url': $.cloudinary.url('goat.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 35, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 36, 'url': '/img/k2.jpg', 'likes': Math.random() * 1000000},
	{'id': 37, 'url': '/img/k2.jpg', 'likes': Math.random() * 1000000},
	{'id': 38, 'url': '/img/k2.jpg', 'likes': Math.random() * 1000000},
	{'id': 39, 'url': '/img/k2.jpg', 'likes': Math.random() * 1000000},
	{'id': 40, 'url': $.cloudinary.url('the_real_eager', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 41, 'url': '/img/1.jpg', 'likes': Math.random() * 1000000},
	{'id': 42, 'url': '/img/k2.jpg', 'likes': Math.random() * 1000000},
	{'id': 43, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 44, 'url': $.cloudinary.url('graydog.jpg', { width: 300, height: 200, crop: 'fill' }), 'likes': Math.random() * 1000000},
	{'id': 45, 'url': '/img/6.jpg', 'likes': Math.random() * 1000000},
/*	{'id': 13, 'url': '/img/6.jpg', 'likes': 88},
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
	{'id': 46, 'url': '/img/k2.jpg', 'likes': Math.random() * 100000}];
//set w and h proportional to relative upvote count

//for testing
var getThisMany = Math.floor(Math.random()*(imgs.length - 4) + 4);
console.log(getThisMany);

//put images in tempArr, sorted by likes descending
var imgArrLength = imgs.length;
var tempImgs = imgs.sort(function compare(a,b) {
  if (a.likes > b.likes)
     return -1;
  if (a.likes < b.likes)
    return 1;
  return 0;
}
);

//console.log(tempImgs[0]);

  var maxWidth = 300;
  var minWidth = 60;
  var maxHeight = 200;
  var minHeight = 40;
  var overlap = 10;
  var minLikes = getMinOfArray(tempImgs);
  //console.log(minLikes);
  var maxLikes = getMaxOfArray(tempImgs);
  //console.log(maxLikes);

var setSizes = function(imgArr) {
/* var total = 0;*/
   /* for (var i = 0; i < imgArr.length; i++) {
      total+=imgArr[i].likes;
    }*/
   // console.log(total);
    imgArr[0].w = maxWidth;
    //console.log(maxWidth);
    imgArr[0].h = maxHeight;
    imgArr[1].w = maxWidth * .62;
    imgArr[1].h = maxHeight * .62;
    imgArr[2].w = maxWidth * .62;
    imgArr[2].h = maxHeight * .62;
	maxWidth = maxWidth - ((maxWidth - minWidth)*.68);
	maxHeight = maxHeight - ((maxHeight - minHeight)*.68);
	//console.log(maxWidth);
    for (var i = 3; i < getThisMany; i++) {
	    var percentage = (imgArr[i].likes - minLikes) / (maxLikes - minLikes);
	    var calcWidth = minWidth + (percentage * (maxWidth - minWidth));
	    var calcHeight = minHeight + (percentage * (maxHeight - minHeight));

	    imgArr[i].w = calcWidth;
	    imgArr[i].h = calcHeight;
	   // console.log(imgArr[i].likes);
	  //  console.log(i + ':  w: ' + imgArr[i].w + ' h: ' + imgArr[i].h);
	}
}

setSizes(tempImgs);

//console.log(tempImgs);
/*var imgs = [
	{'id': 1, 'url': '$.cloudinary.url('graydog.jpg')', 'w': 400, 'h': 300},
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
			    //collision with other images
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
		newImg.attr("id", imageObj.id);
		newImg.css({
			'height'				: imageObj.h,
			'width'					: imageObj.w,
			'top'					: imageObj.top + topOffset,
			'left'					: imageObj.left + leftOffset,
			/*'border'				: '1px solid black',*/
			'border-radius' 		: '12px',
			'background-image'  	: 'url(' + imageObj.url + ')',
			'background-repeat' 	: 'no-repeat',
			'background-position'	: 'left top',
			'background-size'		: '100% 100%',
			'z-index'				: imgArrLength - index,
			'opacity'				: lowOpacity
			})

		if(first) {
			mainImgId = imageObj.id;
			//newImg.attr("id","img1");
			newImg.css({
				'z-index': imgArrLength
			})
		}
};

//place first image
var placeMainImg = function(imageObj, cb) {
	tempImgs[0].left = xCenter - imageObj.w/2;
	tempImgs[0].top  = yCenter - imageObj.h/2;
	placeOne(tempImgs[0], true);
	filledImgs.push({   'x': tempImgs[0].left,
						'y': tempImgs[0].top,
						'w': tempImgs[0].w,
						'h': tempImgs[0].h})
	
	cb(tempImgs[1], tempImgs[2]); 
	
};
//place 2nd and 3rd images to right and left centered, for better aesthetics
var placeSecondAndThird = function(imgObj2nd, imgObj3rd) {
	var newImg= $('<img/>', {'class': 'box'});
		newImg.attr("id", imgObj2nd.id);
		$('#view').append(newImg);
		newImg.css({
			'height'				: imgObj2nd.h,
			'width'					: imgObj2nd.w,
/*			'top'					: imgObj2nd.top + topOffset,
			'left'					: imgObj2nd.left + leftOffset,*/
			/*'border'				: '1px solid black',*/
			'border-radius' 		: '12px',
			'background-image'  	: 'url(' + imgObj2nd.url + ')',
			'background-repeat' 	: 'no-repeat',
			'background-position'	: 'left top',
			'background-size'		: '100% 100%',
			'z-index'				: imgArrLength - 1,
			'opacity'				: lowOpacity
			})
			.position({
				my: "left",
				at: "right-"+overlap,
				of: '#'+mainImgId
			})
		//newImg.addClass('hidden');
			

			tempImgs[1].left = newImg.position().left;
			tempImgs[1].top = newImg.position().top;

				filledImgs.push({   'x': newImg.position().left,
									'y': newImg.position().top,
									'w': imgObj2nd.w,
									'h': imgObj2nd.h}) 
				//console.log(filledImgs)

		var newImg2= $('<img/>', {'class': 'box'});
		newImg2.attr("id", imgObj3rd.id);
		$('#view').append(newImg2);
		newImg2.css({
			'height'				: imgObj3rd.h,
			'width'					: imgObj3rd.w,
			'top'					: imgObj3rd.top + topOffset,
			'left'					: imgObj3rd.left + leftOffset,
			/*'border'				: '1px solid black',*/
			'border-radius' 		: '12px',
			'background-image'  	: 'url(' + imgObj3rd.url + ')',
			'background-repeat' 	: 'no-repeat',
			'background-position'	: 'left top',
			'background-size'		: '100% 100%',
			'z-index'				: imgArrLength - 2,
			'opacity'				: lowOpacity
			})
			.position({
				my: "right",
				at: "left+"+overlap,
				of: '#'+mainImgId
			})
			
		//newImg2.addClass('hidden');
			

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
	var dy = $(canvas).height()/80/*(imgObj.h/8)*/;
	var dx = dy*(ratio);
	ratio = ratio/1.01
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
				if (drawLines) {
				ctx.stroke();
				}
				x = x-shiftX;
			} else {
				ctx.beginPath();
				ctx.moveTo(x, y);
				ctx.lineTo(x,y-shiftY);
				if (drawLines) {
				ctx.stroke();
				}
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
var ratio = ($(canvas).width()/$(canvas).height())*1.2;
console.log(ratio);

bounds = {
	'x': leftOffset,
	'y': topOffset,
	'w': leftOffset + $(canvas).width(),
	'h': topOffset + $(canvas).height()
}
//console.log('bounds:');
//console.log(bounds);
//place first image
//console.log('first image');
//console.log(tempImgs[0]);
placeMainImg(tempImgs[0], placeSecondAndThird);
console.log(tempImgs[1]);
/*placeSecondAndThird(tempImgs[1], tempImgs[2]);*/

//loop through images and populate location property

//first 3 images have already been placed, so i starts at 3
for (var i = 3; i < getThisMany; i++) {
	//attach position info to imgs
	getPosition(tempImgs[i], i, function(imgObjWithPosition) {
		tempImgs[i] = imgObjWithPosition;
	});
}
//console.log(tempImgs);

//first 3 images have already been placed, so i starts at 3
for (var i = 3; i < getThisMany; i++) {
	placeOne(tempImgs[i], false, i);
}

$('.box').hide();

$('.box').load(function show(idx) {
  var $elements = $('.box');
  $elements.eq(idx).show("scale", {easing: 'easeInOutQuad'}, 45, function () {
    show(idx + 1);
  });
}(0));

//TODO try animating all simultaneously
/*$('.box').load(function show(idx) {
  var $elements = $('.box');
  $elements.eq(idx).show("scale", {easing: 'easeInOutQuad'}, 45, function () {
    show(idx + 1);
  });
}(0));*/

/*(function show(idx) {
  var $elements = $('.box');
  $elements.eq(idx).show("scale", {easing: 'easeInOutQuad'}, 40, function () {
    show(idx + 1);
  });
}(0));*/

 /*$('.box').show("scale", {}, 1500).animate({'opacity' : 1});*/
/* $(".box").each(function(i) {
    $(this).show("scale", {}, 1500).animate({'opacity' : 1});
});*/
/*   $('.box img').show("scale", {}, 1000).animate({'opacity' : 1});*/
//after placement of all images, clear filledImgs


var tempZIndex = 0;
	$('.box').on('mouseenter', function() {
		tempZIndex = $(this).css('z-index');
		$(this).css({'z-index': 100, 'opacity': 1});
		//console.log(tempZIndex);
	})
	.on('mouseleave', function() {
		$(this).css({'z-index': tempZIndex, 'opacity': lowOpacity});
	})


	$('.box').on('click', function() {
		console.log($(this).attr('id'));
		console.log($(this).position());
	})


}); // end imageCloud.js