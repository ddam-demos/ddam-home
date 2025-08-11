import React, { useEffect } from "react";

const ChatWidget = () => {
  useEffect(() => {
    const mugenProps = {
      mode: 'embed',
      projectId: '6476cb57-cb87-41fa-8616-c885926f1fb7',
      title: 'DDAM AI Chat',
      helloMessage: `Hey there! 😃 I'm the friendly and cool DDAM-er chatbot, ready to help you with any recruitment-related questions. If you're interested in joining our talented team of engineers, feel free to ask away! If I don't know the answer, I promise to make you smile instead. Let's chat!`,
      botAvatar: "",
      userAvatar: "/img/user-icon.png",
      buttonIcon: "send",
      buttonColor: "#9333EA",
      textAreaColor: "#0C111B",
      userColor: "#9333EA",
      botColor: "#0C111B",
      backgroundColor: "#E1E1E1",
      backgroundImage: "",
      width: "480",
      height: "280",
      apiKey: '2XkTmBUNALYm',
      source: 'stg'
    };

    if (window.MultiChatEmbed) {
      window.MultiChatEmbed.initialize(mugenProps);
    }
  }, []);

  const styles = {
    position: 'fixed',
    zIndex: 100,
    bottom: 0,
    right: 0,
  };

  return (
    <div id="multi-chat-embed" style={styles}></div>
  );
};

export default ChatWidget;
