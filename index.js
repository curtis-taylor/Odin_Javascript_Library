const book_screen = document.querySelector('#page_container');

const myLibrary = [];

function Book(title, author, pages, have_book) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
   
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_book = have_book;
    this.id = crypto.randomUUID();
   
    this.info = function() {
        const i = {title: title, author: author,
            pages: pages, have_book: have_book, id: this.id
        }
        return i
    };
   
   
   
}

function addBookToLibrary(title, author, pages, have_book) {
    const book = new Book(title, author, pages, have_book);
    //console.log(book.info())
    myLibrary.push(book);
    //console.log(myLibrary);
}

function displayBooks(book_list) {

    if(book_screen.children.length >= 1) {
        book_screen.replaceChildren();
    } else {
        for(const i of book_list) {
            console.log("===================")
            console.log(i);
            let book_div = document.createElement('div');
            book_div.setAttribute("class", "book");
            book_div.setAttribute("id", )
    }

    }

    
}

addBookToLibrary('LOTR', 'Tolkien', 500, true);
addBookToLibrary('Spiderman', 'Stan Lee', 500, true);
addBookToLibrary('ROTK', 'Tolkien', 500, true);
addBookToLibrary('Christmas Carol', 'Charles Dickens', 500, true);

displayBooks(myLibrary)


