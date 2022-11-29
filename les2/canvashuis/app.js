class App
{
    runApplication()
    {
        console.log("Hello world!");
        let  canvas= document.getElementById("canvasId");
        let randomnum = Math.random();
        let g = canvas.getContext("2d");
        
        g.beginPath()
        g.fillStyle="red";
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill()
        g.beginPath()
        g.fillStyle="gray";
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()
        g.beginPath()
        g.fillStyle="gray";
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill()
        g.beginPath()
        g.fillStyle="gray";
        g.moveTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill()
        if(randomnum <=0.5){
            g.beginPath()
            g.fillStyle="yellow";
            g.moveTo(650,350);
            g.lineTo(705,230);
            g.lineTo(770,290);
            g.closePath();
            g.stroke();
            g.fill()
        }
        if(randomnum >=0.5){
            g.beginPath()
            g.fillStyle="black";
            g.moveTo(650,350);
            g.lineTo(705,230);
            g.lineTo(770,290);
            g.closePath();
            g.stroke();
            g.fill()
            }
        console.log(canvas);
    }
}

let app = new App();
app.runApplication();
