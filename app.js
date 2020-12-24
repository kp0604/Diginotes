console.log("hey")

const addTxt = document.getElementById("addTxt")

const addBtn = document.getElementById("addBtn")

const notes = document.getElementById("notes")

const searchBtn = document.getElementById("searchBtn")

const searchTxt = document.getElementById("searchTxt")

showNotes()






function addNote() {
    let notesFromLocal = JSON.parse(localStorage.getItem("localNotes"))

    if (notesFromLocal == null) {
        notesFromLocal = []
        notesFromLocal.push(addTxt.value)
        localStorage.setItem("localNotes", JSON.stringify(notesFromLocal))

    }

    else {

        notesFromLocal.push(addTxt.value)
        localStorage.setItem("localNotes", JSON.stringify(notesFromLocal))

    }

    showNotes()
    addTxt.value = ""
}


function showNotes() {

    notesFromLocal = JSON.parse(localStorage.getItem("localNotes"))

    notes.innerHTML=""
    notesFromLocal.map((note, index) => {

        notes.innerHTML += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Note-${index}</h5>
        <p class="card-text"> ${note}</p>
        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
    </div>
    </div>`
    }
    )
}


function deleteNote(index) {


    notesFromLocal.splice(index, 1)
    localStorage.setItem("localNotes", JSON.stringify(notesFromLocal))
    notes.innerHTML = ""
    showNotes()

}



function searchoo() {

    console.log("searching...")



}

addBtn.addEventListener("click", addNote)

searchBtn.addEventListener("click", searchoo)