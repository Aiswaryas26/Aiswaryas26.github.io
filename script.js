document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    alert("Welcome to the Air Quality Management Course Website");

    // Show current date and time
    const footer = document.querySelector("footer");

    const date = new Date();

    const timeInfo = document.createElement("p");

    timeInfo.innerText = "Page opened on: " + date.toLocaleString();

    footer.appendChild(timeInfo);

});
