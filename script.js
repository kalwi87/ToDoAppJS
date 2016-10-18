const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const numberofnotesdiv1 = document.getElementById("notesamountdiv1");
const numberofnotesdiv2 = document.getElementById("notesamountdiv2");
const numberofnotesdiv3 = document.getElementById("notesamountdiv3");
document
    .getElementById("add-note")
    .addEventListener("click", addNote);

div1.addEventListener("click", clearDiv1);
div2.addEventListener("click", clearDiv2);
div3.addEventListener("click", clearDiv3);
var numberofnotes = 0;
var numberofimportannotes = 0;
var numberofnotimportannotes = 0;


var Note = function (name, notebody, div) {

    var that = this;
    this.div = div;
    this.name = name;
    this.notebody = notebody;
}


var importantNote = function (name, notebody, div) {
    var that = this;
    this.div = div;
    this.name = name;
    this.notebody = notebody;


}


var notImportantNote = function (name, notebody, div) {

    var that = this;
    this.div = div;
    this.name = name;
    this.notebody = notebody;

}

function createNote() {
    var note = document.getElementById("name").value;
    var notebody = document.getElementById("note-body").value;
    var noteToDisplay = new Note(note, notebody, div1);
    var content = document.createTextNode(noteToDisplay.name + "  " + noteToDisplay.notebody);
    div1.appendChild(content);
    numberofnotes++
    numberofnotesdiv1.innerHTML = numberofnotes;
}

function createImportantNote() {
    var note = document.getElementById("name").value;
    var notebody = document.getElementById("note-body").value;
    var noteToDisplay = new importantNote(note, notebody, div2);
    var content = document.createTextNode(noteToDisplay.name + "  " + noteToDisplay.notebody);
    div2.appendChild(content);
    numberofimportannotes++;
    numberofnotesdiv2.innerHTML = numberofimportannotes;

}

function creatnotImportantNote() {
    var note = document.getElementById("name").value;
    var notebody = document.getElementById("note-body").value;
    var noteToDisplay = new notImportantNote(note, notebody, div3);
    var content = document.createTextNode(noteToDisplay.name + "  " + noteToDisplay.notebody);
    div3.appendChild(content);
    numberofnotimportannotes++;
    numberofnotesdiv3.innerHTML = numberofnotimportannotes;
}

function clearDiv1() {

    div1.innerHTML = "";
    numberofnotesdiv1.innerHTML = 0;

}

function clearDiv2() {

    div2.innerHTML = "";
    numberofnotesdiv2.innerHTML = 0;

}

function clearDiv3() {

    div3.innerHTML = "";
    numberofnotesdiv3.innerHTML = 0;

}

function addNote() {
    var radioButtons = document.querySelector('[name="imputnote"]:checked').value;

    switch (radioButtons) {
        case ("note"):
            createNote();
            break;
        case ("importantnote"):
            createImportantNote();
            break;

        case("notimportant"):
            creatnotImportantNote();
            break;


    }

}




