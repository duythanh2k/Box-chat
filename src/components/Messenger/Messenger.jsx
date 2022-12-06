import "./messenger.css";
import React, { useState, useEffect, useRef } from "react";
import { IoPaperPlane, IoCloseCircle } from "react-icons/io5";
import Message from "../Message/Message";
import ChoiceButton from "../ChoiceButton/ChoiceButton";
import avatar from "../../assets/chatbot-avatar.png";

const Messenger = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isChoiceClick, setIsChoiceClick] = useState(false);
  const scrollRef = useRef();

  const getTextFromBot = () => {
    const responseSample = [
      "What do you want me to do?",
      "Can I help you?",
      "Do you have any girlfriends?",
      "What kind of person you are?",
      "Which size of your dick nearly match? less than 12cm, 12cm, 14cm, 16cm, 18cm or biger?",
      "Who do you love the most?",
      "Have you ever thinking about suicide?",
      "Fuck you!",
    ];

    return responseSample[(Math.random() * responseSample.length) | 0];
  };

  const getOptionFromBot = () => {
    const optionText = [
      "Hell yeah!!!",
      "I do for my FAM.",
      "Just Me, Myself and I.",
      "I don't need any fake friends, girlfriends, partners, superior and the other. I just need me, for the sake of me. To the best of me.",
      "Farewell.",
      "Size of my dick is unpredictable.",
      ".",
    ];
    const optionAmount = Math.floor(Math.random() * 3) + 1;
    let optionSample = [];

    // Get random amount of random different options
    for (let i = 0; i < optionAmount; i++) {
      let randomOption = optionText[(Math.random() * optionText.length) | 0];
      if (optionSample.includes(randomOption)) {
        randomOption = optionText[(Math.random() * optionText.length) | 0];
      } else {
        optionSample = [...optionSample, randomOption];
      }
    }
    return optionSample;
  };

  const getTextFromButtonChoice = () => {
    const textSample = [
      "Are you impotence?",
      "Would you like to fill your girl with your milk?",
      "Your tiny cock!",
      "How did you do that?",
      "If I were you, I will go to hospital and ask them how to grow my dick bigger. Why? Because that one of yours is too tiny. Even I cannot see where it is.",
      "Jackass!",
    ];

    return textSample[(Math.random() * textSample.length) | 0];
  };

  const getConversation = () => {
    const randomBotMessage = getTextFromBot();
    const randomBotOption = getOptionFromBot();
    const messageOrOption = Math.floor(Math.random() * 2);

    // Put in messages array random message text or option buttons
    if (messageOrOption === 0) {
      setMessages([
        ...messages,
        [
          <Message message={newMessage} own />,
          <Message message={randomBotMessage} />,
        ],
      ]);
    } else {
      setMessages([
        ...messages,
        [
          <Message message={newMessage} own />,
          randomBotOption.map((eachOption) => (
            <ChoiceButton randomText={() => setIsChoiceClick(true)} choiceText={eachOption} />
          )),
        ],
      ]);
    }

    setNewMessage("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    getConversation();
  };

  const closeChat = () => {
    document.querySelector(".chatBox").classList = "chatHidden";
  }

  useEffect(() => {
    const randomBotText = getTextFromButtonChoice();

    if (isChoiceClick) {
      setMessages([
        ...messages,
        [
          <Message message={randomBotText} />,
        ],
      ]);
      setIsChoiceClick(false);
    }
  }, [isChoiceClick, messages, newMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatBox">
      <div className="nameDisplay">
        🤖 Interactive Bot
        <button onClick={closeChat} className="closeButton">
          <IoCloseCircle />
        </button>
      </div>

      <div className="chatBoxWrapper">
        <div className="divider"></div>

        <div className="chatBoxTop">
          <div className="startConversation">
            <img className="botLogo" src={avatar} alt="chatbot" />
            <p className="preface">
              Start a conversation by send me something
            </p>
          </div>

          <Message message="Hello, I am a chatbot, was developed by Pham Duy Thanh from 30/11/2022 at 11:37 am." />
          <Message message="If you have problem, please contact me. I will reply you as quick as possible. Dear!" />
          {messages.map((message) => (
            <div ref={scrollRef}>{message}</div>
          ))}
        </div>

        <div className="chatBoxBottom">
          <input
            className="chatInput"
            type="text"
            onKeyDown={(evt) => {
              if (evt.key === "Enter") {
                handleSubmit(evt);
              }
            }}
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
            placeholder="Aa"
          />
          <button
            className="chatSubmitButton"
            onClick={newMessage ? handleSubmit : null}
          >
            <IoPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
