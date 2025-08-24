const validPin = 1234;

//Add money feature
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
      alert("Please provide valid account number.");
      return;
    }

    if (pin != validPin) {
      alert("Please provide valid pin number.");
      return;
    }

    const totalNewBalance = amonunt + availableBalance;
    document.getElementById("available-balance").innerText = totalNewBalance;
  });

//cashout money feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;
  const amonunt = parseInt(document.getElementById("withdraw-amount").value);
  const withdrawPin = document.getElementById("withdraw-pin").value;

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  console.log(amonunt, availableBalance);

  if (agentNumber.length < 11) {
    alert("Please provide valid agent number.");
    return;
  }

  if (withdrawPin != validPin) {
    alert("Please provide valid pin number.");
    return;
  }

  const totalNewBalance = availableBalance - amonunt;
  console.log(totalNewBalance);
  document.getElementById("available-balance").innerText = totalNewBalance;
});

// toggling feature

//Add money
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

//cashOut
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
