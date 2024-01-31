import numbro from "numbro";
import { isObject } from "lodash";

/**
 * Example:
 * - formatNumber(2509500) -> "2,509,500"
 * - formatNumber(1262350.21345) -> "1,262,350.21345"
 */
function formatNumber(value: number | string, option: numbro.Format = {}) {
  if (!isObject(option)) {
    return undefined;
  }

  return numbro(value).format({
    mantissa: 0,
    thousandSeparated: true,
    average: false,
    ...option,
  });
}

/**
 * Example:
 * - formatAverageNumber(1000000) -> "1.0m"
 * - formatAverageNumber(10000000) -> "10m"
 * - formatAverageNumber(1262350.21345) -> "1.3m"
 * - formatAverageNumber(1262350) -> "1.3m"
 * - formatAverageNumber(1234) -> "1.2k"
 */
function formatAverageNumber(
  value: number | string,
  option: numbro.Format = {}
) {
  if (!isObject(option)) {
    return undefined;
  }

  return numbro(value).format({
    totalLength: 2,
    ...option,
    thousandSeparated: true,
    average: true,
  });
}

/**
 * Example:
 * - formatDiscountCodeNumber(0) -> "0 đ"
 * - formatDiscountCodeNumber(1000000) -> "1 M"
 */

function formatDiscountCodeNumber(price: number) {
  if (String(price).length > 6) {
    if (price % 1000000 === 0) {
      return (price / 1000000).toFixed(0) + " M";
    } else {
      return (price / 1000000).toFixed(1) + " M";
    }
  } else {
    return formatNumber(price) + " đ";
  }
}

/*
  isNumeric(123)         // true
  isNumeric('123')       // true
  isNumeric('1e10000')   // true (This translates to Infinity, which is a number)
  isNumeric('foo')       // false
  isNumeric('10px')      // false
*/
export function isNumeric(num: any) {
  return !isNaN(num);
}
function parseStringToNumber(str: string) {
  let num: number = parseInt(str);
  return num;
}

export {
  formatNumber,
  formatAverageNumber,
  numbro,
  formatDiscountCodeNumber,
  parseStringToNumber,
};
