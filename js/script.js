// JavaScript to handle start and stop actions
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const sampleText = document.getElementById('sample-text');

const sampleTexts = {
    easy: ["The quick brown fox jumps over the lazy dog."],
    medium: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
    hard: ["Sphinx of black quartz, judge my vow."]
};

function getRandomText(difficulty) {
    const texts = sampleTexts[difficulty];
    return texts[Math.floor(Math.random() * texts.length)];
}

startButton.addEventListener('click', () => {
    sampleText.textContent = getRandomText('easy'); // Change 'easy' to desired difficulty
    startButton.classList.add('hidden');
    stopButton.classList.remove('hidden');
});

stopButton.addEventListener('click', () => {
    sampleText.textContent = 'Press start to see the sample text.';
    startButton.classList.remove('hidden');
    stopButton.classList.add('hidden');
});
