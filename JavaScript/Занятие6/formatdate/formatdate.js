function formatDate(date) {
  let difference = new Date() - date;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (difference < 1000) {
    return "прямо сейчас";
  } else if (difference < 60 * 1000) {
    return Math.round(difference / 1000) + " секунд назад";
  } else if (difference < 3600 * 1000) {
    return Math.round(difference / 60000) + " минут назад";
  } else {
    return `${day}.${month}.${year} ${hour}:${minutes}`
  }
}

//alert(formatDate(new Date(new Date() - 1)));
//alert(formatDate(new Date(new Date() - 30 * 1000)));
//alert(formatDate(new Date(new Date() - 6 * 60 * 1000)));
//alert(formatDate(new Date(new Date() - 86400 * 4 * 1000)));
