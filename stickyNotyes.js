const btn = document.querySelector("button");
const note = document.querySelector("textarea");
const bgColor = document.querySelector("#bg");
const textColor = document.querySelector("#text");
const rightDiv = document.querySelector(".right");

btn.addEventListener("click", createStickyNote);

function createStickyNote() {
  const text = note.value;
  if (text.trim().length === 0){
    alert("Enter some text");
    return;
  }

  const stickyNote = document.createElement("div"); //<div></div>
  const textSpan = document.createElement("span");
  textSpan.innerText = text;
  textSpan.addEventListener("blur", makeEditableFalse);

  stickyNote.append(textSpan);
  stickyNote.classList.add("note");

  const edit = document.createElement("span");
  edit.innerHTML = "<i class='fa-solid fa-pencil'></i>";
  edit.addEventListener("click", editStickyNote);
  stickyNote.append(edit);

  const cross = document.createElement("span"); //<span></span>
  cross.innerHTML = "&times;"; //<span>x</span>
  cross.classList.add("close");
  cross.addEventListener("click", removeStickyNote);
  stickyNote.append(cross);

  // working on bg-color & color
  stickyNote.style.backgroundColor = bgColor.value;
  stickyNote.style.color = textColor.value;

  rightDiv.append(stickyNote);

  note.value = "";
}

function removeStickyNote(evt) {
  evt.target.parentElement.remove();
}

function editStickyNote(evt) {
  // evt.target.parentElement.children[0].contentEditable = true;
  
}

function makeEditableFalse(evt) {
  evt.target.contentEditable = false;
}