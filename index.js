
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

function displayBooks(library) {

    const book_container = document.querySelector('#page_container');
    
    console.log("***");
    console.log(book_container);

    if(book_container.children.length >= 1) {
        book_container.replaceChildren();
    }
     
    if(book_container.children.length < 1) {
        console.log("dis")
        let x = 0;
        for(const i of library) {
            console.log("===================")
            console.log(i);
            let book_div = document.createElement('div');
            book_div.setAttribute("class", "book");
            book_div.setAttribute("id", x);

            let title_div = document.createElement('div');
            title_div.setAttribute("class", "title");
            title_div.textContent = i.title;
            

            let author_div = document.createElement('div');
            author_div.setAttribute("class", "author");
            author_div.textContent = i.author

            let page_count_div = document.createElement('div');
            page_count_div.setAttribute("class", "page_count")
            page_count_div.textContent = i.pages;


            book_div.appendChild(title_div);
            book_div.appendChild(author_div);
            book_div.appendChild(page_count_div);

            book_container.appendChild(book_div)
            x++;
        } 

        console.log(book_container)

    }

    
}

addBookToLibrary('LOTR', 'Tolkien', 500, true);
addBookToLibrary('Spiderman', 'Stan Lee', 500, true);
addBookToLibrary('ROTK', 'Tolkien', 500, true);
addBookToLibrary('Christmas Carol', 'Charles Dickens', 500, true);
console.log("::::::::::: " )
console.log(myLibrary)

displayBooks(myLibrary);


