let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let count = 0
let passwordContainer1 = document.getElementById("passwordContainer1")
let passwordContainer2 = document.getElementById("passwordContainer2")
let passwordLengthValue = document.getElementById("customRange")
let clipboard = document.getElementById("clipboard").style.display = "none";
let clipboard2 = document.getElementById("clipboard2").style.display = "none";
let card1 = document.getElementById("passwordCard1").style.display = "none";
let card2 = document.getElementById("passwordCard2").style.display = "none";

//Funciones para generar las contraseñas al azar

function getRandomNumber() {
    let number = Math.floor(Math.random() * (characters.length))
    return number
}

function getRandomCharacter() {
    let index = getRandomNumber()
    let character = characters[index]
    return character
}

function getRandomPasswords() {
    let passwords = []
    let passwordLength = passwordLengthValue.value
    for (let j = 0; j < 2; j++) {
        let password = ""
        for (let i = 0; i < passwordLength; i++) {
            let newCharacter = getRandomCharacter();
            password += newCharacter;
        }
        passwords.push(password)
    }
    return passwords

}

//Función para que el botón muestre las contraseñas

function showPasswords() {
    let passwordsToShow = getRandomPasswords()
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

