
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
// ----------------------------------------------------------------------

export function fCurrencyVN(number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}


export function converMinutes (minutes) {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  h = h < 10 ? '0' + h : h; 
  m = m < 10 ? '0' + m : m; 
  return h + 'h ' + m +'m';
}

export function converTime (date) {
  var date = new Date(date);
  const hoursAndMinutes = date.getHours() + ':' + date.getMinutes(); 
  return hoursAndMinutes;
}

export function converDate (date) {
  var date = new Date(date);
  var month = date.getUTCMonth();
  var day = date.getUTCDate();
  var newdate =  day + ' ' + monthNames[month];
  return newdate;
}