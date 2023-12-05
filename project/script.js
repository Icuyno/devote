document.getElementById("menu_btn").addEventListener("click", function () {
    var mobileMenuContainer = document.querySelector(".mobile_menu_container");

    // Toggle the mobile menu container
    if (mobileMenuContainer.style.display === "block") {
        mobileMenuContainer.style.display = "none";
        // Show the "Menu" button and hide "icon-close"
        document.querySelector(".open_menu").style.display = "block";
        document.querySelector(".icon-close").style.display = "none";
    } else {
        mobileMenuContainer.style.display = "block";
        // Show "icon-close" and hide the "Menu" button
        document.querySelector(".open_menu").style.display = "none";
        document.querySelector(".icon-close").style.display = "block";
    }
});
