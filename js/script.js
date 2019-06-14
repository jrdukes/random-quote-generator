// Created an array to store quotes, source, citation, year, and tag

let quotes = [
  {
    quote:
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
    source: "Warren Buffett",
    citation: "Of Permanent Value: The Story of Warren Buffett",
    year: "2007",
    tag: "Category: Business"
  },

  {
    quote:
      "Technology is cool, but you've got to use it as opposed to letting it use you.",
    source: "Prince",
    citation: "Today",
    year: "2004",
    tag: "Category: Technology"
  },

  {
    quote:
      "Information technology is at the core of how you do your business and how your business model itself evolves.",
    source: "Satya Nadella",
    tag: "Category: Technology"
  },

  {
    quote:
      "Design is not just what it looks like and feels like. Design is how it works.",
    source: "Steve Jobs",
    tag: "Category: Technology"
  },

  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    source: "Bill Gates",
    tag: "Category: Technology"
  }
];

// Function that pulls a random object from quotes array and store in variable storeRandomQuote

const getRandomQuote = myArray => {
  var storeRandomQuote;
  storeRandomQuote = Math.floor(Math.random() * myArray.length);
  return myArray[storeRandomQuote];
};

// Function that takes previously selected random quote from array and prints to screen

const printQuote = () => {
  var getQuotes = getRandomQuote(quotes);
  var myHtml = "";
  myHtml = `<p class = "quote">${getQuotes.quote}</p><p class = "source">${
    getQuotes.source
  }`;

  // Append year if there is a year:
  if (getQuotes.year) {
    myHtml = `${myHtml}<span class='year'> ${getQuotes.year}</span>`;
  }
  // Append citation if there is a citation:
  if (getQuotes.citation) {
    myHtml = `${myHtml}<span class='citation'> ${getQuotes.citation}</span>`;
  }
  // Append tags property if there is one:
  if (getQuotes.tag) {
    myHtml = `${myHtml}<br> ${getQuotes.tag}</br>`;
  }
  // Append closing p tag:
  myHtml = `${myHtml}</p>`;

  // Put myHtml on page:
  document.getElementById("quote-box").innerHTML = myHtml;
};

// Set interval to refresh page after 5 seconds:

const myInterval = () => setInterval(printQuote, 5000);
myInterval();

// Event listener respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called:

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Function that generates random rgb value

function randomColorGenerator() {
  var randomColor;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  return randomColor;
}

// Generate random color
randomColorGenerator();

//Update background with random color
document.getElementById(
  "bgcolor"
).style.backgroundColor = randomColorGenerator();
