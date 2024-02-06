import NewNoteCard from "./new-note-card";
import NoteCard from "./note-card";

const NoteList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[16rem] gap-6">
      <NewNoteCard />
      <NoteCard date={new Date()} content="asdasdasdasd" />
    </div>
  );
};

export default NoteList;
