document.addEventListener("DOMContentLoaded", function () {

    const footer = document.querySelector("footer");

    const date = new Date();

    const timeInfo = document.createElement("p");

    timeInfo.innerText = "Page opened on: " + date.toLocaleString();

    footer.appendChild(timeInfo);

});
