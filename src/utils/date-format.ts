import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 *
 * @param date Data a ser formatada
 * @returns Retorna uma string contendo o tempo até a data
 */

export function dateFormat(date: Date) {
  const formatedDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });

  return formatedDate.charAt(0).toUpperCase() + formatedDate.slice(1);
}
