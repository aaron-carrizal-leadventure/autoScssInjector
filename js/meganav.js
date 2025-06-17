$(document).ready(function () {
    /**
     * Initialize a mega-nav for a specific dropdown menu.
     * @param {string} title - The title of the root link (e.g., "All Trailer Inventory").
     * @param {Array<string>} newDivs - Array of HTML strings to append to the dropdown items.
     * @param {boolean} removeFirstItem - Whether to remove the first item in the dropdown list.
     */
    function initializeMegaNav(title, newDivs, removeFirstItem, meganavClass) {
        // Normalize the title for comparison (remove extra spaces and lowercase)
        const normalizedTitle = title.trim().toLowerCase();

        // Find the root link with the normalized title
        const rootLink = $('a.root-link').filter(function () {
            return $(this).text().trim().toLowerCase() === normalizedTitle;
        });

        // Ensure the dropdown menu is within the same <li> as the root link
        const dropdownMenu = rootLink.closest('li.dropdown.auto-drop').find('.dropdown-menu');
        dropdownMenu.addClass(meganavClass);

        if (dropdownMenu.length > 0) {
            let listItems = dropdownMenu.find('li');

            // Remove the first item if required
            if (removeFirstItem && listItems.length > 0) {
                listItems.first().remove();
            }

            listItems = dropdownMenu.find('li');

            // Append newDivs to the remaining dropdown items
            listItems.each(function (index) {
                if (index < newDivs.length) {
                    $(this).append(newDivs[index]);
                }
            });
        }
    }

    const newDivs = [
            `<div class="card">
                <a href="/search/inventory/class/Enclosed%20Cargo">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-cargo.png" alt="">
                    <p>Enclosed/Cargo</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/class/Horse%20Trailers">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-horse.png" alt="">
                    <p>Horse Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/class/Car%20Haulers">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-car-hauler.png" alt="">
                    <p>Car Haulers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/class/Dump%20Trailers">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-dump.png" alt="">
                    <p>Dump Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/customurl#2">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-atv.png" alt="">
                    <p>ATV/UTV/SXS Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/class/Equipment%20Trailers">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-equipment.png" alt="">
                    <p>Equipment Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/class/Gooseneck">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-gooseneck.png" alt="">
                    <p>Gooseneck Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/customurl#3">
                    <img src="//cdnmedia.endeavorsuite.com/images/organizations/80ff2e58-84c0-4a65-a16a-194a86fe9c70/cta-1/cat-v-nose.png" alt="">
                    <p>V-Nose Trailers</p>
                </a>
            </div>`
        ];

        const newDivs2= [
            `<div class="card">
                <a href="/search/inventory/brand/Homesteader">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-homesteader.png?sv=4hrrqf?sv=x524905935" alt="">
                    <p>Homesteader Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/EZ-Hauler">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-ezhauler.png?sv=4hrrqf?sv=x572065798" alt="">
                    <p>EZ-Hauler</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/Sundowner%20Trailers">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-sundowner.png?sv=4hrrqf?sv=x875199811" alt="">
                    <p>Sundowner Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/Sure-Trac">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-suretrac.png?sv=4hrrqf?sv=x339909417" alt="">
                    <p>Sure-Trac</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/Nolan%20Manufacturing">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-nolan.png?sv=4hrrqf?sv=x1341956959" alt="">
                    <p>Nolan Manufacturing</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/Choice-Cargo">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-choice-cargo.png?sv=4hrrqf?sv=x1347167514" alt="">
                    <p>Choice Cargo</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/Frontier%20Trailers">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-frontier.png?sv=4hrrqf?sv=x2048275557" alt="">
                    <p>Frontier Trailers</p>
                </a>
            </div>`,
            `<div class="card">
                <a href="/search/inventory/brand/Delta">
                    <img src="https://dealer-cdn.com/skin/website/responsive/kenfeagintruckandtrailer/images/logo-delta.png?sv=4hrrqf?sv=x474407167" alt="">
                    <p>Delta</p>
                </a>
            </div>`
        ]

    initializeMegaNav("All Trailer Inventory", newDivs, true, 'meganav-1');
    initializeMegaNav("Brands", newDivs2, true, 'meganav-2');
});
