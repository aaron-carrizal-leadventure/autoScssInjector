$(document).ready(function () {
    // Array of image URLs
    const imageUrls = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
    ];

    // Initial index
    let currentIndex = 0;

    // Function to change the background
    function changeBackground() {
        // Select the element with the 'heroshot' class
        const $heroshot = $('.heroshot');

        // Update the background using the current index
        $heroshot.css('background-image', `url(${imageUrls[currentIndex]})`);

        // Update the index to cycle through the images
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }

    // Change the background every 5 seconds
    setInterval(changeBackground, 5000);

    // Initialize the background
    changeBackground();
});