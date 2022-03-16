import { DateTime } from 'luxon';

export const getCurrentDate = () => {
  const today = DateTime.now().toISODate();
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.cugetDate() - 1);
  currentDate = DateTime.utc(currentDate).toISODate;

  return currentDate;
};

export const dateToFormat = (selectedDate) => {
  const day = selectedDate.getDate();
  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  return DateTime.fromObject({ year, month, day }).toISODate();
};
