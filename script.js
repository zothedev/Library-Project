// selecting our html elements
const cards = document.querySelector('.cards');

// Selecting our Buttons and Containers.
const newBookButton = document.querySelector('button');
const dialogContainer = document.querySelector('.dialogBox');
const cancelButton = document.querySelector('.closeDialog');
const submitButton = document.querySelector('.submitButton');

const log = console.log;
const myLibrary = [];

function Book(title, author, pages, read) {
    // properties
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read

    // methods
    let info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }

    Book.prototype.toggleReadStatus = function () {
        this.read = this.read === "Read" ? "Not Read" : "Read";
    }
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let x = new Book(title, author, pages, read);
    x.ID = crypto.randomUUID();
    myLibrary.push(x);
}

function renderCards() {
    cards.innerHTML = '';
    // for each element in the array
    for (const book of myLibrary) {

        // create a card for it
        const card = document.createElement('div');
        // add the card class to the card 
        card.classList.add('card');
        // add that card to the dom as a child of .cards
        cards.appendChild(card);

        // for each property of the current book object
        for (const property in book) {
            // create a new <p> to hold this properties info
            const bookItem = document.createElement('p');
            // update the text contents of the <p>
            if (property === "read") {
                bookItem.textContent = `[ ${book[property]} ]`;
            } else {
                bookItem.textContent = `${book[property]}`;
            }

            // add the book id as a "data-" attribute to the card element to make deleting the book from library easier
            if (property === "ID") {
                card.setAttribute('data-id', book.ID);
                continue;
            }
            if (property === "toggleReadStatus") {
                continue;
            }
            // add the bookItem to the current card
            card.appendChild(bookItem);
        }

        // setting the background color (read status) of the book
        if (book['read'] === "Read") {
            card.style.backgroundColor = "lightgreen";
        } else {
            card.style.backgroundColor = "lightcoral";
        }

        // create the delete button and add it to the DOM.
        let deleteButton = document.createElement('button');
        card.appendChild(deleteButton);

        // on click of deleteButton, find the index of the book in myLibrary and delete it
        deleteButton.addEventListener('click', () => {
            const deletedBookIndex = myLibrary.findIndex(book => book.ID === card.getAttribute('data-id'));
            // log(deletedBookIndex);
            if (deletedBookIndex !== -1) {
                myLibrary.splice(deletedBookIndex, 1);
                renderCards();
            }
        });

        // create the read status button
        let readStatusButton = document.createElement('button');
        card.appendChild(readStatusButton);

        readStatusButton.addEventListener(('click'), () => {
            const book = myLibrary.find(book => book.ID === card.getAttribute('data-id'));
            book.toggleReadStatus();
            renderCards();
        });
    }
}



// test books
addBookToLibrary("Hatchet", "Gary Paulsen", 192, "Read");
addBookToLibrary("Warriors", "Erin Hunter", 234, "Not Read");

newBookButton.addEventListener('click', function () {
    // displays our dialog
    // can be exited by pressing ESC or pressing the Add Book or Cancel button
    dialogContainer.showModal();
});

cancelButton.addEventListener('click', function (e) {
    dialogContainer.close();
    clearFormElementValues();
    e.preventDefault();
});

submitButton.addEventListener('click', function (e) {
    // stop the default functionality of submit buttons (sending data to server)
    e.preventDefault();

    // storing the value of each form element
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    // add this book to library
    addBookToLibrary(title, author, pages, read);

    clearFormElementValues();

    // re-display our books
    renderCards();

    // close the dialog box
    dialogContainer.close();
});

function clearFormElementValues() {
    // clear the form element contents
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#pages').value = "";
    document.querySelector('#read').value = "read";
}

renderCards();