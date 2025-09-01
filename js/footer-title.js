$(document).ready(function() {
    const data = [
        {
            selector: ".footer .ari-column.a",
            text: "Contact Us"
        },
        {
            selector: ".footer .ari-column.b",
            text: "Contact Us"
        },
        {
            selector: ".footer .ari-column.c",
            text: "Quick Links"
        },
        {
            selector: ".footer .ari-column.d",
            text: "Connect"
        }
    ];

    data.forEach(function(item) {
        const $el = $(item.selector);
        if ($el.length) {
            const $h3 = $("<h3>", {
                "class": "footer-title",
                text: item.text
            });
            $el.prepend($h3);
        }
    });
});