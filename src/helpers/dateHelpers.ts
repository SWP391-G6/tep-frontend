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
  return end.isAfter(start, "day") && end.diff(start, "day") >= 3;
};

const isTransactionValid = (expireDate: dayjs.Dayjs): boolean => {
  const currentDate = dayjs(); // Lấy ngày hiện tại
  const expirationDate = dayjs(expireDate); // Chuyển chuỗi expireDate thành đối tượng dayjs

  return expirationDate.isAfter(currentDate); // Kiểm tra xem ngày hết hạn có sau ngày hiện tại không
};

const isOver18 = (dateOfBirth: dayjs.Dayjs): boolean => {
  const dob = dayjs(dateOfBirth);
  const currentDate = dayjs();
  const age = currentDate.diff(dob, "year");
  // Check if age is greater than or equal to 18
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

export { isStartingFromTomorrow, isEndDateValid, isTransactionValid, isOver18 };
