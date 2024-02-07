import * as Dialog from "@radix-ui/react-dialog";
import { dateFormat } from "../utils/date-format";
import { XIcon } from "lucide-react";

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
  const formatedDate = dateFormat(date);
  return (
    //focus-visible só aplica o estilo quando esta dando focus usando tab,
    //clicando não pega
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-800 p-5 space-y-3 flex flex-col hover:ring-1 ring-slate-600 outline-none justify-start text-left focus-visible:ring-1 focus-visible:ring-lime-400">
        <p className="text-sm font-medium text-slate-300">{formatedDate}</p>
        <p className="text-sm leading-6 text-slate-400 flex-1 overflow-auto text-justify  pr-1.5 ">
          {content}
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-slate-900/60" />

        <Dialog.DialogContent className="top-1/2 left-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 h-3/5 z-10 md:w-full w-[calc(100%-1.5rem)]  md:max-w-screen-sm flex flex-col outline-none rounded-md bg-slate-700 absolute mx-auto">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 text-slate-400 p-1.5 hover:text-slate-200">
            <XIcon size={20} />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <p className="text-sm font-medium text-slate-300">{formatedDate}</p>
            <p className="text-sm leading-6 text-slate-400 flex-1 overflow-auto text-justify  pr-1.5 ">
              {content}
            </p>
          </div>
          <button
            type="button"
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline ">
              apagar esta nota
            </span>
            ?
          </button>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NoteCard;
