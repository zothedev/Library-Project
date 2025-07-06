# Library-Project

In this project, I was tasked with creating a small library app.

I first started with creating a book object. Each book has a title, author, pages, read status, and a unique ID. 

After the books are created via the Book constructor, the addBookToLibrary() function adds the book object to the library array. The renderBooks() function then displays all books in the library array on screen.

Users also have the ability to add a book to the library using the NEW BOOK button which prompts the user using a <dialog> box.

Finally, each rendered book has 2 buttons to manage the book. The first is a delete book button and the second is a toggle read status button (which changes the read status of the book).

## Class Implementation Branch

On the branch "class_implementation", I refactored the Book constructor to use the ES6 class format instead of plain constructors.