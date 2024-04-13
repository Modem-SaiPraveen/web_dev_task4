document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.getElementById("nextBtn");
    const categories = document.getElementById("categories");
    let currentPage = 1;
    const totalPages = 2; // Assuming we have 2 pages

    nextBtn.addEventListener("click", function() {
        currentPage++;
        if (currentPage > totalPages) {
            currentPage = 1; // Reset to the first page if reached the last page
        }
        updatePage();
    });

    function updatePage() {
        // Hide all categories
        const categoryElements = categories.getElementsByClassName("category");
        for (let i = 0; i < categoryElements.length; i++) {
            categoryElements[i].style.display = "none";
        }

        // Show categories based on current page
        const currentPageCategories = categories.querySelectorAll(`.category-page-${currentPage}`);
        for (let i = 0; i < currentPageCategories.length; i++) {
            currentPageCategories[i].style.display = "block";
        }
    }

    // Initially show first page
    updatePage();
});
