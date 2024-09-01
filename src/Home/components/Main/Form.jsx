import React from "react";

export default function Form() {
  return (
    <div className="introMain__foot">
      <p>
        A digital library built on the Ethereum blockchain, to preserve the rich
        writings and history of humanity. The Future is ours.
      </p>
      <div className="introMain__form">
        <div className="input">
          <input type="email" placeholder="Your   EMAIL   Address" />
        </div>
        <button type="button" className="button">
          GET UPDATES
        </button>
      </div>
    </div>
  );
}
