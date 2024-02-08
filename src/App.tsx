import { useState } from "react";
import NoteList from "./components/note-list";

function App() {
  const [search, setSearch] = useState("");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const query = e.target.value;
    setSearch(query);
  }

  return (
    <main className="flex w-full flex-col px-3 py-3 md:px-10 md:py-10 gap-6">
      <div className="flex gap-1 w-full justify-start items-center  opacity-50">
        <img src="/logo.png" alt="Logo" width={30} height={30} />
        <h2>Notes</h2>
      </div>
      <form className="flex w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-lg outline-none md:text-xl font-medium tracking-tight placeholder:text-slate-500 "
          value={search}
          onChange={handleSearchChange}
        />
      </form>
      <div className="h-px bg-slate-700"></div>
      <NoteList search={search} />
    </main>
  );
}

export default App;
