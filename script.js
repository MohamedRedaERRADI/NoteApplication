notes = [];
function addNote(){
    noteInput = document.getElementById('noteInput');
    noteText = noteInput.value.trim();
    if (noteText !== '') {
        note = {
            id: Date.now(),
            text: noteText
        };
        notes.push(note);
        displayNotes();
        noteInput.value = '';
    } else {
        alert('Please enter a note.');
    }
}
function displayNotes(){
    notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    for (note of notes) {
        noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p class="note-text" id="note-${note.id}">${note.text}</p>
            <div class="time">${getTime()}</div>
            <button onclick="deleteNote(${note.id})">Delete</button>
            <button onclick="editNote(${note.id})">Edit</button>
        `;
        notesContainer.appendChild(noteElement);
    }
}
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    displayNotes();
}
function editNote(id){
    note = notes.find(note => note.id === id);
    if (note) {
        newText = prompt('Edit your note:', note.text);
        if (newText !== null && newText.trim() !== '') {
            note.text = newText.trim();
            displayNotes();
        } else {
            alert('Note text cannot be empty.');
        }
    }
}
function getTime(){
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    hour = hours.toString().padStart(2, '0');
    minute = minutes.toString().padStart(2, '0');
    return `${hour}:${minute}`;
}