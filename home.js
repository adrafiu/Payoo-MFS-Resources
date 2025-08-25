const validPin = 1234;
const transactionData = [];

//*short code:1-parseInt()
// function getInputNumberValue(id) {
//   const value = parseInt(document.getElementById(id).value);
//   return value;
// }

//* short code:2(.innerText)
// function getInputInnerText(id) {
//   const value = parseInt(document.getElementById(id).innerText);
//   return value;
// }

//* short code:3(.value)
// function getInputValue(id) {
//   const value = document.getElementById(id).value;
//   return value;
// }

//* Add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault(); // prevent form refresh
    console.log("Run");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amonunt = parseInt(document.getElementById("add-amount").value);

    if (amonunt <= 0) {
      alert("Invalid amount!");
      return;
    }

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

    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    console.log(transactionData);
  });

//* cashout money feature
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;
  const amonunt = parseInt(document.getElementById("withdraw-amount").value);
  const withdrawPin = document.getElementById("withdraw-pin").value;

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  console.log(amonunt, availableBalance);

  if (amonunt <= 0 || amonunt > availableBalance) {
    alert("Invalid!");
    return;
  }

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

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});

//* transfer money feature

//* toggling feature in details and shortcut

//*Add money
document.getElementById("add-button").addEventListener("click", function () {
  // document.getElementById("add-money-parent").style.display = "block";
  // document.getElementById("cash-out-parent").style.display = "none";
  // document.getElementById("transfer-money-parent").style.display = "none";
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById("add-money-parent").style.display = "block";
});

//* cashOut
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    // document.getElementById("cash-out-parent").style.display = "block";
    // document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("transfer-money-parent").style.display = "none";
    const forms = document.getElementsByClassName("form");

    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById("cash-out-parent").style.display = "block";
  });

//* transfer money
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    // document.getElementById("transfer-money-parent").style.display = "block";
    // document.getElementById("add-money-parent").style.display = "none";
    // document.getElementById("cash-out-parent").style.display = "none";
    const forms = document.getElementsByClassName("form");

    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById("transfer-money-parent").style.display = "block";
  });

//* function to toggle shortcut
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//* get bonus
document.getElementById("bonus-button").addEventListener("click", function () {
  // const forms = document.getElementsByClassName("form");

  // for (const form of forms) {
  //   form.style.display = "none";
  // }
  // document.getElementById("get-bonus-parent").style.display = "block";
  handleToggle("get-bonus-parent");
});

//* Transaction
// document
//   .getElementById("transactions-button")
//   .addEventListener("click", function () {
//     const transactionContainer = document.getElementById(
//       "transaction-container"
//     );

//     for (const data of transactionData) {
//       const div = document.createElement("div");
//       div.innerHTML = `
//        <div id="transaction-container">
//           <div class="bg-white flex justify-between items-center">
//             <div class="rounded-xl p-3">
//               <div class="flex items-center">
//                 <div class="p-3 rounded-full bg-[#f4f5f7]">
//                   <img src="./assets/wallet1.png" alt="" class="mx-auto" />
//                 </div>
//                 <div class="ml-3">
//                   <h1>${data.name}</h1>
//                   <p>${data.date}</p>
//                 </div>
//               </div>
//             </div>
//             <i class="fa-solid fa-ellipsis-vertical mr-5"></i>
//           </div>
//         </div>
//       `;
//       transactionContainer.appendChild(div);
//     }
//   });

// re-solved
document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    // আগের ট্রানজেকশন ক্লিয়ার করো
    transactionContainer.innerHTML = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.className =
        "bg-white flex justify-between items-center mt-3 p-3 rounded-xl";

      div.innerHTML = `
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png" alt="" class="h-6 w-6" />
          </div>
          <div class="ml-3">
            <h1 class="font-semibold">${data.name}</h1>
            <p class="text-sm text-gray-500">${data.date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical mr-5"></i>
      `;

      transactionContainer.appendChild(div);
    }
  });

//* button hover feature:
//* shortcut: function to toggle buttons
function handleButtonToggle(id) {
  const formButtons = document.getElementsByClassName("form-btn");

  for (const button of formButtons) {
    button.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    button.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

//* add money
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  const formButtons = document.getElementsByClassName("form-btn");

  for (const button of formButtons) {
    button.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    button.classList.add("border-gray-300");
  }
  document.getElementById("add-button").classList.remove("border-gray-300");
  document
    .getElementById("add-button")
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
});

//* cashout
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    // const formButtons = document.getElementsByClassName("form-btn");

    // for (const button of formButtons) {
    //   button.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    //   button.classList.add("border-gray-300");
    // }
    // document
    //   .getElementById("cash-out-button")
    //   .classList.remove("border-gray-300");
    // document
    //   .getElementById("cash-out-button")
    //   .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
    handleButtonToggle("cash-out-button");
  });

//* transfer money
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
  });

//* get bonus
document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-button");
});

//* pay bill
document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("bill-button");
});

//* transactions
document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-button");
  });
