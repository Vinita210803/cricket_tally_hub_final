let firstScore = 0,secondScore = 0,maxScore = 0;
function inning(){
    if(document.getElementById("inning").value === "inning"){
        const previousState = history[history.length-1];
        firstScore = previousState.clickRuns
        console.log(firstScore)
        document.getElementById("inning").value = "endInning"
        clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0,over=0
        document.querySelector('.total-clickRuns').textContent = clickRuns;
        document.querySelector('.total-clickWickets').textContent = clickWickets;
        document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
        document.querySelector('.total-clickBalls').textContent = clickBall;
    }
    else{
        const previousState = history[history.length-1];
        secondScore = previousState.clickRuns
        console.log(secondScore)
        if(firstScore > secondScore){
            maxScore = firstScore
            console.log("more score is " , maxScore)
        }
        else{
            maxScore = secondScore
            console.log("more score is ", maxScore)
        }
        // window.location.href = 'declare.html'
    }
    
}