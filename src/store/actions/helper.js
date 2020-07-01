import { toast } from "react-toastify";
import React from "react";

export const notify = (error, message, position) => {
  if (error) {
    return toast.error(<p>{message}</p>);
  } else {
    return toast.dark(<p>{message}</p>, {
      position:
        position === null ? toast.POSITION.TOP_CENTER : toast.POSITION.TOP_LEFT,
    });
  }
};
