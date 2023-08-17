let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0,over=0
function run0Click()
{
    clickRuns=clickRuns+0;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run1Click()
{
    clickRuns=clickRuns+1;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    // Overs()
    // ballClick()
    // saveData()       //error
    // update()
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run2Click()
{
    clickRuns=clickRuns+2;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run3Click()
{
    clickRuns=clickRuns+3;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run4Click()
{
    clickRuns=clickRuns+4;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function run6Click()
{
    clickRuns=clickRuns+6;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}
function wideBallClick()
{
    clickRuns=clickRuns+1;
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    document.getElementById("wickets").value = "wicket"
}
function wicketClick()
{
    // document.getElementById("wickets").value = "wicket"
    if(clickWickets<10){
    clickWickets=clickWickets+1;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    ballClick()
    Overs()
    saveData()
    update()
    }
}
function noBallClick()
{
    clickRuns=clickRuns+1;
    alert("click corresponding runs obtained")
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    clickBall=clickBall-1;
    clickOvers = clickOvers - 0.1;
    clickWickets=clickWickets-1;
    document.getElementById("wickets").value="runout";
    // if(value = "runout"){
    //     document.getElementById("wickets").value = "wicket"
    // }
}

function ballClick()
{
    clickBall=clickBall+1;
    document.querySelector('.total-clickBalls').textContent = clickBall;
}

let history = []
function saveData() {
const state = {
    clickRuns,
    clickBall,
    clickWhiteBall,
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
    clickWhiteBall = previousState.clickWhiteBall
    clickOvers = previousState.clickOvers
    update();
}
}
function Overs(){
    if(clickBall<6){
        // countBall=countBall+1
        // clickOvers=(countBall/10)
        clickOvers = clickOvers + 0.1
        // console.log(clickOvers)
    }
    else{
        // countBall=0
        clickOvers = over + 1
        clickBall = 0
        over = over + 1
        // console.log(clickOvers)
    }
    document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
}


