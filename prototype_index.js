console.log("Project 2 - Creating a college library")

//Constructor
function Book(bookName, author, genre) {
    this.bookName = bookName;
    this.author = author;
    this.genre = genre;
}

//Display Constructor
function Display() { }

//Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI")
    let tableBody = document.getElementById("tableBody")
    let ui = `<tr>
        <td>${book.bookName}</td>
        <td>${book.author}</td>
        <td>${book.genre}</td>
  </tr>`
    tableBody.innerHTML += ui;
}
//Method to clear the form
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset()
}

//Method to validate
Display.prototype.validate = function (book) {
    if (book.bookName.length > 0 && book.author.length > 0)
        return true
}

//Method to show status
Display.prototype.show = function (status,info,msg) {
    let alertMsg = document.getElementById('alertMsg')
    alertMsg.innerHTML = `
    <div class="alert alert-${status} alert-dismissible fade show" role="alert">
        <strong>${info} : </strong> ${msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`
    setTimeout(() => {
        alertMsg.innerHTML=''
    }, 2000);
}

//Add submit event listener to library form
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(event) {
    event.preventDefault()
    let bookName = document.getElementById("bookName").value
    let author = document.getElementById("bookAuthor").value

    let fiction = document.getElementById("fiction")
    let nonFiction = document.getElementById("nonFiction")

    let genre;
    if (fiction.checked) {
        genre = fiction.value
    }
    else {
        genre = nonFiction.value
    }

    let book = new Book(bookName, author, genre)
    console.log(book)

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success","Successful","Book added to your collection");
    }
    else {
        display.show("danger","Unsuccessful","Please fill the details to continue!");
    }


    console.log("You have submitted library form")
}
