let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let charactersWOsymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let charactersWOnumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let charactersWOsymbolsAndNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let count = 0
let passwordContainer1 = document.getElementById("passwordContainer1");
let passwordContainer2 = document.getElementById("passwordContainer2");
let passwordLengthValue = document.getElementById("customRange");
let clipboard = document.getElementById("clipboard").style.display = "none";
let clipboard2 = document.getElementById("clipboard2").style.display = "none";
let card1 = document.getElementById("passwordCard1").style.display = "none";
let card2 = document.getElementById("passwordCard2").style.display = "none";
let passwordSecurity = document.getElementById("passwordSecurity");
let toggleSymbol = document.getElementById("checkbox-symbols").checked;
let toggleNumber = document.getElementById("checkbox-numbers").checked;

let sliderColor = document.querySelector('input[name=rangeInput]::-webkit-slider-thumb');


//Funciones para generar las contraseñas al azar

function getRandomNumber(arrayToUse) {
    let number = Math.floor(Math.random() * (arrayToUse.length))
    return number
}

function getRandomCharacter(arrayToUse) {
    let index = getRandomNumber(arrayToUse)
    let character = arrayToUse[index]
    return character
}

function getRandomPasswords(arrayToUse) {
    let passwords = []
    let passwordLength = passwordLengthValue.value
    for (let j = 0; j < 2; j++) {
        let password = ""
        for (let i = 0; i < passwordLength; i++) {
            let newCharacter = getRandomCharacter(arrayToUse);
            password += newCharacter;
        }
        passwords.push(password)
    }
    return passwords

}

function getArray() {
    let arrayToUse = []
    if (document.getElementById("checkbox-symbols").checked === true && document.getElementById("checkbox-numbers").checked === true) {
        arrayToUse = characters
    } else if (document.getElementById("checkbox-symbols").checked === true && document.getElementById("checkbox-numbers").checked === false) {
        arrayToUse = charactersWOnumbers
    } else if (document.getElementById("checkbox-symbols").checked === false && document.getElementById("checkbox-numbers").checked === true) {
        arrayToUse = charactersWOsymbols
    } else {
        arrayToUse = charactersWOsymbolsAndNumbers
    }
    return arrayToUse
}

//Función para que el botón muestre las contraseñas

function showPasswords() {
    let arrayToUse = getArray()
    let passwordsToShow = getRandomPasswords(arrayToUse)
    passwordContainer1.textContent = passwordsToShow[0]
    passwordContainer2.textContent = passwordsToShow[1]
    clipboard = document.getElementById("clipboard").style.display = "block";
    clipboard2 = document.getElementById("clipboard2").style.display = "block";
    card1 = document.getElementById("passwordCard1").style.display = "block";
    card2 = document.getElementById("passwordCard2").style.display = "block";
}

//Función que actualiza el texto que indica la longitud de la contraseña

function updateTextInput(val) {
    document.getElementById('passwordLength').textContent = "Password length"
    document.getElementById('passwordLength').textContent += ": " + val;
    passwordSecurityText();
}

//Función para copiar la contraseñas al clipboard

function copyOnClipboard() {
    navigator.clipboard.writeText(passwordContainer1.textContent);
    alert("Copied the text: " + passwordContainer1.textContent);
}

function copyOnClipboard2() {
    navigator.clipboard.writeText(passwordContainer2.textContent);
    alert("Copied the text: " + passwordContainer2.textContent);
}

//Función para cambiar color seguridad contraseña y thumb

function passwordSecurityText() {
    let passwordLength = passwordLengthValue.value
    var thumbColor = document.querySelector('.form-range');
    if (passwordLength <= 7) {
        passwordSecurity.textContent = "Weak"
        passwordSecurity.style.color = "#ff0000"
        thumbColor.style.setProperty("--SliderColor", "hsl(0, 100%, 50%)")

    } else if (passwordLength <= 11) {
        passwordSecurity.textContent = "Medium"
        passwordSecurity.style.color = "#ffa200"
        thumbColor.style.setProperty("--SliderColor", "hsl(38, 100%, 50%)")
    } else {
        passwordSecurity.textContent = "Strong"
        passwordSecurity.style.color = "#51ff00"
        thumbColor.style.setProperty("--SliderColor", "hsl(101, 100%, 50%)")
    }
}

////Función para sidepanel
//function openNav() {
//    document.getElementById("mySidepanel").style.width = "250px";
//}
//
///* Set the width of the sidebar to 0 (hide it) */
//function closeNav() {
//    console.log("teste")
//    document.getElementById("mySidepanel").style.width = "0";
//}



