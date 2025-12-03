const SiteHeader = class extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav id="mobile-nav">
                <!-- don't bother with class="current-page" for mobile nav, no display of it -->
                <div><a href="/">Home</a></div>
                <div><a href="/events">Events</a></div>
                <div><a href="/members">Members</a></div>
            </nav>
            <div id="mobile-nav-btn">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <header>
                <div id="mobile-nav-btn-header-padding"></div>
                <nav>
                    <div><a href="/">Home</a></div>
                    <div><a href="/events">Events</a></div>
                    <div><a href="/members">Members</a></div>
                </nav>
                <img src="/assets/img/logo.webp">
            </header>
        `;

        this.setCurrentPage();
    }

    setCurrentPage() {
        // set current page for header (tab underline)
        const route = window.location.pathname;
        const nav = this.querySelector("header > nav");

        if (route === "/") {
            console.log("here");
            nav.querySelector("div:nth-of-type(1)").classList.add("current-page");
        } else if (route.includes("/events/")) {
            nav.querySelector("div:nth-of-type(2)").classList.add("current-page");
        } else if (route.includes("/members")) {
            nav.querySelector("div:nth-of-type(3)").classList.add("current-page");
        }
    }

}

customElements.define("site-header", SiteHeader);




// toggle for mobile navigation in header
(function () {
    const mobileNav = document.getElementById("mobile-nav");
    const mobileNavBtn = document.getElementById("mobile-nav-btn");
    const mobileNavBtnCenterDiv = mobileNavBtn.querySelector("div:nth-of-type(2)");
    let isMobileNavOpen = false;
    mobileNavBtn.addEventListener("click", () => {
        if (isMobileNavOpen) {
            mobileNav.style.display = "none";
            mobileNavBtnCenterDiv.style.transform = "none";
        } else {
            mobileNav.style.display = "flex";
            mobileNavBtnCenterDiv.style.transform = "translateX(var(--percent-width-difference))";
        }
        isMobileNavOpen = !isMobileNavOpen;
    });
})();
