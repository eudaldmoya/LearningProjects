//let myLibrary = [{ "id": "1", "title": "Life 3.0", "author": "Max Tegmark", "npages": "300" }, { "id": "2", "title": "Think Again", "author": "Adam Grant", "npages": "350" }, { "id": "3", "title": "Sapiens", "author": "Yuval Noah Harari", "npages": "500" }];
let myLibrary2 = [{ "title": "Life 3.0", "author": "Max Tegmark", "npages": "300" }, { "title": "Think Again", "author": "Adam Grant", "npages": "350" }, { "title": "Sapiens", "author": "Yuval Noah Harari", "npages": "500" }];

function Book(title, author, npages, isRead) {
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.isRead = isRead;
}

const form = document.querySelector("#form");
let titleF = document.querySelector("#title");
let authorF = document.querySelector("#author");
let npagesF = document.querySelector("#npages");
printBooks(myLibrary2);


//Submit New Book
form.addEventListener("submit", function addBookToLibrary(e) {
    e.preventDefault();
    if (titleF.value != "" && authorF.value != "" && npagesF.value != "") {

        let book = new Book(titleF.value, authorF.value, npagesF.value, false);
        myLibrary2.push(book);
        deleteAllBooks();
        printBooks(myLibrary2);
        const form = document.querySelector("#form");
        form.style.display = "none";
        titleF.value = "";
        authorF.value = "";
        npagesF.value = "";
    }
    else {
        alert("Fill in the information first, thanks!");
    }

});


//Add Book Button
const addBookBtn = document.querySelector(".add-book");
addBookBtn.addEventListener("click", function showForm(e) {
    e.preventDefault();
    const form = document.querySelector("#form");
    form.style.display = "block";
});


//Remove Book Button
let deleteButtons = document.querySelectorAll(".delete-button");
let deleteButtonsArr = Array.from(deleteButtons);
deleteButtonsArr.forEach(btn => {
    btn.addEventListener("click", () => {
        let divToDelete = btn.closest(".book-card");
        divToDelete.remove();
        let i = 0;
        for(let j = 0; j<myLibrary2.length; j++) {
            if(myLibrary2[j].title == btn.id) {
                break;
            }
            i++;
        }
        myLibrary2.splice(i, 1);
        console.log(myLibrary2);
    });
});

//Read Button Management
let readButtons = document.querySelectorAll(".read-button");
let readButtonsArr = Array.from(readButtons);
readButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let i = 0;
        for(let j = 0; j<myLibrary2.length; j++) {
            if(myLibrary2[j].title == btn.id) {
                break;
            }
            i++;
        }
        myLibrary2[i].isRead = !myLibrary2[i].isRead;
        if(myLibrary2[i].isRead) {
            btn.className = "read-button-op";
        }
        else btn.className = "read-button-op";
    });
});


function printBooks(myLibrary) {
    const booksDiv = document.querySelector(".books-div");
    myLibrary.forEach(book => {
        //Creates book card
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.id = book.title;
        booksDiv.appendChild(bookCard);

        //Creates left side of Book Card
        let bookCardLeft = document.createElement("div");
        bookCardLeft.classList.add("book-card-left");
        bookCard.appendChild(bookCardLeft);

        //Creates card title
        let bookTitle = document.createElement("div");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = book.title;
        bookCardLeft.appendChild(bookTitle);

        //Creates card author
        let bookAuthor = document.createElement("div");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = book.author;
        bookCardLeft.appendChild(bookAuthor);

        //Creates book pages
        let bookPages = document.createElement("div");
        bookPages.classList.add("book-pages");
        bookPages.textContent = `${book.npages} pages`;
        bookCardLeft.appendChild(bookPages);

        //Creates right side of Book Card
        let bookCardRight = document.createElement("div");
        bookCardRight.classList.add("book-card-right");
        bookCard.appendChild(bookCardRight);

        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "REMOVE";
        deleteButton.id = book.title;
        bookCardRight.appendChild(deleteButton);

        let readButton = document.createElement("button");
        readButton.setAttribute("type", "button");
        readButton.classList.add("read-button");
        readButton.textContent = "READ";
        readButton.id = book.title;
        bookCardRight.appendChild(readButton);
    });
}

function deleteAllBooks() {
    let booksDiv = document.querySelector(".books-div");
    booksDiv.remove();
    let contentWrapper = document.querySelector(".content-wrapper");
    let newBooksDiv = document.createElement("div");
    newBooksDiv.classList.add("books-div");
    contentWrapper.appendChild(newBooksDiv);
}





