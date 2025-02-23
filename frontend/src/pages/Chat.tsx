import React from "react";
import style from "../style/Chat.module.css";
import { observer } from "mobx-react";
import { chatStore } from "../store/index";
import InputMessage from "../components/ChatComponent/InputMessage";
// import Setting from "../components/ChatComponent/Setting";
import ChatMessages from "../components/ChatComponent/ChatMessages";
import Header from "../components/Header";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { get_messages_on_chat } from "../api/Chat";
import LoadingPage from "../components/ChatComponent/Loading";
import ChatList from "../components/ChatComponent/ChatList";
function Chat() {
  let { id } = useParams();
  if (id) {
    chatStore.setChatID(id);
  }
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["message"],
    queryFn: () => get_messages_on_chat(chatStore.chatID),
  });

  if (isError) return <Navigate to={"/"} />;
  if (data?.messages) chatStore.setMessages(data?.messages);
  return (
    <div className="flex flex-col w-11/12 m-auto max-h-screen">
      {isLoading && <LoadingPage />}
      <Header />
      {isSuccess && (
        <div className="max-h-screen h-screen relative flex justify-between max-w-screen-xl m-auto w-full px-4 lg:px-6 py-2.5 pb-12">
          <ChatList />
          <div className="w-3/4">
            {/* <Setting /> */}

            <div
              className={`${style.content} flex flex-col justify-between mx-auto`}
            >
              <div
                className={`${style.scroll} h-full overflow-y-scroll overflow-x-hidden relative`}
              >
                {chatStore.messages.length ? (
                  <ChatMessages />
                ) : (
                  <h1 className="text-4xl font-semibold text-gray-900 dark:text-white max-h-max absolute top-0 bottom-0 m-auto right-0 left-0 w-max">
                    Чат пуст
                  </h1>
                )}
              </div>
              <InputMessage />
            </div>
          </div>
          <div className="min-w-60"></div>
        </div>
      )}
    </div>
  );
}

export default observer(Chat);
