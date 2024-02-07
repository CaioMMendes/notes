import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
const NewNoteCard = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true);
  const [textAreaContent, setTextAreaContent] = useState("");

  const handleEditorClick = () => {
    setIsOnboardingOpen(false);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaContent(e.target.value);
    if (e.target.value === "") {
      return setIsOnboardingOpen(true);
    }
  };

  const handleDialogClose = () => {
    setIsOnboardingOpen(true);
  };

  const handleSaveNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(textAreaContent);
    toast.success("Nota criada com sucesso!");
  };

  return (
    <Dialog.Root onOpenChange={handleDialogClose}>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 space-y-3 flex flex-col hover:ring-1 ring-slate-600 outline-none justify-start text-left focus-visible:ring-1 focus-visible:ring-lime-400">
        <p className="text-sm font-medium text-slate-200">Adicionar nota</p>
        <p className="text-sm leading-6 text-slate-400 text-justify">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-slate-900/60" />

        <Dialog.DialogContent className="top-1/2 left-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 h-3/5 z-10 md:w-full w-[calc(100%-1.5rem)]  md:max-w-screen-sm flex flex-col outline-none rounded-md bg-slate-700 absolute mx-auto">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 text-slate-400 p-1.5 hover:text-slate-200">
            <XIcon size={20} />
          </Dialog.Close>
          <form onSubmit={handleSaveNote} className="flex flex-col flex-1">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <p className="text-sm font-medium text-slate-300">
                Adicionar nota
              </p>
              {isOnboardingOpen ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button className="font-medium text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    className="font-medium text-lime-400 hover:underline"
                    onClick={handleEditorClick}
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 bg-transparent text-slate-400 resize-none flex-1 outline-none"
                  onChange={handleTextareaChange}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewNoteCard;
