$(document).ready(function () {
    $('.specials .headerTitle').each(function () {
        let $header = $(this);
        let text = $header.text().trim();

        // Split the text into words
        let words = text.split(' ');

        // Ensure there are at least two words to modify
        if (words.length > 1) {
            // Encapsulate the first word in a span
            words[0] = `<span class="shop">${words[1]}</span>`;

            // Join the words back into a single string and update the h2
            $header.html(words.join(' '));
        }
    });
});