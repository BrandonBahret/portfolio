let accordions = document.querySelectorAll('.accordion');

function collapseAccordion(accordion) {
    accordion.querySelectorAll(".accordion-item").forEach(item => {
        item.setAttribute('aria-expanded', false);
    });
}

accordions.forEach(accordion => {
    let items = accordion.querySelectorAll(".accordion-item");
    
    items.forEach(item => {
        let aiHint = item.querySelector(".ai-hint");

        aiHint.tabIndex = 0;
        aiHint.addEventListener("keydown", e => {
            if (e.code === "Enter" || e.code === "Space") {
                e.preventDefault();
                aiHint.click();
            }
        });

        aiHint.addEventListener("click", e => {
            let isExpanded = item.getAttribute('aria-expanded') === "true";

            if (isExpanded) {
                item.setAttribute('aria-expanded', false);
            } else {
                collapseAccordion(accordion);
                item.setAttribute('aria-expanded', true);
            }
        });
    });
});