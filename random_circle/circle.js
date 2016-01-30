"use strict";


//click event function to generate circles on canvas

function draw(e) {

    var canvas = document.getElementById("imgCanvas");
    
    document.getElementById("imgCanvas").style.backgroundColor = getRandomColor()
    imgCanvas.width = window.innerWidth;
    
    imgCanvas.height =window.innerHeight;

    
    
    // generate 10 random dia & color circles
    for(var i = 0; i < 10; i++) {
       
        //get Mouse postion
        var context = canvas.getContext("2d");
        var rect = canvas.getBoundingClientRect();
        var posx = e.clientX - rect.left;
        var posy = e.clientY - rect.top;

        //fill circle & its border with randon color
        context.strokeStyle = getRandomColor();
        context.fillStyle = getRandomColor();
        context.fill();
        context.stroke();
        context.beginPath();
        context.lineWidth = 5;
        
        //generate random radius between 10 to 100
        var ranrad = Math.floor(Math.random() * (70 - 1)) + 10; 
        
        //generate random position of cicles
        var ranx = Math.floor(Math.random() * (posx - (ranrad * 2) - 1)) + ranrad;
        var rany = Math.floor(Math.random() * (posy - (ranrad * 2) - 1)) + ranrad;
       
        // arc(x, y, radius, startAngle, endAngle, direction)
        context.arc(ranx, rany, ranrad, 0, 2 * Math.PI);
        
        
   }
}

//To generate a random hexa color code.

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return(color);
}


