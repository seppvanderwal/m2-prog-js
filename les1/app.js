class App
{
    runApplication()
    {
        console.log("Hello world!");
        let appnaam="appgame";
        let versienummer=2.3;
        let versiedatum= new Date("2022-11-22");
        let autheur="sepp";
        let copyright="henks games";
        let distributeur="epic game";
        let darkmode=true;
        console.log(appnaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();
