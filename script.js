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

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function showNewBookForm() {
    //TODO replace - see https://www.w3schools.com/howto/howto_js_popup_form.asp
    document.getElementById("newBookForm").style.display = "block";
}

function hideNewBookForm() {
    document.getElementById("newBookForm").style.display = "none";
}

const newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", function() {
    showNewBookForm();
})

const closeNewBookFormButton = document.querySelector("#closeNewBookForm");
closeNewBookFormButton.addEventListener("click", function() {
    hideNewBookForm();
})

sampleBooks();
render();

