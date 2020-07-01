import React, { useState } from "react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Payment({ amountToBePayed, productIdList }) {
  const [name, setName] = useState("John Doe");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(
      `https://rishabhvermaeccom.azurewebsites.net/api/v1/payment/razorpay/${localStorage.getItem(
        "user_id"
      )}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: productIdList,
        }),
      }
    ).then((t) => t.json());
    console.log("data", data);
    const options = {
      key: "rzp_test_AlHhGmZ4ggo3m9",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Payment",
      description: "Thank you for showing us some interest",
      image: require("../../../assets/logo.svg"),
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        name,
        email: "some@gmail.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="pay-button">
      <button className="without" onClick={displayRazorpay}>
        PAY
      </button>
      <button className="with-amount" onClick={displayRazorpay}>
        PAY
        <span style={{ marginLeft: "1rem", color: "#f5fefb" }}>
          ${amountToBePayed}
        </span>
      </button>
    </div>
  );
}

export default Payment;
