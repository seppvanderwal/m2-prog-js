
class App
{
    runApplication()
    {
        //dit is code commentaar voor javascript
        let title = document.getElementById("newstitle");
        let randomnum = Math.random();
        console.log(randomnum);
        if(randomnum == 0)
        {
            console.log("num is 0");
            title.style.backgroundColor="#2700FF";
        } 
        else if(randomnum < 0.2)
        {
            console.log("num is kleiner dan 0.2");
            title.style.backgroundColor="#C900FF";
        } 
        else if(randomnum <= 0.6 && randomnum >= 0.2)
        {
            console.log("num is tussen 0.2 en 0.6")
            title.style.backgroundColor="#00ff00";
        } 
        else if(randomnum > 0.6)
        {
            title.style.backgroundColor="#ff0000";
            console.log("num is boven 0.6")
        }
        
    }
}

let app = new App();
app.runApplication();
