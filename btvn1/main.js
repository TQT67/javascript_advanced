"use strict";
const note1 = new Note("title1", "content1");
const note2 = new Note("title2", "content2");
const noteList = new NoteList();
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
console.log(noteList.notes);
