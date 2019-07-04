# Random Quote Generator


## Project Requirements: 

## Create an array of JS objects to hold data for quotes.

Each quote should have the following properties:

- [x] A `quote` property which contains a string: the text of the quote to display on the page.
- [x] A `source` property which contains a string identifying the creator of the quote.
- [x] An optional `citation` property which contains a string identifying the publication the quote appears in.
- [x] An optional `year` property which contains a number identifying the date of the quote.

## Create a function named `getRandomQuote` which:

- [x] selects a random quote object from the quotes array
- [x] returns the randomly selected quote objects

## Create a function named `printQuote` which follows these rules:

- [x] `printQuote` calls the `getRandomQuote` function and stores the returned quote object in a variable.

- [x] `printQuote` doesn't add a `<span class="citation">` for a missing citation or a `<span class="year">` if the year property is missing.
- [x] `printQuote` displays the final HTML string to the page. You can use the following JS snippet to accomplish that: `document.getElementById('quote-box').innerHTML`

# Extra Credit

- [x] Randomly change the background color of the page, when the quote changes
- [x] Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)

## View Project

View live demo of project [here.](https://jrdukes.github.io/random-quote-generator/)
