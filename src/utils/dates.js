export const formatDateToView = (date, options) => {
  const convertDate = new Date(date);
  return convertDate.toLocaleString('pt-BR', options);
};
