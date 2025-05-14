const myLibrary = [];

function Book(title, author, pages, read) {
    // properties
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    // methods
    let info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let x = new Book(title, author, pages, read);
    x.ID = crypto.randomUUID();
    myLibrary.push(x);
}

addBookToLibrary("testTitle", "testAuthor", 43, "already read");
addBookToLibrary("testTi44tle", "testAuthor", 43, "already read");

// create a var referencing the .cards container
const cards = document.querySelector('.cards');

// displaying books on screen

// for each element in the array
for (const element of myLibrary) {

    // create a card for it
    const card = document.createElement('div');
    // add the card class to the card 
    card.classList.add('card');
    // add that card to the dom as a child of .cards
    cards.appendChild(card);

    // for each property of the current book object
    for (const property in element) {
        // create a new <p> to hold this properties info
        const bookItem = document.createElement('p');
        // update the text contents of the <p> (while capitalizing the first letter of the property)
        bookItem.textContent = `${property[0].toUpperCase() + property.substring(1)}: ${element[property]}`;
        // add the bookItem to the current card
        card.appendChild(bookItem);
    }
    
}