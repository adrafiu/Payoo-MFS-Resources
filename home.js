const validPin = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); // prevent form refresh
    console.log("Run");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amonunt = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    console.log(availableBalance);
    if (accountNumber.length < 11) {
      alert("Please provide valid account number=");
      return;
    }

    if (pin != validPin) {
      alert("Please provide valid pin number.");
      return;
    }

    const totalNewBalance = amonunt + availableBalance;
    document.getElementById("available-balance").innerText = totalNewBalance;
  });
