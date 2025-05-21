$(document).ready(function () {
    $('.header').each(function () {
        let $header = $(this);
        const $navButton = $header.find('#primary-nav-1-toggler');
        if ($navButton.length) {
            const $menuLabelDiv = $('<div>', { class: 'menu-label' });
            const $menuLabelText = $('<p>').text('Menu');
            $menuLabelDiv.append($menuLabelText);
            $navButton.after($menuLabelDiv);
        }

    });
});

