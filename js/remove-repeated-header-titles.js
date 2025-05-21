const titles = ['Title 1', 'Title 2', ];

$(document).ready(function () {
    titles.forEach(title => {
        const menu = $(`.nav .dropdown:contains('${title}')`);
        const firstChildLink = menu.find(".dropdown-menu .dropdown-link").first();

        if (firstChildLink.length) {
            const href = firstChildLink.attr("href");
            const parentLink = menu.find(".root-link");
            parentLink.attr("href", href);
            parentLink.removeAttr("data-toggle");
            firstChildLink.parent().remove();
        }
    });
});