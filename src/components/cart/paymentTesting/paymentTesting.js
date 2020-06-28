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

const __DEV__ = document.domain === "localhost";
function Payment() {
  const [name, setName] = useState("Mehul");

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(
      "https://f16acff90751.ngrok.io/api/v1/payment/razorpay/5ef85e82b6f0f82e6c8a7567",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: ["5ef30a96ca47e02478e5f4cc", "5ef30a96ca47e02478e5f4ce"],
        }),
      }
    ).then((t) => t.json());
    console.log(data);
    const options = {
      key: __DEV__ ? "rzp_test_AlHhGmZ4ggo3m9" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image: require("../../../assets/logo.svg"),
      handler: function (response) {
        console.log(response);
      },
      prefill: {
        name,
        email: "vermarishabh@gmail.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div>
      <h2>Payment</h2>
      <button onClick={displayRazorpay}>PAY</button>
    </div>
  );
}

export default Payment;
