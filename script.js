// Get a reference to the nav container element
const navContainer = document.getElementById('nav-container');

// Get a reference to the image element
const image = document.querySelector('img');

// Set the nav container's position to "absolute"
navContainer.style.position = "absolute";

// Set the nav container's top and right positions to 0
navContainer.style.top = "0";
navContainer.style.right = "0";

// Add a margin to the top of the nav container to push it down below the image
navContainer.style.marginTop = image.clientHeight + "px";