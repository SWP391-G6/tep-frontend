import dayjs from "dayjs";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("vn");

const isStartingFromTomorrow = (date: dayjs.Dayjs) => {
  const today = dayjs().add(1, "day").startOf("day");
  const targetDate = dayjs(date).startOf("day");

  return targetDate.isAfter(today, "day") || targetDate.isSame(today, "day");
};

const isEndDateValid = (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  return end.isAfter(start, 'day') && end.diff(start, 'day') >= 3;
};

export { isStartingFromTomorrow, isEndDateValid };
