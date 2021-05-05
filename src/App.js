import React from "react";
import { ChatEngine } from "react-chat-engine";
import { ChatFeed, LoginForm } from "./components";

import "./App.css";

const App = () => {
  const userData = JSON.parse(localStorage.getItem("userDataChat"));

  if (!userData) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="ce14c3c7-7a27-4ee0-877e-0dc836256d05"
      userName={userData.username}
      userSecret={userData.password}
      renderChatFeed={(chatFeedProps) => <ChatFeed {...chatFeedProps} />}
    />
  );
};

export default App;
