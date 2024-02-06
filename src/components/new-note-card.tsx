const NewNoteCard = () => {
  return (
    <div className="rounded-md bg-slate-700 p-5 space-y-3  ">
      <p className="text-sm font-medium text-slate-200">Adicionar nota</p>
      <p className="text-sm leading-6 text-slate-400 text-justify">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
};

export default NewNoteCard;
