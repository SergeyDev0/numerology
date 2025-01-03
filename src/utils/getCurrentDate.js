export const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // месяцы индексируются с нуля
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
