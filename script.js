window.onload = function(){
    var x = 300;
    var y = 350;
    let cnt = 0;
    var t = Date.now();
    var speed = 25;
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
    
    document.onkeydown = function()
    {
        y -= 20;
                
        // if (y <= -50)
        //    y = 450;
        
        cnt++;     

        speed = 25;
    }    

    document.ontouchstart = function()
    {
        y -= 20;
                
        if (y <= -50)
           y = 450;
        
        cnt++;    

        speed = 25;
    }

    function draw()
    {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        if (y <= 350)
        {
            speed += 50 * timePassed;
            y += speed * timePassed;
        }

        if (y > 350)
            cnt = 0;

        context.clearRect(0, 0, 600, 400);
 
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();   

        context.font = "25px Arial";
        context.fillStyle = "white";
        context.fillText("Count: "+ cnt, 20, 30);

        requestAnimationFrame(draw);
    }

    draw();
}
