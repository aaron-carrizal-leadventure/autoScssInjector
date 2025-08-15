$(document).ready(function () {
    function initializeMegaNav(title, imageUrls, removeFirstItem, meganavClass) {
        const normalizedTitle = title.trim().toLowerCase();

        const rootLink = $('a.root-link').filter(function () {
            return $(this).text().trim().toLowerCase() === normalizedTitle;
        });

        const dropdownMenu = rootLink.closest('li.dropdown.auto-drop').find('.dropdown-menu');
        dropdownMenu.addClass(meganavClass);

        if (dropdownMenu.length > 0) {
            let listItems = dropdownMenu.find('li');

            if (removeFirstItem && listItems.length > 0) {
                listItems.first().remove();
            }

            listItems = dropdownMenu.find('li');

            listItems.each(function (index) {
                const anchor = $(this).find('a').first();
                const link = anchor.attr('href') || '#';
                const text = anchor.text().trim();
                const imgSrc = imageUrls[index] || '';


                const $card = $('<div>').addClass('card');
                const $newLink = $('<a>').attr({ href: link, title: text });
                const $img = $('<img>').attr('src', imgSrc).attr('alt', text);
                const $p = $('<p>').text(text);

                $newLink.append($img, $p);
                $card.append($newLink);
                $(this).append($card);
            });
        }
    }

    const imageUrls = [
        '//cdnmedia.endeavorsuite.com/images/organizations/5e5d026e-2746-4f72-bab4-2afd84cf9da3/cta-1/cta-1.png',
    ];

    initializeMegaNav("All Inventory", imageUrls, true, 'meganav');
});
