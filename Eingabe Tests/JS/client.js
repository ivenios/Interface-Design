var eingabeTest;
(function (eingabeTest) {
    let typedMessage = "";
    let sentMessage = [];
    let morseMessage = "";
    let morseCode = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": "--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        " ": "/",
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "/": "-..-.",
        "test": "l"
    };
    addEventListener("DOMContentLoaded", init);
    function init() {
        addEventListener("keydown", logkey);
        document.getElementById("myBtn").addEventListener("click", translator);
        console.log("hey");
    }
    function logkey(_event) {
        console.log("key was pressed");
        typedMessage += _event.key;
        console.log(typedMessage);
        document.getElementById("htmlOutput").innerHTML = "";
        document.getElementById("htmlOutput").innerHTML = typedMessage;
    }
    function translator() {
        sentMessage.push(typedMessage);
        let tempLetterArray = [];
        //aus strng array machen 
        tempLetterArray = typedMessage.split("");
        console.log(tempLetterArray);
        //Array durch gehen und Buchstaben in Morse Code übersetzten 
        for (let i = 0; i <= tempLetterArray.length; i++) {
            console.log(tempLetterArray[i]);
            let letter = tempLetterArray[i];
            switch (letter) {
                case " ":
                    morseMessage += " / ";
                    break;
                case "a":
                    morseMessage += " .- ";
                    break;
                case "b":
                    morseMessage += " -... ";
                    break;
                case "c":
                    morseMessage += " -.-. ";
                    break;
                case "d":
                    morseMessage += " -.. ";
                    break;
                case "e":
                    morseMessage += " . ";
                    break;
                case "f":
                    morseMessage += " ..-. ";
                    break;
                case "g":
                    morseMessage += " --. ";
                    break;
                case "h":
                    morseMessage += " .... ";
                    break;
                case "i":
                    morseMessage += " .. ";
                    break;
                case "j":
                    morseMessage += " .--- ";
                    break;
                case "k":
                    morseMessage += " -.- ";
                    break;
                case "l":
                    morseMessage += " .-.. ";
                    break;
                case "m":
                    morseMessage += " -- ";
                    break;
                case "n":
                    morseMessage += " -. ";
                    break;
                case "o":
                    morseMessage += " --- ";
                    break;
                case "p":
                    morseMessage += " .--. ";
                    break;
                case "q":
                    morseMessage += " --.- ";
                    break;
                case "r":
                    morseMessage += " .-. ";
                    break;
                case "s":
                    morseMessage += " ... ";
                    break;
                case "t":
                    morseMessage += " - ";
                    break;
                case "u":
                    morseMessage += " ..- ";
                    break;
                case "v":
                    morseMessage += " ...- ";
                    break;
                case "w":
                    morseMessage += " -- ";
                    break;
                case "x":
                    morseMessage += " -..- ";
                    break;
                case "y":
                    morseMessage += " -.-- ";
                    break;
                case "z":
                    morseMessage += " --.. ";
                    break;
                case "0":
                    morseMessage += " ----- ";
                    break;
                case "1":
                    morseMessage += " .---- ";
                    break;
                case "2":
                    morseMessage += " ..--- ";
                    break;
                case "3":
                    morseMessage += " ...-- ";
                    break;
                case "4":
                    morseMessage += " ....- ";
                    break;
                case "5":
                    morseMessage += " ..... ";
                    break;
                case "6":
                    morseMessage += " -.... ";
                    break;
                case "7":
                    morseMessage += " --... ";
                    break;
                case "8":
                    morseMessage += " ---.. ";
                    break;
                case "9":
                    morseMessage += " ----. ";
                    break;
            }
        }
        document.getElementById("morseOutput").innerHTML = " ";
        //document.getElementById("htmlOutput").innerHTML = "";
        document.getElementById("morseOutput").innerHTML = morseMessage;
        typedMessage = "";
        // nachricht gesondert speichern und senden
    }
})(eingabeTest || (eingabeTest = {}));
//# sourceMappingURL=client.js.map