import React, { useState } from "react";
import "./svg.scss";
import { createCart } from "../../../store/actions/cart";
import { useDispatch } from "react-redux";
function WishListSVG({ productId }) {
  //add to card and saved for later to true
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 34.355 30.348"
      onClick={() => {
        setColor(!color);
        dispatch(createCart(productId, true));
      }}
    >
      <path
        id="Icon_feather-heart"
        data-name="Icon feather-heart"
        d="M31.26,6.915a8.25,8.25,0,0,0-11.67,0L18,8.505l-1.59-1.59A8.252,8.252,0,1,0,4.74,18.585l1.59,1.59L18,31.845l11.67-11.67,1.59-1.59a8.25,8.25,0,0,0,0-11.67Z"
        transform="translate(-0.823 -2.997)"
        fill={color ? "#cf123c" : "none"} //dynamic
        stroke="#cf123c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
    </svg>
  );
}

export default WishListSVG;
