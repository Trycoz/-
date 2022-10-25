let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let count = 0
let passwordContainer1 = document.getElementById("passwordContainer1")
let passwordContainer2 = document.getElementById("passwordContainer2")
let passwordLengthValue = document.getElementById("customRange")
let clipboard = document.getElementById("clipboard").style.display = "none";


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
    console.log("avers")
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

function showPasswords() {
    let passwordsToShow = getRandomPasswords()
    passwordContainer1.textContent = passwordsToShow[0]
    passwordContainer2.textContent = passwordsToShow[1]
    clipboard = document.getElementById("clipboard").style.display = "block";
}



function updateTextInput(val) {
    document.getElementById('passwordLength').textContent = "Password length"
    document.getElementById('passwordLength').textContent += ": " + val;
}

function copyOnClipboard() {

    navigator.clipboard.writeText(passwordContainer1.textContent);

    // Alert the copied text
    alert("Copied the text: " + passwordContainer1.textContent);
}