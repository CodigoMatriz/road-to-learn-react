import React from "react";

export const DisableButton = ({ onDismiss, className = "", children }) => {
  return (
    <button className={className} onClick={onDismiss} type="button">
      {children}
    </button>
  );
};
