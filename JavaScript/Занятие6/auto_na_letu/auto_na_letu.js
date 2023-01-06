let audiModels = ["Audi A1", "Audi A2", "Audi A3", "Audi A4", "Audi A5", "Audi A6"];
let suzukiModels = ["Suzuki Jimny", "Suzuki Samurai", "Suzuki Grand Vitara"];

function selectBrand(sender) {
    if (sender.options[sender.selectedIndex].value == "none") document.getElementById("models").style.display = "none";
    else document.getElementById("models").style.display = "block";

    let optionsString = "";
    if (sender.options[sender.selectedIndex].value == "audi") {
        for (let model of audiModels) optionsString += `<option>${model}</option>`;
    }
    if (sender.options[sender.selectedIndex].value == "suzuki") {
        for (let model of suzukiModels) optionsString += `<option>${model}</option>`;
    }
    document.getElementById("models").innerHTML = optionsString;
}