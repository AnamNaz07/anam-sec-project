$(".signin-btn").on("click", (e) => {
  e.preventDefault();

  email = $("#email").val();
  password = $("#password").val();
  var postData = {
    email: email,
    password: password,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios
    .post("http://localhost:3000/login", postData, axiosConfig)
    .then((res) => {
      window.location.href = "http://127.0.0.1:5500/main.html";
      localStorage.setItem("username", JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
});
