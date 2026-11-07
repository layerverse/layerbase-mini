import './style.css';

// Get HTML elements
const header = document.querySelector('header');
const noteGrid = document.querySelector('.note-grid');
const noteEditor = document.querySelector('.note-editor');

const editorTitle = document.getElementById('editor-title');
const editorContent = document.getElementById('editor-content');

const backButton = document.getElementById('back-button');
const newNoteButton = document.getElementById('new-note-button');

// Open editor
function openEditor(title = '', content = '') {
    editorTitle.value = title;
    editorContent.value = content;
    
    header.hidden = true;
    noteGrid.hidden = true;
    noteEditor.hidden = false;
}

// Close editor
function closeEditor() {
    header.hidden = false;
    noteGrid.hidden = false;
    noteEditor.hidden = true;
}

// Open existing note
const noteCards = document.querySelectorAll('.note-card');

noteCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h2').textContent;
        const content = card.querySelector('p').textContent;

        openEditor(title, content);
    });
});

// Open new note
newNoteButton.addEventListener('click', () => {
    openEditor();
});

// Back to note list
backButton.addEventListener('click', closeEditor);