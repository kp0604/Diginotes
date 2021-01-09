console.log("hey");

const addTxt = document.getElementById("addTxt");

const addBtn = document.getElementById("addBtn");

const notes = document.getElementById("notes");

const searchBtn = document.getElementById("searchBtn");

const searchTxt = document.getElementById("searchTxt");

const titleTxt = document.getElementById("titleTxt");


showNotes();

function addNote() {
    let notesFromLocal = JSON.parse(localStorage.getItem("localNotes"));
    if (titleTxt.value&&addTxt.value){
    let myobj={
        title: titleTxt.value,
         txt: addTxt.value,

    }}
    else{alert("Enter all fields....")}
    if (addTxt.value) {
        if (notesFromLocal == null) {
            notesFromLocal = [];
            notesFromLocal.push(myobj);
            localStorage.setItem("localNotes", JSON.stringify(notesFromLocal));
        } else {
            notesFromLocal.push(myobj);
            localStorage.setItem("localNotes", JSON.stringify(notesFromLocal));
        }
    } else {
        alert("Please add a note... ");
    }

    showNotes();
    addTxt.value = "";
    titleTxt.value = "";
}

function showNotes() {
    if ((notesFromLocal = JSON.parse(localStorage.getItem("localNotes")))) {
        notes.innerHTML = "";
        notesFromLocal.map((note, index) => {
            notes.innerHTML += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${note.title}</h5>
        <p class="card-text"> ${note.txt}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
    </div>
    </div>`;
        });
    }
}

function deleteNote(index) {
    notesFromLocal.splice(index, 1);
    localStorage.setItem("localNotes", JSON.stringify(notesFromLocal));
    notes.innerHTML = "";
    showNotes();
}

function search(e) {
    

    let noteCard = document.getElementsByClassName("noteCard");

    
    Array.from(noteCard).map(function (element) {
        let titleTag = element.getElementsByTagName("h5")[0].innerText
        let paraTag = element.getElementsByTagName("p")[0].innerText
       
        if (titleTag.includes(searchTxt.value)||paraTag.includes(searchTxt.value)) {
            element.style.display = "block"

            
        }
        else {
            element.style.display = "none"
            
        }
    e.preventDefault()    
    })

    
}

addBtn.addEventListener("click", addNote);

// searchTxt.addEventListener("input", search);
searchBtn.addEventListener("click", search);
