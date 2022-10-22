let homScore = 0
let guestScore = 0
let time = "12:00"
let bordeHomBool = false
let bodeGuestBool = false
let periodCounter = 1
let anime = false
let slam = false
let haikyuu = false
let timer;

let homCount = document.getElementById("count-hom")
let guestCount = document.getElementById("count-guest")
let timeString = document.getElementById("timer")
let scoreboard = document.getElementById("scoreboard")
let firstPeriodButton = document.getElementById("period-1")
let secondPeriodButton = document.getElementById("period-2")
let thirdPeriodButton = document.getElementById("period-3")
let fourthPeriodButton = document.getElementById("period-4")
let ayayaButton = document.getElementById("ayaya-button")
let musicaSlam = new Audio("media/SlamDunkAudio.mp3")
let musicaHaikyuu = new Audio("media/HaikyuuAudio.mp3")
musicaSlam.loop = "true"
musicaHaikyuu.loop = "true"

timeString.textContent = time

console.log(homCount)

//Funciones para añadir puntos a cada equipo

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

//Función para comenzar un nuevo juego

function restart() {
    homScore = 0
    guestScore = 0
    homCount.textContent = homScore
    guestCount.textContent = guestScore
    time = "12:00"
    timeString.textContent = time
    periodCounter = 1
    timer = 60 * 12;
    

}


//Función timer

function timerPeriod(duration, display) {
    timer = duration;
    var minutes, seconds
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
    }, 1000);
}

window.onload = function () {
    var twelveMinutes = 60 * 12,
        display = document.querySelector('#timer');
    timerPeriod(twelveMinutes, display);
};

//Funciones para cambiar el color de los bordes de los equipos y el timer

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

//Funciones para cambiar el color del borde de los períodos

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

//Función para cambiar el fondo y reproducir música

function ayaya() {
    if (anime == false && slam == true) {
        scoreboard.style.backgroundImage = 'url("media/SlamDunk.jpg")';
        ayayaButton.textContent = "AYAYA!!";
        anime = true;
        haikyuu = true;
        musicaSlam.play();
    } else if (anime == true && haikyuu == true) {
        scoreboard.style.backgroundImage = 'url("media/Haikyuu.jpg'
        ayayaButton.textContent = "Normie 🥱";
        anime = false
        haikyuu = false
        musicaSlam.pause();
        musicaHaikyuu.play();
        slam = false
    } else if (anime === false && haikyuu === false){
        scoreboard.style.backgroundColor = "#1B244A";
        scoreboard.style.backgroundImage = "none";
        musicaHaikyuu.pause();
        ayayaButton.textContent = "AYAYA";
        anime = false
        musicaSlam.pause();
        slam = true
    }
}

//Función para resaltar el período actual

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
