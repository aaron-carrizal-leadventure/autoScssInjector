$(document).ready(function () {
    $('.latest-arrivals .section-title .business-info-slogan,  .aboutus .section-title .business-info-slogan').each(function () {
        let $header = $(this);
        let text = $header.text().trim();

        // Split the text into words
        let words = text.split(' ');

        // Ensure there are at least two words to modify
        if (words.length > 1) {
            // Encapsulate the second word in a span
            words[1] = `<span>${words[1]}</span>`;

            // Join the words back into a single string and update the h2
            $header.html(words.join(' '));
        }
    });
});