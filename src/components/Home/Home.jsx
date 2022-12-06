import "./home.css";
import React from "react";
import Messenger from "../Messenger/Messenger";

const Home = () => {
  return (
    <div className="homePage">
      <div className="chatField">
      {/* <div className="hiddenLogo">
        <button onClick={openChat}>
          <img className="botLogo" src={avatar} alt="chatbot" />
        </button>
      </div> */}
        <Messenger />
        <Messenger />
        <Messenger />
      </div>
    </div>
  );
};

export default Home;
