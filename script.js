const myLibrary = [];

function Book(title, author, pages, read) {
    // properties
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    // methods
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
    }
}

// let myBook = new Book("Hatchet", "theAuthor", 42, "already read");
// console.log(myBook.info());

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let x = new Book(this, title, author, pages, read);
    x.id = crypto.randomUUID();
    myLibrary.push(x);
}

