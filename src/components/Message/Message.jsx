import "./message.css";
import React from "react";
// import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">{message}</p>
      </div>
      <div className="messageBottom">22:05</div>
    </div>
  );
};

export default Message;
