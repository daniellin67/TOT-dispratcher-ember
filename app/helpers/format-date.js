import { helper } from '@ember/component/helper';
import dateFormater from "../utils/date-formater";
export function formatDate([date, option]) {
  return dateFormater(date, option);
}
export default helper(formatDate);
