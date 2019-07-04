# Random Quote Generator

## Project and Requirements:

## Created an array of JS objects to hold data for quotes.

Each quote should have the following properties:

- [x] A `quote` property which contains a string: the text of the quote to display on the page.
- [x] A `source` property which contains a string identifying the creator of the quote.
- [x] An optional `citation` property which contains a string identifying the publication the quote appears in.
- [x] An optional `year` property which contains a number identifying the date of the quote.

## Created a function named `getRandomQuote` which:

- [x] selects a random quote object from the quotes array
- [x] returns the randomly selected quote objects

## Created a function named `printQuote` which follows these rules:

- [x] `printQuote` calls the `getRandomQuote` function and stores the returned quote object in a variable.

- [x] `printQuote` doesn't add a `<span class="citation">` for a missing citation or a `<span class="year">` if the year property is missing.
- [x] `printQuote` displays the final HTML string to the page. Used `document.getElementById('quote-box').innerHTML` to accomplish this.

# Additional Features

- [x] Randomly change the background color of the page, when the quote changes
- [x] Refresh the quote after a set amount of time. Used setInterval() method to refresh new quote and color every 7 seconds.

## View Project

View live demo of project [here.](https://jrdukes.github.io/random-quote-generator/)
