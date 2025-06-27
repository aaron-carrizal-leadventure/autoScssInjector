$(document).ready(function () {
    $('.latest-arrivals .row .col-xs-12 .headerTitle').each(function () {
        // Create the new anchor element
        const $link = $('<a>', {
            href: '/search/inventory',
            class: 'btn-primary',
            text: 'View All units',
        });

        // Replace the h2 element with the newly created anchor
        $(this).replaceWith($link);
    });
});