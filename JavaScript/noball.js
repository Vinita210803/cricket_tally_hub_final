function noBallClick()
{
    clickRuns=clickRuns+1;
    // alert("click corresponding runs obtained")
    // // document.querySelector('.total-clickRuns').textContent = clickRuns;
    // // if(clickBall>0){
    // // clickBall=clickBall-1;
    // // clickOvers = clickOvers - 0.1;
    // // }
    
    // // if(clickWickets>0){
    // // clickWickets=clickWickets-1;
    // // }
    // // document.getElementById("wickets").value="runout";
    // // console.log("executing noballclick",history,clickRuns,clickOvers,clickWickets,clickBall)
    // saveData()
    // update()
    var bye = prompt("Hello Umpire This is no ball" , "Enter the run for free hit")
    switch(parseInt(bye))
    {
        case 0: 
        clickRuns = clickRuns+0;
        break;
        case 1: 
        clickRuns = clickRuns+1;
        break;
        case 2: 
        clickRuns = clickRuns+2;
        break;
        case 3: 
        clickRuns = clickRuns+3;
        break;
        case 4: 
        clickRuns = clickRuns+4;
        break;
        case 6: 
        clickRuns = clickRuns+6;
        break;
        default :
        alert("Enter valid runs")
        // clickBall = clickBall-1
        // clickOvers = clickOvers-0.1
        
    }
    document.querySelector('.total-clickRuns').textContent = clickRuns;
    ballClick()
    Overs()
    saveData()
    update()

}