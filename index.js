// Liste de syllabes extraterrestres fictives
const alienSyllables = [
    "Zor", "Vor", "Gex", "Plu", "Klur", "Nyx", "Quil", "Jiv", "Fop", "Brak", "Dax", "Fuuuu",
    "Tril", "Yon", "Mik", "Zin", "Spaz", "Hib", "Crov", "Glar", "Thar", "Flim", "Zizi", "Cako", "Brinou", "Jizs", "Qwote"
];


const alienCharacters = ["⌇", "⌂", "⊙", "⋂", "⏉", "⍋", "⋆", "⌣", "⌠", "⋔"];

const sounds = ["élément 1", "élément 2", "élément 3", "élément 4"];
// Fonction pour générer un mot extraterrestre
function displayAlienWord() {
    const wordLength = Math.floor(Math.random() * 5) + 3; // Entre 3 et 7 caractères
    let alienWord = "";

    for (let i = 0; i < wordLength; i++) {
        const randomChar = alienCharacters[Math.floor(Math.random() * alienCharacters.length)];
        alienWord += randomChar;
    }

    return alienWord;
}

// Fonction pour générer un mot extraterrestre
function generateAlienWord() {
    const wordLength = Math.floor(Math.random() * 3) + 2; // Entre 2 et 4 syllabes
    let alienWord = "";

    for (let i = 0; i < wordLength; i++) {
        const randomSyllable = alienSyllables[Math.floor(Math.random() * alienSyllables.length)];
        alienWord += randomSyllable;
    }

    return alienWord;
}

// Fonction pour prononcer le mot extraterrestre à haute voix
function speakAlienWord() {
    const alienImage = document.getElementById("alienImage");
    const alienSound = document.getElementById("alienSound");
    var tamere = "loading.gif";
    alienImage.src = tamere;

    const alienWord = generateAlienWord();
    const alienWordDisplay = displayAlienWord();

    const utterance = new SpeechSynthesisUtterance(alienWord);
    utterance.voice = speech_voices[indexVoice]; //9 ou 15 japonais ou 16
    window.speechSynthesis.speak(utterance);

    const alienWordElement = document.getElementById("alienWord");
    alienWordElement.textContent = `${alienWordDisplay}`;
    alienWordElement.title = `${(alienWord)}`;

    // Afficher l'image correspondante
    var tamere = "https://robohash.org/" + alienWord + ".png?bgset=any";
    alienImage.src = tamere; // Supposons que les images portent des noms en minuscules


    var soundTamere = getRandomNumberBetween1And9();
    alienSound.src = "MasterJizs/" + soundTamere + ".mp3"; // Assurez-vous que les fichiers son sont dans un répertoire "sounds"


}

function getRandomNumberBetween1And9() {
    const min = 1;
    const max = 7;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let indexVoice = 9;
var speech_voices;
if ('speechSynthesis' in window) {
  speech_voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = function() {
    speech_voices = window.speechSynthesis.getVoices();
  };
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", speakAlienWord);

const alienImage = document.getElementById("alienImage");
alienImage.addEventListener("click", function () {
    const alienSound = document.getElementById("alienSound");
    alienSound.currentTime = 0; // Réinitialise le son au début
    alienSound.volume = 0.1;
    alienSound.play(); // Lancez la lecture du son
});

const voiceSwitch = document.getElementById('voiceSwitch');

voiceSwitch.addEventListener('change', function () {
    if (this.checked) {
        indexVoice = 15;
    } else {
        indexVoice = 9;
    }
});