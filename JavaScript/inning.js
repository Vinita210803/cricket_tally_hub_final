// document.addEventListener('DOMContentLoaded', inning)

function inning()
{
    localStorage.getItem("savedData")
    // document.getElementById("inning").textContent = firstScore
    // console.log(firstScore)
    
    // clickRuns = savedData.clickRuns
    // console.log(clickRuns)

    // const firstScore = clickRuns
    // console.log(firstScore)
    // document.getElementById("inning").value = "End Inning"
    //     window.location.href = 'index.html'
    //     // console.log(firstScore)
    //     // if(value =="End Inning"){
    //          const secondScore = clickRuns
    //          console.log(secondScore)
        // }
        // console.log(savedData)
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
        }
    )}