$(document).ready(function () {
    setTimeout(() => {
        $('.latest-arrivals .slick-track .slick-slide').each(function () {
            let slide = $(this);
            let itemMedia = slide.find('.itemMedia');
            let itemLink = itemMedia.find('a');

            let itemPrice = slide.find('.itemDetail .itemPrice');
            itemPrice.remove();

            let viewButton = $('<a>', {
                href: itemLink.attr('href'),
                text: 'View details',
                class: 'btn-view-details'
            });

            slide.find('.itemDetail').append(viewButton);

            // itemLink.find('img').after(itemPrice);
        });
    }, 1000);
});
