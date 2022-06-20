$(".signin-btn").on("click", (e) => {
  username = $("#name").val();
  email = $("#email").val();
  password = $("password").val();
  var postData = {
    username: username,
    email: email,
    password: email,
  };

  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios
    .post("http://localhost:3000/addUser", postData, axiosConfig)
    .then((res) => {
      localStorage.setItem("username", JSON.stringify(res.data.user));
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
});
