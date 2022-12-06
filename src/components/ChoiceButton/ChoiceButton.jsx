import "./choiceButton.css";
import React from "react";

const ChoiceButton = ({ randomText, choiceText }) => {

  return (
    <div className="options">
      <button onClick={randomText} className="optionButton">{ choiceText }</button>
    </div>
  );
};

export default ChoiceButton;
