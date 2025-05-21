$(document).ready(function () {
    const dropdownMenu = $('li.dropdown.auto-drop .dropdown-menu');
    dropdownMenu.addClass('meganav');

    if (dropdownMenu.length > 0) {
        const newDivs = [
            `<div class="card">
                <a href="/search/inventory/industry/Outdoor%20Power">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/36909/images/CTA2_1.png" alt="">
                    <p>Tractors</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/industry/Outdoor%20Power">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/36909/images/CTA2_2.png" alt="">
                    <p>Farm Equipment</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/industry/Outdoor%20Power">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/36909/images/CTA2_3.png" alt="">
                    <p>Hay Equipment</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/industry/Outdoor%20Power">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/36909/images/CTA2_4.png" alt="">
                    <p>Industrial Equipment</p>
                </a>
            </div>`
        ];

        const listItems = dropdownMenu.find('li');


        listItems.each(function (index) {
            if (index < newDivs.length) {
                $(this).append(newDivs[index]);
            }
        });

    }
});