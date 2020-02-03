let myLibrary = [];
const tableBody = document.querySelector("#tableBooks tbody");

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
    render();
}

function sampleBooks() {
    addBookToLibrary("Boektitel1", "Auteur1", 100, false);
    addBookToLibrary("Boektitel2", "Auteur2", 200, true);
}

function render() {
    // delete existing rows
    tableBody.innerHTML="";
    
    // add a row to the table for each book
    myLibrary.forEach(function(book) {
        const rowBook = document.createElement("tr");
        rowBook.innerHTML = `<td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>`

        if (book.read) {
            rowBook.innerHTML += "<td>Yes</td>";
        } else {
            rowBook.innerHTML += "<td>No</td>";
        }
        
        tableBody.appendChild(rowBook);
    })
}

function showNewBookForm() {
    resetForm();
    document.getElementById("newBookFormContainer").style.display = "block";
}

function hideNewBookForm() {
    document.getElementById("newBookFormContainer").style.display = "none";
}

function addBook() {    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector('input[name="read"]:checked').value;
    let isRead = (read == "true");
    addBookToLibrary(title, author, pages, isRead);

}

function resetForm() {
    document.getElementById("newBookForm").reset();
}

const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", () => {
    showNewBookForm();
})

const closeNewBookFormButton = document.querySelector("#closeNewBookForm");
closeNewBookFormButton.addEventListener("click", () => {
    hideNewBookForm();
})

const addBookButton = document.querySelector('#addNewBook');
addBookButton.addEventListener("click", () => {
    addBook();
    hideNewBookForm();
})

sampleBooks();
render();

