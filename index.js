let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local");
localElement.innerHTML = `
 ${moment().format("dddd, MMMM D, YYYY H:m A")}`;
//Los Angeles

document.querySelector("#los-angeles").innerHTML = moment()
  .tz("America/Los_Angeles")
  .format("dddd, MMMM D, YYYY H:m A");

//Paris

document.querySelector("#paris").innerHTML = moment()
  .tz("Europe/Paris")
  .format("dddd, MMMM D, YYYY H:m A");

//Tokyo

document.querySelector("#tokyo").innerHTML = moment()
  .tz("Asia/Tokyo")
  .format("dddd, MMMM D, YYYY H:m A");

//Melbourne

document.querySelector("#melbourne").innerHTML = moment()
  .tz("Australia/Melbourne")
  .format("dddd, MMMM D, YYYY H:m A");
