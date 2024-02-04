const months = [
  null,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const readableDate = (date) => {
  if (!date)
    return date;
  const splitDate = date.split("-");
  const month = months[parseInt(splitDate[1])];
  const day = parseInt(splitDate[2]);
  const year = splitDate[0];
  return `${month} ${day}, ${year}`;
};
export {
  readableDate as r
};
