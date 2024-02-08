import { useState } from "react";
import NewNoteCard from "./new-note-card";
import NoteCard from "./note-card";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

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

  const onNoteDeleted = (id: string) => {
    const filteredNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredNotes);
    localStorage.setItem("notes", JSON.stringify(filteredNotes));
    toast.success("Note deletada com sucesso!");
  };

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
          <NoteCard
            key={note.id}
            date={note.date}
            id={note.id}
            content={note.content}
            onNoteDeleted={onNoteDeleted}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
