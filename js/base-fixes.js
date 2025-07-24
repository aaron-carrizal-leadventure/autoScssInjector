/* REMOVE EMPTY CONTACT US FIELDS */

$(document).ready(function () {
    // Check if the current URL path is /contactus
    if (window.location.pathname === '/contactus') {

        // Select the email container
        $('div.contactHero-info-email').each(function () {
            // Find the email link within the container
            const emailLink = $(this).find('a[href^="mailto:"]');

            // Check if the link is empty
            if (!emailLink.attr('href') || emailLink.attr('href') === 'mailto: ') {
                // Hide the entire parent div
                $(this).parent().hide();
            }
        });

         // Select the hours container
        $('div.contactHero-info-hours').each(function () {
            // Check if the container is empty or contains only the label
            if ($.trim($(this).text()) === 'Hours:') {
                // Hide the entire parent div
                $(this).parent().hide();
            }
        });
    }
});

/* REMOVE REPEATED NAVBAR LINKS */

const titles = ['Title 1', 'Title 2', ];

$(document).ready(function () {
    titles.forEach(title => {
        const menu = $(`.nav .dropdown:contains('${title}')`);
        const firstChildLink = menu.find(".dropdown-menu .dropdown-link").first();

        if (firstChildLink.length) {
            const href = firstChildLink.attr("href");
            const parentLink = menu.find(".root-link");
            parentLink.attr("href", href);
            // parentLink.removeAttr("data-toggle");
            firstChildLink.parent().remove();
        }
    });
});


/* REMOVE TAILING DASHES ON HOURS COMPONENT */

$(document).ready(function () {
    $('time[itemprop="openHours"]').each(function () {
        const timeRange = $(this).find('.timeRange');
        if (timeRange.text().includes('-') && !/\d{1,2}:\d{2}\s?(a\.m\.|p\.m\.)/i.test(timeRange.text())) {
            timeRange.text(timeRange.text().replace(/-\s*$/, '').trim());
        }
    });
});


/* ADD MENU LABEL TO MOBILE NAVBAR */

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

/* FIX YOUTUBE LOGO ON /LOCATIONS */

$(document).ready(function() {
    if (window.location.pathname === '/locations') {
        $('i.fa.fa-2x.fa-fw.fa-youtube-play').css({
            'background-color': 'red',
            'width': '50px',
            'height': '50px',
            'color': 'white',
            'line-height': '50px'
        });
    }
});


/* VARIABLE FOOTER PADDING */

$(document).ready(function() {
    if ($('button.btn.btn-primary.btn-block.cant-find-button').length) {
        $('.footer').css({
            'padding': '5vh 0 10vh 0',
            'important': 'true'
        });
    }
});


/* FIX DIRECTIONS LINKS */

setTimeout(function() {
        $("a.location-directions").attr('target', '_blank');
    }, 1000);



/*  FIX HOURS ON /CONTACTUS */


$(document).ready(() => {
    if (window.location.pathname === "/contactus") {
        const $target = $(".component.Hours_1-0-0.ari-componentinstance");
        if ($target.length && $target.find("#hours").length) {
            $target.css("display", "block");
        }
    }
});


/* FIX HOURS ON /LOCATIONS */


$(document).ready(() => {
    if (window.location.pathname === "/locations") {
        const targetDays = ["Saturday", "Sunday"];
        $('time[itemprop="openHours"][itemtype="http://schema.org/LocalBusiness"]').each((_, el) => {
            const $time = $(el);
            const dayText = $time.find('.hours-title').text().trim();
            if (targetDays.includes(dayText)) {
                $time.find('.timeRange.hours-end').remove();
                $time.find('.timeRange.hours-start').css("width", "66.6%");
            }
        });
    }
});
