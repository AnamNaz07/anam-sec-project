document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let id = JSON.parse(localStorage.getItem("username"))._id;
  let allergy = "";
  let type1 = document.querySelector("#type1");
  let type2 = document.querySelector("#type2");
  let type3 = document.querySelector("#type3");
  let type4 = document.querySelector("#type4");
  let type5 = document.querySelector("#type5");

  let symptoms = [];
  if (type1.checked) {
    symptoms.push(type1.value);
  }
  if (type2.checked) {
    symptoms.push(type2.value);
  }
  if (type3.checked) {
    symptoms.push(type3.value);
  }
  if (type4.checked) {
    symptoms.push(type4.value);
  }
  if (type5.checked) {
    symptoms.push(type5.value);
  }

  if (symptoms.length == 1) {
    allergy = "food allergy";
  } else if (symptoms.length == 2) {
    allergy = "pollen allergy";
  } else if (symptoms.length == 3) {
    allergy = "dust allergy";
  } else if (symptoms.length == 4) {
    allergy = "mold allergy";
  } else {
    allergy = "insect allergy";
  }

  var postData = {
    allergy: allergy,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios
    .put("http://localhost:3000/updateAllergy/" + id, postData, axiosConfig)
    .then((res) => {
      window.location.href = "http://127.0.0.1:5500/weather.html";
      localStorage.setItem("username", JSON.stringify(res.data.user));
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
});
