const backgroundcolor = document.getElementById("backgroundcolor");

/*function selectionBackground() {
  if (backgroundcolor.value == "white")
    document.body.style.background = "white";
  if (backgroundcolor.value == "blue") document.body.style.background = "blue";
  if (backgroundcolor.value == "green")
    document.body.style.background = "green";
}*/

function selectionBackground() {
  switch (backgroundcolor.value) {
    case "white":
      document.body.style.background = "white";
      break;
    case "blue":
      document.body.style.background = "blue";
      break;
    case "green":
      document.body.style.background = "green";
      break;
    default:
      document.body.style.background = "white";
  }
}
