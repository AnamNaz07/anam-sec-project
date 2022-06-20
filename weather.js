let allergies = JSON.parse(localStorage.getItem("username")).allergies;
let lastAllergy = allergies[allergies.length - 1];

if (lastAllergy != undefined) {
  let foodAllergyDetails = {
    weatherConditions: ["food-condition-1", "food-condition-2"],
    weatherEffects: ["food-effect-1", "food-effect-2"],
    precautions: ["food-precaution-1", "food-precaution-2"],
  };
  let pollenAllergyDetails = {
    weatherEffects: ["Rain has no effect", "Wind will worsen the allergy"],
    weatherConditions: ["Wind", "Rain"],
    precautions: ["avoid drying clothes", "wear wraparound sunglasses"],
  };
  let dustAllergyDetails = {
    weatherConditions: ["dust-condition-1", "dust-condition-2"],
    weatherEffects: ["dust-effect-1", "dust-effect-2"],
    precautions: ["dust-precaution-1", "dust-precaution-2"],
  };
  let moldAllergyDetails = {
    weatherConditions: ["mold-condition-1", "mold-condition-2"],
    weatherEffects: ["mold-effect-1", "mold-effect-2"],
    precautions: ["mold-precaution-1", "mold-precaution-2"],
  };
  let insectAllergyDetails = {
    weatherConditions: ["insect-condition-1", "insect-condition-2"],
    weatherEffects: ["insect-effect-1", "insect-effect-2"],
    precautions: ["insect-precaution-1", "insect-precaution-2"],
  };

  $("#last-allergy-name").text("You have " + lastAllergy);

  if (lastAllergy == "food allergy") {
    $("#weather-condition-1").text(foodAllergyDetails.weatherConditions[0]);
    $("#weather-condition-2").text(foodAllergyDetails.weatherConditions[1]);

    $("#weather-effect-1").text(foodAllergyDetails.weatherEffects[0]);
    $("#weather-effect-2").text(foodAllergyDetails.weatherEffects[1]);

    $("#weather-precaution-1").text(foodAllergyDetails.precautions[0]);
    $("#weather-precaution-2").text(foodAllergyDetails.precautions[1]);
  } else if (lastAllergy == "pollen allergy") {
    $("#weather-condition-1").text(pollenAllergyDetails.weatherConditions[0]);
    $("#weather-condition-2").text(pollenAllergyDetails.weatherConditions[1]);

    $("#weather-effect-1").text(pollenAllergyDetails.weatherEffects[0]);
    $("#weather-effect-2").text(pollenAllergyDetails.weatherEffects[1]);

    $("#weather-precaution-1").text(pollenAllergyDetails.precautions[0]);
    $("#weather-precaution-2").text(pollenAllergyDetails.precautions[1]);
  } else if (lastAllergy == "dust allergy") {
    $("#weather-condition-1").text(dustAllergyDetails.weatherConditions[0]);
    $("#weather-condition-2").text(dustAllergyDetails.weatherConditions[1]);

    $("#weather-effect-1").text(dustAllergyDetails.weatherEffects[0]);
    $("#weather-effect-2").text(dustAllergyDetails.weatherEffects[1]);

    $("#weather-precaution-1").text(dustAllergyDetails.precautions[0]);
    $("#weather-precaution-2").text(dustAllergyDetails.precautions[1]);
  } else if (lastAllergy == "mold allergy") {
    $("#weather-condition-1").text(moldAllergyDetails.weatherConditions[0]);
    $("#weather-condition-2").text(moldAllergyDetails.weatherConditions[1]);

    $("#weather-effect-1").text(moldAllergyDetails.weatherEffects[0]);
    $("#weather-effect-2").text(moldAllergyDetails.weatherEffects[1]);

    $("#weather-precaution-1").text(moldAllergyDetails.precautions[0]);
    $("#weather-precaution-2").text(moldAllergyDetails.precautions[1]);
  } else if (lastAllergy == "insect allergy") {
    $("#weather-condition-1").text(insectAllergyDetails.weatherConditions[0]);
    $("#weather-condition-2").text(insectAllergyDetails.weatherConditions[1]);

    $("#weather-effect-1").text(insectAllergyDetails.weatherEffects[0]);
    $("#weather-effect-2").text(insectAllergyDetails.weatherEffects[1]);

    $("#weather-precaution-1").text(insectAllergyDetails.precautions[0]);
    $("#weather-precaution-2").text(insectAllergyDetails.precautions[1]);
  }
} else {
  $("#last-allergy-name").text("No Allergies In Record");

  $("#weather-condition-1").text("-");
  $("#weather-condition-2").text("-");

  $("#weather-effect-1").text("-");
  $("#weather-effect-2").text("-");

  $("#weather-precaution-1").text("-");
  $("#weather-precaution-2").text("-");
}
