$(document).ready(function () {
  console.log('ready');

  function getMaxOfArray(numArray) {
       return Math.max.apply(null, numArray);
  }

  function getMinOfArray(numArray) {
       return Math.min.apply(null, numArray);
  }

  var sizes = [2000, 878, 468, 840, 346, 180, 90, 1, 145, 910, 340, 519, 444, 712, 1135];
  var sorted = sizes.sort(function(a, b) {
    return b - a;
  })
  console.log(sorted);
  var maxWidth = 250;
  var minWidth = 60;
  var maxHeight = 180;
  var minHeight = 40;
  var maxLikes = getMaxOfArray(sizes);
  var minLikes = getMinOfArray(sizes);



function setSizes (arr) {
    var total = 0;
    for (var i = 0; i < sizes.length; i++) {
      total+=sizes[i];
    }
    console.log(total);
    
    for (var i = 0; i < sizes.length; i++) {
      var side = i % 4;
      var offset;
      if (side === 1 || side === 2) {
        offset = "+15%"
      } else {
        offset = "-15%"
      }

      console.log('side' + side);
      var percentage = (sizes[i] - minLikes) / (maxLikes - minLikes);
      console.log('i = ' + i);
      console.log('% =' + percentage); 
      var calcWidth = minWidth + (percentage * (maxWidth - minWidth));
      var calcHeight = minHeight + (percentage * (maxHeight - minHeight));
      console.log('calc width = ' + calcWidth);
      console.log('calc height = ' + calcHeight);
      $('#box' + (i+1)).css({"height": calcHeight, "width": calcWidth});
      
      if (i === 0) {
        //place first image
        $("#box1").css("z-index", 10);
      $("#box1").position({
          my: "center",
        at: "center",
        of: "#targetElement"
        });
    } else {
      //spiral out until image can be placed
        

        //collision detect (how?)
      $("#box" + (i+1)).position({
        my: sides[side] + offset,
        at: opp[side],
        of: "#box" + incrementBox,
        collision: "flipfit flipfit"
      })
    }

    }
  }

  function spiral() {

    //spiral out and check collision


    //return coordinates
  }


  setSizes(sizes);



//loop


});