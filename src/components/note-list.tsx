import { useState } from "react";
import NewNoteCard from "./new-note-card";
import NoteCard from "./note-card";
import { v4 as uuidv4 } from "uuid";

interface INote {
  id: string;
  date: Date;
  content: string;
}

interface NoteListProps {
  search: string;
}

const NoteList = ({ search }: NoteListProps) => {
  const [notes, setNotes] = useState<INote[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");
    let parsedNotes = [];
    try {
      parsedNotes = notesOnStorage && JSON.parse(notesOnStorage);
    } catch (error) {
      window.location.reload();
      localStorage.setItem("notes", JSON.stringify([]));
      return [];
    }
    if (notesOnStorage && Array.isArray(parsedNotes)) {
      return parsedNotes;
    } else {
      localStorage.setItem("notes", JSON.stringify([]));
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: uuidv4(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    localStorage.setItem("notes", JSON.stringify(notesArray));

    setNotes((notes) => [newNote, ...notes]);
  }

  const filteredNotes =
    search === ""
      ? notes
      : notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[16rem] gap-6">
      <NewNoteCard onNoteCreated={onNoteCreated} />
      {filteredNotes.map((note) => {
        return (
          <NoteCard key={note.id} date={note.date} content={note.content} />
        );
      })}
    </div>
  );
};

export default NoteList;
