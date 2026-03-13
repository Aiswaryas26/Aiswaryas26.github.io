document.addEventListener("DOMContentLoaded", function () {

    // Show current date and time in footer
    const footer = document.querySelector("footer");

    const date = new Date();

    const timeInfo = document.createElement("p");

    timeInfo.innerText = "Page opened on: " + date.toLocaleString();

    footer.appendChild(timeInfo);

});
