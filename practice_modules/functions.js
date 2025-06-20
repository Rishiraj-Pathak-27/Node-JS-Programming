function login(username, password) {
  if (username === "RishirajPathak" && password === 123456) {
    console.log("Login Successfull...");
  } else {
    console.log("You have entered wrong username or password");
  }
}


module.exports = login;
