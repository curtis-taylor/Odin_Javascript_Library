
const myLibrary = [];
const add_button = document.querySelector('#add_button');
const add_dialog = document.querySelector('#add_dialog');
const dialog_ok_button = document.querySelector("#ok");

 add_button.addEventListener('click', e => {
        const add_dialog = document.querySelector('#add_dialog');
        e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        console.log("add button clicked: ");

        console.log(myLibrary[0]);

        add_dialog.showModal();



    });

  dialog_ok_button.addEventListener('click', e => {
        const add_dialog = document.querySelector('#add_dialog');
        const dialog_title = document.querySelector("#book_title_text").value;
        const dialog_author = document.querySelector("#book_author_text").value;
        const dialog_page = document.querySelector("#page_count_text").value;
        const dialog_coverURL = document.querySelector("#bookcover_url_text").value
        const book_container = document.querySelector('#page_container');


        console.log("add button clicked: " + dialog_title);
        book_container.setAttribute('style', 'display: grid; grid-template-columns: repeat(5, 1fr);');
    

        e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        console.log("add button clicked: " + dialog_title);

        addBookToLibrary(dialog_title, dialog_author, dialog_page, dialog_coverURL);

        add_dialog.close();

    });



function Book(title, author, pages, bookcover_url) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
   
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.have_book = have_book;
    this.id = crypto.randomUUID();
    this.bookcover_url = bookcover_url;
   
    /*
    this.info = function() {
        const i = {title: title, author: author,
            pages: pages, have_book: have_book, id: this.id
        }
        return i 
    }; */
   
   
   
}

function checkIfIdExists(id) {
    const element = document.querySelector(`#x${id}`); // Use '#' to select by ID
    return element !== null; // Returns true if exists, false otherwise
}

function addBookToLibrary(title, author, pages, bookcover_url) {
    const book = new Book(title, author, pages, bookcover_url);
    //console.log(book.info())
    myLibrary.push(book);

    displayBooks(myLibrary);

    //console.log(myLibrary);
}

function displayBooks(library) {

    const book_container = document.querySelector('#page_container');
    book_container.setAttribute('style', 'display: grid; grid-template-columns: repeat(5, 1fr);');
    
    console.log(library[library.length - 1])
    console.log("+++")

    let i = library[library.length - 1];

    console.log("***");
    // console.log(book_container);

    /*
    if(book_container.children.length >= 1) {
        book_container.replaceChildren();
    } */
     
   // if(book_container.children.length < 1) {
        console.log("dis")
        let x = String(library.length);
       // for(const i of library) {
        //console.log("===================")
        //console.log(i);
        let book_div = document.createElement('div');
        book_div.setAttribute("class", "book");

        
        while(checkIfIdExists(x) == true) {
            x++;
            console.log("no exist");
        } 

        book_div.setAttribute("id", x);
        book_div.style.cssText = "height: 380px;"

        let bookcover_div = document.createElement('div');
        let bookcover_img = document.createElement('img');
        bookcover_img.setAttribute('src', i.bookcover_url);
        bookcover_img.style.cssText = "width: 150px";

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

        let delete_button = document.createElement('button');
        //delete_button.setAttribute('display', "color: white; background-color: lightgreen; height: 30px; margin: 10px;")
        // delete_button.setAttribute("height", "30px");
        delete_button.style.cssText = "color: white; background-color: lightgreen; height: 30px; margin: 10px;"
        delete_button.textContent = "Delete";
        delete_button.setAttribute("class", "delete_button");
        let delete_id = "delete_" + String(x);
        delete_button.setAttribute("id", delete_id);

        let read_button = document.createElement("button");
        read_button.style.cssText = "color: black; background-color: lightblue; height: 30px; margin: 10px;"
        read_button.textContent = "Mark Read";
        read_button.setAttribute("class", "read_button");
        let read_id = "read_" + String(x);
        read_button.setAttribute("id", read_id);


        book_div.appendChild(bookcover_div);
        book_div.appendChild(title_div);
        book_div.appendChild(author_div);
        book_div.appendChild(page_count_div);
        book_div.appendChild(delete_button);
        book_div.appendChild(read_button);

        book_container.appendChild(book_div)
        x++;
    //    } 

        //console.log(book_container)

  //  }

    // DELETE NODE FOR CHOSEN BOOK
    const delete_button_loc = document.querySelectorAll('.delete_button').forEach(item => {
        
        const test = document.querySelector('#page_container');

        item.addEventListener('click', e => {
        e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        

        parentNode = item.parentNode;
        console.log("button clicked: " + parentNode.id);

        test.removeChild(parentNode);

        });
    });

    const read_button_loc = document.querySelectorAll('.read_button').forEach(item => {
        const test = document.querySelector('#page_container');

        item.addEventListener('click', e => {
            e.preventDefault();
            //e.stopPropagation();
            e.stopImmediatePropagation();

            if(item.textContent == "Mark Read") {
                 item.textContent = "IS READ";
                 item.style.cssText = "color: white; background-color: navy; height: 30px; margin: 10px;"

            } else {
                item.textContent = "Mark Read"
                item.style.cssText = "color: black; background-color: lightblue; height: 30px; margin: 10px;"
            }


           

        })
    })

    
}



addBookToLibrary('LOTR', 'Tolkien', 500, "https://i.cbc.ca/1.4158289.1497366023!/fileImage/httpImage/image.png_gen/derivatives/original_780/book-cover-the-lord-of-the-rings-by-j-r-r-tolkien.png");
addBookToLibrary('LOTR: TWO TOWERS', 'Tolkien', 500, "https://i.cbc.ca/1.4158289.1497366023!/fileImage/httpImage/image.png_gen/derivatives/original_780/book-cover-the-lord-of-the-rings-by-j-r-r-tolkien.png");
addBookToLibrary('ROTK', 'Tolkien', 500, "https://i.cbc.ca/1.4158289.1497366023!/fileImage/httpImage/image.png_gen/derivatives/original_780/book-cover-the-lord-of-the-rings-by-j-r-r-tolkien.png");
addBookToLibrary('Christmas Carol', 'Charles Dickens', 500, "https://www.science.smith.edu/climatelit/wp-content/uploads/sites/97/2024/07/812EQMe0FyL-624x953.jpg");

addBookToLibrary('KJV Bible', 'Various Authors', 500, "https://cdn.kobo.com/book-images/d637e34d-2856-4a37-8d93-ea7f2cb5bab6/1200/1200/False/king-james-bible-the-holy-bible-authorized-king-james-version-kjv-old-testament-and-new-testaments.jpg");
addBookToLibrary('C Programming', 'Dennis Ritchie', 500, "https://storage.googleapis.com/paysfer_books/9780131103627.jpg");
addBookToLibrary('Fahrenheit 451', 'Ray Bradbury', 500, "https://i.etsystatic.com/7845523/r/il/095621/432071060/il_fullxfull.432071060_5xcf.jpg");
addBookToLibrary('What Color Is Your Parachute?', 'Richard Nelson Bolles', 500, "https://cdn.kobo.com/book-images/9a247440-f0b4-4d97-945a-d05400c2a465/1200/1200/False/what-color-is-your-parachute-2020.jpg");

addBookToLibrary('Romeo & Juliet', 'William Shakespeare', 150, "https://i.pinimg.com/736x/7d/a4/d0/7da4d06680ac41dbdcc0c02977b68de1.jpg");
addBookToLibrary('The Richest Man In Babylon?', 'George S. Clason', 200, "https://deepstash.com/_next/image?url=https:%2F%2Fbooks.google.com%2Fbooks%2Fpublisher%2Fcontent%2Fimages%2Ffrontcover%2Ff1tXEAAAQBAJ%3Ffife%3Dw400&w=3840&q=75");

console.log("::::::::::: " )
console.log(myLibrary)

//displayBooks(myLibrary);




