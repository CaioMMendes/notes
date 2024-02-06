import NoteList from "./components/note-list";

function App() {
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
        />
      </form>
      <div className="h-px bg-slate-700"></div>
      <NoteList />
    </main>
  );
}

export default App;
