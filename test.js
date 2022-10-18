let homScore = 0
let guestScore = 0
let time = 60
let bordeHomBool = false
let bodeGuestBool = false


let homCount = document.getElementById("count-hom")
let guestCount = document.getElementById("count-guest")
let timeString = document.getElementById("timer")

timeString.textContent = time

console.log(homCount)



function plus1(equipo) {


    if (equipo == "hom") {
        homScore += 1;
        homCount.textContent = homScore;
    } else
        guestScore += 1;
    guestCount.textContent = guestScore;
}

function plus2(equipo) {
    if (equipo == "hom") {
        homScore += 2;
        homCount.textContent = homScore;
    } else
        guestScore += 2;
    guestCount.textContent = guestScore;

}

function plus3(equipo) {
    if (equipo == "hom") {
        homScore += 3;
        homCount.textContent = homScore;
    } else
        guestScore += 3;
    guestCount.textContent = guestScore;
}

function restart() {
    homScore = 0
    guestScore = 0
    homCount.textContent = homScore
    guestCount.textContent = guestScore
    time = 60
    timeString.textContent = time
}

function highlightHom() {
    homCount.style.borderColor = '#ffff00'
    guestCount.style.borderColor = '#1B244A'
    timeString.style.borderColor = '#1B244A'
}

function highlightGuest() {
    homCount.style.borderColor = '#1B244A'
    guestCount.style.borderColor = '#ffff00'
    timeString.style.borderColor = '#1B244A'
}

function highlightTimer() {
    homCount.style.borderColor = '#1B244A'
    guestCount.style.borderColor = '#1B244A'
    timeString.style.borderColor = '#ffff00'
}


let intervalo = setInterval(function timer() {
    time -= 1
    timeString.textContent = time

    if (time <= 0) {
        timeString.textContent = "00"
    }

}, 1000);

let highlightInterval = setInterval(function intervalTimer() {
    if (homScore > guestScore) {
        highlightHom()
    } else if (homScore < guestScore) {
        highlightGuest()
    } else if (homScore == guestScore) {
        highlightTimer()
    }
}, 100)