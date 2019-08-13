var df = {};
df.getDay = function (date) {
  var day = ['Chủ Nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  return day[date.getDay()];
}
df.getDate = function (date) {
  var d = '';
  var m = (date.getMonth() + 1);
  if (m < 10)
    m = "0" + m;
  var day = date.getDate();
  if (day < 10)
    day = "0" + day;
  d = day + "/" + m + "/" + (date.getFullYear());
  return d;
}
df.getTime=function(today){
  var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        return h + ":" + m + ":" + s;
}
function checkTime(i) {
  if (i < 10) { i = "0" + i }  // add zero in front of numbers < 10
  return i;
}
export default function dateFormater(date, option) {
  if (option == 'day') {
    return df.getDay(date)
  }
  if (option == 'date') { return df.getDate(date) }
  if(option=='time'){
    return df.getTime(date);
  }
}
