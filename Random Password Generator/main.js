var password = document.getElementById("password");


// var options = document.querySelector('.options');
//
// options.querySelector('#min').onchange = function () {
//     generator.setMin(this.value);
// };

// console.log(textoc);
// @dev The function getPassword() is used to generate a random password.
function getPassword() {
  var numLen = document.getElementById("min");
  var passwordLength = parseInt(numLen.value);

  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(passwordLength<=0){
      passwordLength = 1;
      numLen.value = "1";
    }
    if(passwordLength>15){
      passwordLength = 15;
      numLen.value = "15";
    }

  console.log(passwordLength);
  console.log(9);
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}
// @dev The function copyPassword() is used to copy the password to the clipboard.
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}
