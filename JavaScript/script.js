let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0,over=0

function run0Click()
{
    clickRuns=clickRuns+0;
    // document.querySelector('.total-clickRuns').textContent = clickRuns;
    // console.log("executing run0click",history,clickRuns,clickOvers,clickWickets,clickBall)
    ballClick()
    Overs()
    saveData()
    update()
    document.getElementById("wickets").value = "wicket"
}

function run1Click()
{
    clickRuns=clickRuns+1;
    // document.querySelector('.total-clickRuns').textContent = clickRuns;
    // console.log("executing run1click",history,clickRuns,clickOvers,clickWickets,clickBall)

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
    // console.log("executing run2click",history,clickRuns,clickOvers,clickWickets,clickBall)

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
    // console.log("executing run3click",history,clickRuns,clickOvers,clickWickets,clickBall)
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
    // console.log("executing run4click",history,clickRuns,clickOvers,clickWickets,clickBall)
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
    // console.log("executing run6click",history,clickRuns,clickOvers,clickWickets,clickBall)
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
    // console.log("executing wideballclick",history,clickRuns,clickOvers,clickWickets,clickBall)
    saveData()
    update()
}

function wicketClick()
{
    if(clickWickets<10){
    clickWickets=clickWickets+1;
    document.querySelector('.total-clickWickets').textContent = clickWickets;
    // console.log("executing wicketclick",history,clickRuns,clickOvers,clickWickets,clickBall)
    ballClick()
    Overs()
    saveData()
    update()
    }
}

// function noBallClick()
// {
//     clickRuns=clickRuns+1;
//     // alert("click corresponding runs obtained")
//     // // document.querySelector('.total-clickRuns').textContent = clickRuns;
//     // // if(clickBall>0){
//     // // clickBall=clickBall-1;
//     // // clickOvers = clickOvers - 0.1;
//     // // }
    
//     // // if(clickWickets>0){
//     // // clickWickets=clickWickets-1;
//     // // }
//     // // document.getElementById("wickets").value="runout";
//     // // console.log("executing noballclick",history,clickRuns,clickOvers,clickWickets,clickBall)
//     // saveData()
//     // update()
//     var bye = prompt("Hello Umpire This is bye" , "1")
//     switch(parseInt(bye))
//     {
//         case 0: 
//         clickRuns = clickRuns+0;
//         break;
//         case 1: 
//         clickRuns = clickRuns+1;
//         break;
//         case 2: 
//         clickRuns = clickRuns+2;
//         break;
//         case 3: 
//         clickRuns = clickRuns+3;
//         break;
//         case 4: 
//         clickRuns = clickRuns+4;
//         break;
//         case 6: 
//         clickRuns = clickRuns+6;
//         break;
//         default :
//         alert("Enter valid runs")
//         // clickBall = clickBall-1
//         // clickOvers = clickOvers-0.1
        
//     }
//     document.querySelector('.total-clickRuns').textContent = clickRuns;
//     ballClick()
//     Overs()
//     saveData()
//     update()

// }

function ballClick()
{
    clickBall=clickBall+1;
    // document.querySelector('.total-clickBalls').textContent = clickBall;
    // console.log("executing ballclick",history,clickRuns,clickOvers,clickWickets,clickBall)
}

let history = []
function saveData() {
    const state = {
        clickRuns,
        clickBall,
        // clickWhiteBall,
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
    // console.log("executing update",history,clickRuns,clickOvers,clickWickets,clickBall)

}

function Undo() {
    if (history.length>1){
        history.pop();
        const previousState = history[history.length-1];
        clickRuns = previousState.clickRuns
        clickBall = previousState.clickBall
        clickWickets = previousState.clickWickets
        // clickWhiteBall = previousState.clickWhiteBall
        clickOvers = previousState.clickOvers
        // console.log("executing undo",clickRuns,clickOvers,clickWickets,clickBall)
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
    document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
    // console.log("executing overs",history,clickRuns,clickOvers,clickWickets,clickBall)
}



