import * as Dialog from "@radix-ui/react-dialog";

interface NoteCardProps {
  date: Date;
  content: string;
}

/**
* 
*@param date  a date - Data de criação
*@param content a string - Conteudo do card
*@returns retorna o componente NoteCard

*/

const NoteCard = ({ date, content }: NoteCardProps) => {
  return (
    //focus-visible só aplica o estilo quando esta dando focus usando tab,
    //clicando não pega
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-800 p-5 space-y-3 flex flex-col hover:ring-1 ring-slate-600 outline-none justify-start text-left focus-visible:ring-1 focus-visible:ring-lime-400">
        <p className="text-sm font-medium text-slate-300">
          {date.toISOString()}
        </p>
        <p className="text-sm leading-6 text-slate-400 flex-1 overflow-auto text-justify  pr-1.5 ">
          {content}
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-slate-900/60" />
        <Dialog.DialogContent className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/5 z-10 w-full max-w-screen-sm flex flex-col outline-none rounded-md bg-slate-700 absolute">
          <div className="flex flex-1 flex-col gap-3 p-5">
            <p className="text-sm font-medium text-slate-300">
              {date.toISOString()}
            </p>
            <p className="text-sm leading-6 text-slate-400 flex-1 overflow-auto text-justify  pr-1.5 ">
              {content}
            </p>
          </div>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NoteCard;
