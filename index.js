// console.log("hey");

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
  showNotes();
  addTxt.value = "";
  titleTxt.value = "";
}

 function showNotes() {
  let date = new Date();
  notes.innerHTML = "";
   if (notesFromLocal = JSON.parse(localStorage.getItem("localNotes"))) {
     notesFromLocal.map((note, index) => {
       notes.innerHTML += ` <div class="col-lg-4 col-md-4 col-sm-12 noteCard justify-content-center  px-2 my-2" id="no" >
            <div
             class="card accordion accordion-flush   "
              id="accordionFlushExample${index}"  >
        
            <div class="accordion-item  " style="background-color:whitesmoke;">
              <div class=" " id="flush-headingOne${index}"  >
               <button
                class="accordion-button collapsed fs-6 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne${index}"
                aria-expanded="false"
                aria-controls="flush-collapseOne${index}"
                style="background-color:#FFC040;font-family: ; font-weight:600;"
                >
                ${note.title.toUpperCase()}
              </button>
              
            </div>
            <div
              id="flush-collapseOne${index}"
              class="accordion-collapse collapse justify-content-center"
              aria-labelledby="flush-headingOne${index}"
              data-bs-parent="#accordionFlushExample${index}">
              
              <div class="container row justify-content-center m-0 my-3 p-1">
               <p class="col-10 m-0 p-0 fst-italic ">
                 Created : ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}
               </p>
                <button
                  id="${index}"
                  onclick="deleteNote(this.id)"
                  class="btn  col-1 p-0 mx-1 "
                  style="background-color:">
                
                  <i class="fa fa-trash"></i>
                </button>
              </div>
              <div class="accordion-body fw-normal">${note.txt}</div>
            </div>
          </div>
          </div>
        </div>`;
      
     })
   }
  
  
  if(notes.innerHTML=="") {
    // <button id="" onclick="" class="btn-sm btn-outline-dark me-1 "><i class="fa fa-pen"></i></button>
    notes.innerHTML = `<div class="display-3 row m-0 p-0 text-light justify-content-center align-content-center " style="height:30vh;">Add some notes!</div>`;
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
    
    let titleTag = element.getElementsByClassName("accordion-button")[0].innerText;

    if (titleTag.includes(searchTxt.value)) {
      element.setAttribute("style", "display: block");
    } else {
      element.setAttribute("style", "display: none !important");
    }
    e.preventDefault();
  });
}
showNotes();

addBtn.addEventListener("click", (e) => addNote(e));
searchBtn.addEventListener("click", search);
