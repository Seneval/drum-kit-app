// Select all drum buttons
const buttons = document.querySelectorAll('.drum-button');

// Function to play sound based on the data-sound attribute
function playSound(soundId) {
    const audio = document.getElementById(soundId);
    if (audio) {
        audio.currentTime = 0; // Reset to the start
        audio.play();
    }
}

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.getAttribute('data-sound');
        playSound(soundId);
    });
});

// Add keydown event listener to trigger sounds with specific keys
document.addEventListener('keydown', (event) => {
    switch (event.key.toLowerCase()) {
        case 'a':
            playSound('kick');
            break;
        case 's':
            playSound('ride');
            break;
        case 'd':
            playSound('snare');
            break;
        case 'f':
            playSound('tom');
            break;
        case 'g':
            playSound('hihat');
            break;
    }
});
