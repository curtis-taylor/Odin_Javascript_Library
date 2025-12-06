
const myLibrary = [];

function Book(title, author, pages, bookcover_url, have_book) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
   
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_book = have_book;
    this.id = crypto.randomUUID();
    this.bookcover_url = bookcover_url;
   
    this.info = function() {
        const i = {title: title, author: author,
            pages: pages, have_book: have_book, id: this.id
        }
        return i
    };
   
   
   
}

function addBookToLibrary(title, author, pages, bookcover_url, have_book) {
    const book = new Book(title, author, pages, bookcover_url, have_book);
    //console.log(book.info())
    myLibrary.push(book);
    //console.log(myLibrary);
}

function displayBooks(library) {

    const book_container = document.querySelector('#page_container');
    book_container.setAttribute('style', 'display: grid; grid-template-columns: repeat(6, 1fr);');
    

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

            let bookcover_div = document.createElement('div');
            let bookcover_img = document.createElement('img');
            bookcover_img.setAttribute('src', i.bookcover_url);
            bookcover_img.setAttribute('width', '150px');

            bookcover_div.appendChild(bookcover_img);
            

            let title_div = document.createElement('div');
            title_div.setAttribute("class", "title");
            title_div.style.fontFamily = "'Arial', sans-serif";
            title_div.style.fontSize = "22px";
            title_div.style.fontWeight = "bold";
            title_div.textContent = i.title;
            

            let author_div = document.createElement('div');
            author_div.setAttribute("class", "author");
            title_div.style.fontSize = "18px";
            author_div.textContent = i.author;

            let page_count_div = document.createElement('div');
            page_count_div.setAttribute("class", "page_count");
            title_div.style.fontSize = "18px";
            page_count_div.textContent = i.pages + " pages";


            book_div.appendChild(bookcover_div);
            book_div.appendChild(title_div);
            book_div.appendChild(author_div);
            book_div.appendChild(page_count_div);

            book_container.appendChild(book_div)
            x++;
        } 

        console.log(book_container)

    }

    
}

addBookToLibrary('LOTR', 'Tolkien', 500, "https://i.cbc.ca/1.4158289.1497366023!/fileImage/httpImage/image.png_gen/derivatives/original_780/book-cover-the-lord-of-the-rings-by-j-r-r-tolkien.png", true);
addBookToLibrary('Spiderman', 'Stan Lee', 500, "https://i.cbc.ca/1.4158289.1497366023!/fileImage/httpImage/image.png_gen/derivatives/original_780/book-cover-the-lord-of-the-rings-by-j-r-r-tolkien.png", true);
addBookToLibrary('ROTK', 'Tolkien', 500, "https://m.media-amazon.com/images/G/15/apparel/rcxgs/tile._CB483369412_.gif", true);
addBookToLibrary('Christmas Carol', 'Charles Dickens', 500, "https://m.media-amazon.com/images/G/15/apparel/rcxgs/tile._CB483369412_.gif", true);
console.log("::::::::::: " )
console.log(myLibrary)

displayBooks(myLibrary);


