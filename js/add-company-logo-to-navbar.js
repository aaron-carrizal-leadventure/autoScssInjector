$(document).ready(function () {
    const logoHTML = `
        <div class="container">
            <a href="/" title="Brake Away Trailers &amp; Auto Care">
                <img src="https://published-assets.ari-build.com/Content/Published/Site/37420/images/logo.png"
                     alt="Brake Away Trailers &amp; Auto Care"
                     class="img-responsive center-block logo-img">
            </a>
        </div>
    `;

    const dummyLinkLi = $("li").has("a[href='/dummy-link']");

    if (dummyLinkLi.length) {
        dummyLinkLi.addClass("desktop-logo");
        dummyLinkLi.html(logoHTML);
        console.log("Dummy link replaced successfully");
    } else {
        console.error("No 'dummy-link' elements found. sssssss");
    }
});