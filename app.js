console.log("hey");

const addTxt = document.getElementById("addTxt");

const addBtn = document.getElementById("addBtn");

const notes = document.getElementById("notes");

const searchBtn = document.getElementById("searchBtn");

const searchTxt = document.getElementById("searchTxt");

const titleTxt = document.getElementById("titleTxt");


function addNote(e) {
    let notesFromLocal = JSON.parse(localStorage.getItem("localNotes"));
    
    if (addTxt.value) {
        let myobj = {
            title: titleTxt.value,
            txt: addTxt.value,
        };
        if (notesFromLocal == null) {
            notesFromLocal = [];
            notesFromLocal.push(myobj);
            localStorage.setItem("localNotes", JSON.stringify(notesFromLocal));
        } else {
            notesFromLocal.push(myobj);
            localStorage.setItem("localNotes", JSON.stringify(notesFromLocal));
        }
    } else {
        alert("Enter all fields....");
    }
    
    e.preventDefault();
    showNotes()
    addTxt.value = "";
    titleTxt.value = "";
}

function showNotes() {
    let date = new Date()
    if ((notesFromLocal = JSON.parse(localStorage.getItem("localNotes")))) {
        notes.innerHTML = "";
        notesFromLocal.map((note, index) => {

            notes.innerHTML +=

            ` <div class="col-lg-3 col-md-3 col-sm-12 m-1 my-2 " >
            
            <div class="d-flex card noteCard  bg-light justify-content-between " >
            
            <a class="d-flex card   card-header btn text-dark fs-5 fst-italic " data-bs-toggle="collapse" href="#collapseExample${index}" role="button" aria-expanded="false"
                            aria-controls="collapseExample${index}" >
                            <p>${note.title} </p>
                            
                            </a>
                        <div class="collapse card" id="collapseExample${index}">
                        <div class="card card-body">
                        <p class="card-text"> ${note.txt}</p>
                            </div>
                            </div>
                            
                            <div class="d-flex justify-content-between mt-2">
                            
                            <div class="mx-3" >Created : ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}</div>
                            <div>
                            <button id="" onclick="" class="btn-sm btn-primary me-1 "><i class="fa fa-pen"></i></button>
                            <button id="${index}" onclick="deleteNote(this.id)" class="btn-sm btn-danger me-3 ">
                                    <i class="fa fa-trash"></i>
                                    </button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>`
        }
        );
    }
    else {
        notes.innerHTML = `<h5>No notes to show !</h5>`;
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
        let titleTag = element.getElementsByTagName("h5")[0].innerText;
        
        if (
            titleTag.includes(searchTxt.value)
            
        ) {
            element.setAttribute('style', 'display: block');
        } else {
            element.setAttribute('style', 'display: none !important');
        }
        e.preventDefault();
    });
}
showNotes();

addBtn.addEventListener("click", (e) => addNote(e));
searchBtn.addEventListener("click", search);
