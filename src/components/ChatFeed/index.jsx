import React from "react";
import MessageForm from "../MessageForm";
import MyMessage from "../MyMessage";
import TheirMessage from "../TheirMessage";
import classnames from "classnames";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    const readReceiptClass = classnames(
      "w-3 h-3 rounded-full m-1 bg-no-repeat bg-center bg-cover",
      {
        "float-right": isMyMessage,
        "float-left": !isMyMessage,
      }
    );

    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={index}
            className={readReceiptClass}
            style={{
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      const readReceiptsClass = classnames("relative bottom-1", {
        "mr-4 ml-0": isMyMessage,
        "mr-0 ml-16": !isMyMessage,
      });

      return (
        <div key={index} style={{ width: "100%" }}>
          <div className="w-full inline-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div className={readReceiptsClass}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return "Loading....";

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-scroll bg-gray-100">
      <div className="text-center pt-4 pb-8">
        <div className="font-bold text-2xl text-purple-700">{chat.title}</div>
        <div className="font-semibold text-xs pt-1 text-purple-800">
          {chat.people.map((person) => ` ${person.person.username} `)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="absolute bottom-0 p-5 w-full overflow-x-hidden bg-gray-200">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
