// recebe como parâmetro o tempo para converter e devolve uma string
export function convertDurationToTimeString(duration: number) {
  // arredondados o resultado para baixo
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  // criamos a string que contem hora - min - segundo
  const timeString = [hours, minutes, seconds]
    // percorre array
    .map((unit) => String(unit).padStart(2, "0"))
    // unir
    .join(":");

  return timeString;
}
