import React, { useState } from "react";
import "./svg.scss";
function CartSVG() {
  const [color, setColor] = useState(false);

  return (
    <svg
      id="Icon_feather-shopping-cart"
      data-name="Icon feather-shopping-cart"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 36.862 35.536"
      onClick={() => setColor(!color)}
    >
      <path
        id="Path_1"
        data-name="Path 1"
        d="M15,31.5A1.5,1.5,0,1,1,13.5,30,1.5,1.5,0,0,1,15,31.5Z"
        transform="translate(0.302 1.036)"
        fill="none"
        stroke="#f1d18a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
      <path
        id="Path_2"
        data-name="Path 2"
        d="M31.5,31.5A1.5,1.5,0,1,1,30,30,1.5,1.5,0,0,1,31.5,31.5Z"
        transform="translate(0.862 1.036)"
        fill="none"
        stroke="#f1d18a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
      <path
        id="Path_3"
        data-name="Path 3"
        d="M1.5,1.5H7.657l4.125,21.01a3.093,3.093,0,0,0,3.078,2.526H29.821A3.093,3.093,0,0,0,32.9,22.51L35.362,9.345H9.2"
        transform="translate(0 0)"
        fill={color ? "#f1d18a" : "none"} //dynamic
        stroke="#f1d18a"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
    </svg>
  );
}

export default CartSVG;
