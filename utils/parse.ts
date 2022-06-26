export const parseCurrency = (value: number): string => {
  return value.toLocaleString("es-PE", {
    style:"currency",
    currency:"PER",
  }).replace("PER","S/.");
};