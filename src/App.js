import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="ce14c3c7-7a27-4ee0-877e-0dc836256d05"
      userName="dodiaditya"
      userSecret="12345678"
    />
  );
};

export default App;
