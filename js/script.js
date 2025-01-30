// JavaScript to handle start and stop actions
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const retryButton = document.getElementById('retry-button');
const sampleText = document.getElementById('sample-text');
const typingInput = document.getElementById('typing-input');
const result = document.getElementById('result');
const difficultySelect = document.getElementById('difficulty-select');

let startTime;

const sampleTexts = {
    easy: [
        "The quick brown fox jumps over the lazy dog.",
        "Pack my box with five dozen liquor jugs.",
        "How razorback-jumping frogs can level six piqued gymnasts!",
        "Jackdaws love my big sphinx of quartz.",
        "The five boxing wizards jump quickly.",
        "Bright vixens jump; dozy fowl quack."
    ],
    medium: [
        "She sells seashells by the seashore.",
        "Peter Piper picked a peck of pickled peppers.",
        "A big black bear sat on a big black rug.",
        "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
        "I scream, you scream, we all scream for ice cream.",
        "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair."
    ],
    hard: [
        "Sphinx of black quartz, judge my vow.",
        "The five boxing wizards jump quickly.",
        "Jinxed wizards pluck ivy from the big quilt.",
        "Crazy Fredrick bought many very exquisite opal jewels.",
        "We promptly judged antique ivory buckles for the next prize.",
        "A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent."
    ]
};

function getRandomText(difficulty) {
    const texts = sampleTexts[difficulty];
    return texts[Math.floor(Math.random() * texts.length)];
}

startButton.addEventListener('click', () => {
    const difficulty = difficultySelect.value;
    sampleText.textContent = getRandomText(difficulty);
    startButton.classList.add('hidden');
    stopButton.classList.remove('hidden');
    typingInput.classList.remove('hidden');
    typingInput.value = '';
    typingInput.focus();
    startTime = new Date();
});

stopButton.addEventListener('click', () => {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // time in seconds
    const typedText = typingInput.value;
    const wordsPerMinute = (typedText.split(' ').length / timeTaken) * 60;
    result.textContent = `Time taken: ${timeTaken.toFixed(2)} seconds. Speed: ${wordsPerMinute.toFixed(2)} WPM.`;
    stopButton.classList.add('hidden');
    retryButton.classList.remove('hidden');
    typingInput.classList.add('hidden');
});

retryButton.addEventListener('click', () => {
    sampleText.textContent = 'Press start to see the sample text.';
    startButton.classList.remove('hidden');
    retryButton.classList.add('hidden');
    result.textContent = '';
});
