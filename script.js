let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let infoString;
        infoString = title + " by " + author + ", " + pages + " pages, ";
        if (read) {
            infoString += "read.";
        } else {
            infoString += "not read yet."
        }
        return infoString;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function sampleBooks() {
    addBookToLibrary("Boektitel1", "Auteur1", 100, false);
    addBookToLibrary("Boektitel2", "Auteur2", 200, true);
}

function render() {
    const tableBooks = document.querySelector(".tableBooks");
    
    myLibrary.forEach(function(book) {
        console.log(book.title);
        const rowBook = document.createElement("tr");
        rowBook.innerHTML = `<td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>`
        if (book.read) {
            rowBook.innerHTML += "<td>Yes</td>"
        } else {
            rowBook.innerHTML += "<td>No</td>"
        }
        tableBooks.appendChild(rowBook);
    })
}

function showNewBookForm() {
    //TODO remove
    console.log("show new book form");
    const containerInput = document.querySelector(".containerInput");
    const newBookForm = document.createElement("form");
    newBookForm.innerHTML = `
        Title:<br>
        <input type="text" name="title">
        <br>
        Author:<br>
        <input type="text" name="author">
        <br>
        Nr of pages:<br>
        <input type="number" name="pages" value = 0>
        <br>
        Read?<br>
        <input type="radio" name="read" value="no" checked> No<br>
        <input type="radio" name="read" value="yes"> Yes<br>
        <br><br>
        <input type="submit" value="Submit">
    `
    containerInput.appendChild(newBookForm);
}

const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", function() {
    showNewBookForm();
})

sampleBooks();
render();

