let clickRuns = 0, clickWickets = 0, clickBall = 0, clickWhiteBall=0, countBall=0, clickOvers=0,over=0
// function declareClick(){
//     document.querySelector('.total-clickRuns').textContent = clickRuns;
//     document.querySelector('.total-clickWickets').textContent = clickWickets;
//     document.querySelector('.total-clickBalls').textContent = clickBall;
//     document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
// }

// declare.js

// Check if localStorage is supported by the browser
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    if (typeof(Storage) !== "undefined") {
        // Load saved data from localStorage when the page loads
        console.log("abcccc");
        if (localStorage.getItem("savedData")) {
            console.log("localstorage")
            const savedData = JSON.parse(localStorage.getItem("savedData"));
            console.log("savedata",savedData)
            clickRuns = savedData.clickRuns;
            clickWickets = savedData.clickWickets;
            clickBall = savedData.clickBall;
            clickOvers = savedData.clickOvers;
            console.log("clickruns"+clickRuns,clickWickets,clickBall,clickOvers)
            update1();
            
        }
    }
});

function update1(){
    console.log("update1"+clickRuns,clickWickets,clickBall,clickOvers)
    console.log(document)
    document.querySelector('.total-clickRuns1').textContent = clickRuns;
    document.querySelector('.total-clickWickets1').textContent = clickWickets;
    // document.querySelector('.total-clickBalls1').textContent = clickBall;
    // document.querySelector('.total-overs').textContent = clickOvers.toFixed(1);
    
}
function clearSavedData() {
    localStorage.removeItem("savedData");
}

// function saveData() {
//     const state = {
//         clickRuns,
//         clickBall,
//         clickWickets,
//         clickOvers
//     }
//     history.push(state);
//     localStorage.setItem("savedData", JSON.stringify(state));
// }
