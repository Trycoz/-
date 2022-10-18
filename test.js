let homScore = 0
let guestScore = 0
let time = 60
let bordeHomBool = false
let bodeGuestBool = false
let periodCounter = 1
let anime = false


let homCount = document.getElementById("count-hom")
let guestCount = document.getElementById("count-guest")
let timeString = document.getElementById("timer")
let fondo = document.getElementById("fondo")
let firstPeriodButton = document.getElementById("period-1")
let secondPeriodButton = document.getElementById("period-2")
let thirdPeriodButton = document.getElementById("period-3")
let fourthPeriodButton = document.getElementById("period-4")
let ayayaButton = document.getElementById("ayaya-button")

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

//Botón para iniciar un nuevo partido

function restart() {
    homScore = 0
    guestScore = 0
    homCount.textContent = homScore
    guestCount.textContent = guestScore
    time = 60
    timeString.textContent = time
    periodCounter = 1
}

//Función antigua timer

/* let intervalo = setInterval(function timer() {
    time -= 1
    timeString.textContent = time

    if (time <= 0) {
        timeString.textContent = "00"
    }

}, 1000);
*/

//Función timer con minutos y segundos

function timerPeriod(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        if (minutes + ":" + seconds == "00:00") {
            periodCounter += 1
        }

        if (periodCounter > 4) {
            display.textContent = "END"
        }
    }, 10);
}

window.onload = function () {
    var twelveMinutes = 60 * 12,
        display = document.querySelector('#timer');
    timerPeriod(twelveMinutes, display);
};

//Funciones para resaltar ganador
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

let highlightInterval = setInterval(function intervalTimer() {
    if (homScore > guestScore) {
        highlightHom()
    } else if (homScore < guestScore) {
        highlightGuest()
    } else if (homScore == guestScore) {
        highlightTimer()
    }
}, 100)

//Función para resaltar el período actual del partido

function highlightPeriod1() {
    firstPeriodButton.style.borderColor = '#ffff00'
    secondPeriodButton.style.borderColor = '#9AABD8'
    thirdPeriodButton.style.borderColor = '#9AABD8'
    fourthPeriodButton.style.borderColor = '#9AABD8'
}

function highlightPeriod2() {
    firstPeriodButton.style.borderColor = '#9AABD8'
    secondPeriodButton.style.borderColor = '#ffff00'
    thirdPeriodButton.style.borderColor = '#9AABD8'
    fourthPeriodButton.style.borderColor = '#9AABD8'
}

function highlightPeriod3() {
    firstPeriodButton.style.borderColor = '#9AABD8'
    secondPeriodButton.style.borderColor = '#9AABD8'
    thirdPeriodButton.style.borderColor = '#ffff00'
    fourthPeriodButton.style.borderColor = '#9AABD8'
}

function highlightPeriod4() {
    firstPeriodButton.style.borderColor = '#9AABD8'
    secondPeriodButton.style.borderColor = '#9AABD8'
    thirdPeriodButton.style.borderColor = '#9AABD8'
    fourthPeriodButton.style.borderColor = '#ffff00'
}

function highlightEndMatch() {
    firstPeriodButton.style.borderColor = '#9AABD8'
    secondPeriodButton.style.borderColor = '#9AABD8'
    thirdPeriodButton.style.borderColor = '#9AABD8'
    fourthPeriodButton.style.borderColor = '#9AABD8'
}

function ayaya() {
    if (anime == false) {
        fondo.style.backgroundImage = 'url("SlamDunk.jpg")';
        ayayaButton.textContent = "Normie";
        anime = true;
    } else if (anime == true) {
        fondo.style.backgroundImage = "none"
        fondo.style.backgroundColor = "#1B244A";
        ayayaButton.textContent = "AYAYA";
        anime = false
    }
}

let highlightPeriod = setInterval(function intervalPeriod() {
    if (periodCounter == 1) {
        highlightPeriod1()
    } else if (periodCounter == 2) {
        highlightPeriod2()
    } else if (periodCounter == 3) {
        highlightPeriod3()
    } else if (periodCounter == 4) {
        highlightPeriod4()
    } else {
        highlightEndMatch()
    }
}, 100)
