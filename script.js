document.addEventListener('DOMContentLoaded', function () {
    // Get the audio element
    var backgroundMusic = document.getElementById('toggleMusicButton');
    
    // Get the toggle button
    var toggleButton = document.getElementById('toggleMusic');
    
    // Add event listener to toggle button
    toggleButton.addEventListener('click', function () {
        // If music is paused, play it. If playing, pause it.
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggleButton.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            toggleButton.textContent = 'Play Music';
        }
    function toggleMusic() {
    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
	});
});
