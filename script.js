var mouseEvent = "";

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

addEventListener("mousedown", my_mousedown);

my_mousedown (); {
    var colour = document.getElementById("colour").value;
    var width = document.getElementById("width").value;
    mouseEvent = "mousedown";
}

addEventListener("mouseup", my_mouseup);

my_mouseup (); { 
    mouseEvent = "mouseup";
}

addEventListener("mouseleave", my_mouseleave);

my_mouseleave (); {
    mouseEvent = "mouseleave";
}

addEventListener("touchstart", my_touchstart);

my_touchstart (); {
    console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY-canvas.offsetTop;
}

addEventListener("touchmove", my_touchmove);
my_touchmove (); {
    current_position_of_touch_x = e.clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.clientY - canvas.offsetTop;
   
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width_of_line;

   console.log("Last position of x and y coordinates = ");
   console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
   ctx.moveTo(last_position_of_x, last_position_of_y);

   console.log("Current position of x and y coordinates = ");
   console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
   ctx.stroke();

   last_position_of_x = current_position_of_touch_x; 
   last_position_of_y = current_position_of_touch_y;
}

