//let myLibrary = [{ "id": "1", "title": "Life 3.0", "author": "Max Tegmark", "npages": "300" }, { "id": "2", "title": "Think Again", "author": "Adam Grant", "npages": "350" }, { "id": "3", "title": "Sapiens", "author": "Yuval Noah Harari", "npages": "500" }];
let myLibrary2 = [{ "id": "1", "title": "Life 3.0", "author": "Max Tegmark", "npages": "300" }, { "id": "2", "title": "Think Again", "author": "Adam Grant", "npages": "350" }, { "id": "3", "title": "Sapiens", "author": "Yuval Noah Harari", "npages": "500" }];

function Book(id, title, author, npages, isRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.isRead = isRead;
}

const form = document.querySelector("#form");
let titleF = document.querySelector("#title");
let authorF = document.querySelector("#author");
let npagesF = document.querySelector("#npages");
let bookId = 3;
let btnId = 0;
printBooks(myLibrary2);


//Submit New Book
form.addEventListener("submit", function addBookToLibrary(e) {
    e.preventDefault();
    if (titleF.value != "" && authorF.value != "" && npagesF.value != "") {
        
        bookId++;
        let book = new Book(bookId, titleF.value, authorF.value, npagesF.value, false);
        myLibrary2.push(book);
        deleteAllBooks();
        btnId = 0;
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
    let idToRemove = parseInt(btn.id);
    myLibrary2.splice(idToRemove, 1);
    
});






function printBooks(myLibrary) {
    const booksDiv = document.querySelector(".books-div");
    myLibrary.forEach(book => {
        //Creates book card
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
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
        btnId++;
        deleteButton.id = btnId;
        bookCardRight.appendChild(deleteButton);

        let readButton = document.createElement("button");
        readButton.setAttribute("type", "button");
        readButton.classList.add("read-button");
        readButton.textContent = "READ";
        bookCardRight.appendChild(readButton);
    });
}

function deleteAllBooks () {
    let booksDiv = document.querySelector(".books-div");
    booksDiv.remove();
    let contentWrapper = document.querySelector(".content-wrapper");
    let newBooksDiv = document.createElement("div");
    newBooksDiv.classList.add("books-div");
    contentWrapper.appendChild(newBooksDiv);
    

}




