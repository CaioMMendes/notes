import * as TooltipRadix from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface TooptipProps {
  children: ReactNode;
}

const Tooltip = ({ children }: TooptipProps) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className="bg-slate-700 rounded-md px-2 py-2 shadow-md left-0 top-0"
            sideOffset={5}
          >
            Add to library
            <TooltipRadix.Arrow className="TooltipRadixArrow" />
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

export default Tooltip;
