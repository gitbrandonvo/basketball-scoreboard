//button functions

let currentScoreHome = 0
let currentScoreGuest = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
homeScore.textContent = currentScoreHome;
guestScore.textContent = currentScoreGuest;

function incrHomeScore(value){
    let incrementBy = parseInt(value);
    currentScoreHome += incrementBy;
    homeScore.textContent = currentScoreHome;
    currentLeadingTeam();
}

function incrGuestScore(value){
    let incrementBy = parseInt(value);
    currentScoreGuest += incrementBy;
    guestScore.textContent = currentScoreGuest;
    currentLeadingTeam();
}

//Challenges

function newGame() {
    currentScoreHome = 0;
    currentScoreGuest = 0;
    homeScore.textContent = currentScoreHome;
    guestScore.textContent = currentScoreGuest;
    currentLeadingTeam();
}

let leadingTeam = document.getElementById("leading-team");

function currentLeadingTeam() {
    if (currentScoreHome > currentScoreGuest) {
        leadingTeam.textContent = "Home";
    } else if (currentScoreGuest > currentScoreHome) {
        leadingTeam.textContent = "Guest";
    } else {
        leadingTeam.textContent = "Neither";
    }
}