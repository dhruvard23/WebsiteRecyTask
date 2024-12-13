document.addEventListener("DOMContentLoaded", function() {
    const previewButton = document.getElementById("preview-btn");

    const newYear = new Date('January 1, 2025 00:00:00');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = newYear - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").textContent = 
            `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    setInterval(updateCountdown, 1000);

    previewButton.addEventListener("click", function() {
        alert("Happy new year!");
    });
});
