import "./style.css";
// Toggle mobile menu visibility when the hamburger icon is clicked

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-96");
  } else {
    mobileMenu.classList.add("max-h-0");
    mobileMenu.classList.remove("max-h-96");
  }
});
const proxy = "https://cors-anywhere.herokuapp.com/";
const url = "https://zenquotes.io/api/quotes";

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fetch a random quote from the ZenQuotes API
const quoteBox = document.getElementById("QuoteBox");
const quoteText = document.getElementById("QuoteText");
const quoteAuthor = document.getElementById("QuoteAuthor");
fetch(proxy + url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const randomIndex = getRandomInt(0, data.length - 1);
    const quote = data[randomIndex].q;
    const author = data[randomIndex].a;
    // Update the quote box with the fetched quote and author
    quoteText.innerHTML = `<i><q>${quote}</q></i>`;

    quoteAuthor.textContent = `- ${author}`;
  })
  .catch((error) => {
    console.error("Error fetching quote:", error);
  });
