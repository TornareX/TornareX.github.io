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
	var tamere = "loading.gif"; 
    alienImage.src = tamere;

    const alienWord = generateAlienWord();
    const alienWordDisplay = displayAlienWord();
    const utterance = new SpeechSynthesisUtterance(alienWord);
    window.speechSynthesis.speak(utterance);
    
    const alienWordElement = document.getElementById("alienWord");
    alienWordElement.textContent = `${alienWordDisplay} ----- ${(alienWord)}`;
	
	 // Afficher l'image correspondante
	var tamere = "https://robohash.org/" + alienWord + ".png"; 
    alienImage.src = tamere; // Supposons que les images portent des noms en minuscules
	
	
	const alienSound = document.getElementById("alienSound");
	var soundTamere = getRandomNumberBetween1And9();
    alienSound.src = "MasterJizs/" + soundTamere + ".mp3"; // Assurez-vous que les fichiers son sont dans un répertoire "sounds"


}

function getRandomNumberBetween1And9() {
    const min = 1;
    const max = 7;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", speakAlienWord);

const alienImage = document.getElementById("alienImage");
alienImage.addEventListener("click", function() {
    const alienSound = document.getElementById("alienSound");
	alienSound.currentTime = 0; // Réinitialise le son au début
    alienSound.volume = 0.1;
    alienSound.play(); // Lancez la lecture du son
});