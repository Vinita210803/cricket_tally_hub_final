let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0,over=0
function run0Click()
{
    clickRuns=clickRuns+0;
    ballClick()
    Overs()
    saveData()
    update()
}
function run1Click()
{
    clickRuns=clickRuns+1;    
    ballClick()
    Overs()
    saveData()
    update()
    // document.getElementById("wickets").value = "wicket"
}
function run2Click()
{
    clickRuns=clickRuns+2;   
    ballClick()
    Overs()
    saveData()
    update()
}

function run3Click()
{
    clickRuns=clickRuns+3;
    ballClick()
    Overs()
    saveData()
    update()
}

function run4Click()
{
    clickRuns=clickRuns+4;
    ballClick()
    Overs()
    saveData()
    update()
}
function run5Click()
{
    clickRuns=clickRuns+5;
    ballClick()
    Overs()
    saveData()
    update()
}

function run6Click()
{
    clickRuns=clickRuns+6;
    ballClick()
    Overs()
    saveData()
    update()
}

function wideBallClick()
{
    clickRuns=clickRuns+1;
    saveData()
    update()
}

function wicketClick()
{
    if(clickWickets<10){
        clickWickets=clickWickets+1;
        ballClick()
        Overs()
        saveData()
        update()
    }
}


function ballClick()
{
    clickBall=clickBall+1;
}

let history = []
function saveData() {
    const state = {
        clickRuns,
        clickBall,
        clickWickets,
        clickOvers
    }
    history.push(state)
}

function update() {
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    document.querySelector('.total-clickBalls').textContent = clickBall;
    document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
    
}

function Undo() {
    if (history.length>1){
        history.pop();
        const previousState = history[history.length-1];
        clickRuns = previousState.clickRuns
        clickBall = previousState.clickBall
        clickWickets = previousState.clickWickets
        clickOvers = previousState.clickOvers
        update();
    }
}


function Overs(){
    if(clickBall<6){
        clickOvers = clickOvers + 0.1
    }
    else{
        clickOvers =parseInt(clickOvers)+1
        clickBall = 0
    }
}




// Check if localStorage is supported by the browser
if (typeof(Storage) !== "undefined") {
        // Function to save data to localStorage
        function saveData() {
            const state = {
                clickRuns,
                clickBall,
                clickWickets,
                clickOvers
            }
            history.push(state);
            localStorage.setItem("savedData", JSON.stringify(state));
        }
        
        // Function to clear saved data from localStorage
        
    }
    
    const battingTeam = localStorage.getItem("hostname")
    document.getElementById("batting").textContent = battingTeam
    const batting = document.getElementById("batting");
    const storedHostName = localStorage.getItem("hostname");
    if (storedHostName) {
        batting.textContent = storedHostName;
    }
    
    const balling = document.getElementById("balling");
    const storedVistorName = localStorage.getItem("visitorname");
    if(storedVistorName) {
       balling.textContent = storedVistorName;
    }