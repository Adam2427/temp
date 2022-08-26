var wheeltype = "";
let vechileType = document.getElementById("vechileType");
let vechileBrand = document.getElementById("vechileBrand");
let optionVechileType = '<option value="">select vechile type</option>';
let optionVechileBrand = '<option value="">select vechile Brand</option>';

let data = {
  twoWheeler: {
    bicycle: ["Herclues 🚲", "Hero 🛴"],
    motorCycle: ["Royal Enfield 🏍", "Scooter 🛵", "Pulsar 🏍"],
  },
  fourWheeler: {
    lightVechile: ["Car 🚙", "Auto 🛺", "Taxi 🚕"],
    heavyVechile: [
      "Lorry 🚛",
      "Truck 🚜",
      "Train 🚆",
      "Ship 🚢",
      "Aeroplane ✈",
      "Rocket 🚀",
    ],
  },
};

function doWheeler(value) {
  //To change the dropValues to Reset the all values

  if (
    (wheeltype !== value && wheeltype != "") ||
    (wheeltype == "" && value == "")
  ) {
    vechileBrand.innerHTML = optionVechileBrand;
    vechileType.innerHTML = optionVechileType;
  }
  wheeltype = value;

  if (value != "") {
    let optionVal = optionVechileType;

    for (let val of Object.keys(data[value])) {
      optionVal += ` <option value="${val}">${val}${doIcon(
        value,
        val
      )}</option>`;
    }
    vechileType.innerHTML = optionVal;
  }
}

function doVechileType(value) {
  if (value != "") {
    let optionVal = optionVechileBrand;

    for (let val of Object.values(data[wheeltype][value])) {
      optionVal += ` <option value="${val}">${val}</option>`;
    }
    vechileBrand.innerHTML = optionVal;
  }
}

//To set values+Icons;

function doIcon(wheel, value) {
  if (wheel == "twoWheeler") {
    return value == "bicycle" ? "  🚲" : "  🏍";
  } else if (wheel == "fourWheeler") {
    return value == "lightVechile" ? "  🚖" : "  🚚";
  }
}
