document.addEventListener("DOMContentLoaded", function () {

    // Find the footer element
    const footer = document.querySelector("footer");

    // Get current date and time
    const date = new Date();

    // Create a paragraph element
    const timeInfo = document.createElement("p");

    // Add date and time text
    timeInfo.innerText = "Page opened on: " + date.toLocaleString();

    // Add it to the footer
    footer.appendChild(timeInfo);

});
