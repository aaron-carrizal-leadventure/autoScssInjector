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
                <a href="/search/inventory" title="All Inventory">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/39266/images/meganav/meganav-1.png" alt="All inventory">
                    <p>All Inventory</p>
                </a>
            </div>`,
        `<div class="card">
                <a href="/search/inventory" title="Aluminum Trailers">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/39266/images/meganav/meganav-2.png" alt="Aluminum Trailers">
                    <p>Aluminum Trailers</p>
                </a>
            </div>`,
        `<div class="card">
                <a href="/search/inventory/type/Specialty%20Trailers" title="Specials">
                    <img src="https://published-assets.ari-build.com/Content/Published/Site/39266/images/meganav/meganav-3.png" alt="Specials">
                    <p>Specials</p>
                </a>
            </div>`
    ];

    initializeMegaNav("All Inventory", newDivs, true, 'meganav');
});
