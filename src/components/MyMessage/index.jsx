import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <div className="p-3 bg-gray-300 rounded-md max-h-64 max-w-64 float-right mr-4">
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="object-cover rounded-md max-h-52 max-w-52 float-right"
          style={{ minHeight: 100, minWidth: 100 }}
        />
      </div>
    );
  }

  return (
    <div
      className="p-3 rounded-l-full rounded-br-full px-5 float-right mr-5 text-white bg-purple-900"
      style={{
        maxWidth: "60%",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
