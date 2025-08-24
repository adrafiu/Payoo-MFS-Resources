// Login button functionality

document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault(); // prevent form refresh

  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-btn").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-button").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Iinvalid!");
  }
});
