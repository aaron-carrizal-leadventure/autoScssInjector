$(function() {
    $('.section-title .business-info-slogan').each(function() {
        const $old = $(this);
        const text = $old.text().trim();
        const mid = Math.ceil(text.length / 2);

        const firstPart = text.slice(0, mid);
        const secondPart = text.slice(mid);

        const $new = $('<div>')
            .append(document.createTextNode(firstPart))
            .append($('<span>').text(secondPart))
            .addClass($old.attr('class'));

        $old.replaceWith($new);
    });
});
