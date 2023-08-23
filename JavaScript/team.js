document.addEventListener("DOMContentLoaded", () => {
    let teams = document.getElementById("teams");
    teams.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = 'teams.html';
    });

    let start = document.getElementById("start");
    start.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = 'index.html';});
    let hostteam = document.getElementById("hostteam");
    hostteam.addEventListener("input", () => {
        const hostteam = document.getElementById("hostteam").value;
        localStorage.setItem("hostname", hostteam);
    });
    let visitorteam = document.getElementById("visitorteam");
    visitorteam.addEventListener("input", () => {
        const visitorteam = document.getElementById("visitorteam").value;
        localStorage.setItem('visitorname', visitorteam);
    });
});