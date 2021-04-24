import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export default {
  getDate() {
    const currentDate = format(new Date(), "EEEEEE, d MMMM", {
      locale: ptBR,
    });

    return currentDate;
  },
};
