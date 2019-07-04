// Created an array to store quotes, source, citation, year, and tag

let quotes = [
  {
    quote:
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
    source: 'Warren Buffett',
    citation: 'Of Permanent Value: The Story of Warren Buffett',
    year: '2007',
    tag: 'Category: Business'
  },

  {
    quote:
      "Technology is cool, but you've got to use it as opposed to letting it use you.",
    source: 'Prince',
    citation: 'Today',
    year: '2004',
    tag: 'Category: Technology'
  },

  {
    quote:
      'Information technology is at the core of how you do your business and how your business model itself evolves.',
    source: 'Satya Nadella',
    tag: 'Category: Technology'
  },

  {
    quote:
      'Design is not just what it looks like and feels like. Design is how it works.',
    source: 'Steve Jobs',
    tag: 'Category: Technology'
  },

  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    source: 'Bill Gates',
    tag: 'Category: Technology'
  }
];

// Created function that pulls a random object from quotes array and stores in variable storeRandomQuote

const getRandomQuote = myArray => {
  var storeRandomQuote;
  storeRandomQuote = Math.floor(Math.random() * myArray.length);
  return myArray[storeRandomQuote];
};

function randomColorGenerator() {
  var randomColor;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor;
}

// Function that takes previously selected random quote from array and prints to screen

const printQuote = () => {
  var getQuotes = getRandomQuote(quotes);
  var myHtml = '';
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

  // Send myHtml to page:
  document.getElementById('quote-box').innerHTML = myHtml;
};

// Guidance on background color functions from Tyler Dillon's repo at https://github.com/tydillon/RandomQuoteGenerator

// Function that changes background & button color
let getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  document.body.style.backgroundColor = color;
  document.getElementById('loadQuote').style.backgroundColor = color;
};

// Calls quote and color functions at the same time
let quoteAndColor = () => {
  getRandomColor();
  printQuote();
};

// Set interval to refresh page after 7 seconds:

const myInterval = () => setInterval(quoteAndColor, 7000);
myInterval();

// Event listener responds to "loadQuote" button. When clicked, the "quoteAndColor" function is called.

document
  .getElementById('loadQuote')
  .addEventListener('click', quoteAndColor, false);
