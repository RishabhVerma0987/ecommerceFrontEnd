import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { notify } from "../../../store/actions/helper";
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
  const history = useHistory();
  async function displayRazorpay() {
    setShow(false);
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
      image: require("../../../assets/logowithbg.svg"),
      handler: function (response) {
        console.log(response);
        notify(false, "Payment Sucessfull !! 🙌", null);
        history.push("/user/mygames");
      },
      prefill: {
        name: "John Doe",
        email: localStorage.getItem("user_email"),
        phone_number: "9899999999",
      },
      onclose: setShow(true),
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const [show, setShow] = useState(true);

  if (show) {
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
  } else {
    return (
      <div className="pay-button">
        <p>Please Wait ...</p>
      </div>
    );
  }
}

export default Payment;
