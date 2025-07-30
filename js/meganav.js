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
        <a href="/search/inventory/class/Horse%20Trailers" title="Horse Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-1.png" alt="Horse Trailers">
            <p>Horse<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Living%20Quarters" title="Living Quarters">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-2.png" alt="Living Quarters">
            <p>Living<br>Quarters</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Livestock%20Trailers" title="Stock/Combo Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-3.png" alt="Stock/Combo Trailers">
            <p>Stock/Combo<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Enclosed%20Cargo" title="Enclosed Cargo Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-4.png" alt="Enclosed Cargo Trailers">
            <p>Enclosed<br>Cargo Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Toy%20Haulers" title="Toy Haulers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-5.png" alt="Toy Haulers">
            <p>Toy<br>Haulers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/type/Snowmobile%20Trailers" title="Snowmobile Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-6.png" alt="Snowmobile Trailers">
            <p>Snowmobile<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/usage/Used/" title="Pre-Owned Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-7.png" alt="Pre-Owned Trailers">
            <p>Pre-Owned<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Car%20Haulers" title="Car Haulers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-8.png" alt="Car Haulers">
            <p>Car<br>Haulers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Dump%20Trailers" title="Dump Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-9.png" alt="Dump Trailers">
            <p>Dump<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Landscape" title="Landscape Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-10.png" alt="Landscape Trailers">
            <p>Landscape<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Equipment%20Trailers" title="Equipment Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-11.png" alt="Equipment Trailers">
            <p>Equipment<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Truck%20bed" title="Truck Beds">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-12.png" alt="Truck Beds">
            <p>Truck<br>Beds</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Utility%20Trailers" title="Utility Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-13.png" alt="Utility Trailers">
            <p>Utility<br>Trailers</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Side%20by%20Side" title="Utility Side-By-Side">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-14.png" alt="Utility Side-By-Side">
            <p>Utility<br>Side-By-Side</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory/class/Tilt%20Trailers" title="Tilt Trailers">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-15.png" alt="Tilt Trailers">
            <p>Tilt<br>Trailers</p>
        </a>
    </div>`,

        `<div class="card">
        <a href="/search/inventory/class/Arena%20Drag" title="Arena Drag">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-16.png" alt="Arena Drag">
            <p>Arena<br>Drag</p>
        </a>
    </div>`,
        `<div class="card">
        <a href="/search/inventory" title="Sale Barn">
            <img src="https://published-assets.ari-build.com/Content/Published/Site/37415/images/meganav/meganav-17.png" alt="Sale Barn">
            <p>Sale<br>Barn</p>
        </a>
    </div>`
    ];


    initializeMegaNav("Trailer Inventory", newDivs, true, 'meganav');
});
