import React, { useEffect } from "react";
import style from "../style/Chat.module.css";
import { observer } from "mobx-react";
import { chatStore, socketStore } from "../store/index";
import InputMessage from "../components/ChatComponent/InputMessage";
// import Setting from "../components/ChatComponent/Setting";
import ChatMessages from "../components/ChatComponent/ChatMessages";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { get_messages_on_chat } from "../api/Chat";
import LoadingPage from "../components/ChatComponent/Loading";
import ChatList from "../components/ChatComponent/ChatList";
import { SocketMessage } from "../types/ChatMessages";
import { useNewChat } from "../hook/NewChat";
function Chat() {
  let { mutate } = useNewChat();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["message", chatStore.chatID],
    queryFn: () => get_messages_on_chat(chatStore.chatID),
    enabled: Boolean(chatStore.chatID),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  let { id } = useParams();

  useEffect(() => {
    if (data?.status === 404) {
      console.log("Чат не найден (404)");
    }
    if (id) {
      chatStore.setChatID(id);
    }
  }, [id]);
  useEffect(() => {
    if (data?.success === false) {
      mutate();
    }
    if (data?.messages) {
      chatStore.setMessages(data.messages);
    }
  }, [data, mutate]);
  useEffect(() => {
    socketStore.connect();

    socketStore.socket.emit("joinRoom", { room: chatStore.chatID });

    return () => {
      socketStore.socket.emit("leaveRoom", { room: chatStore.chatID });
      socketStore.disconnect();
    };
  }, [chatStore.chatID]);

  useEffect(() => {
    socketStore.socket.on("message", (data: SocketMessage) => {
      if (data.connection) return;
      console.log("📩 Получено сообщение с сервера:", data);
      chatStore.setOneMessage({
        sender: data.from,
        text: data.text,
        success: data.success,
      });
    });

    return () => {
      socketStore.socket.off("message");
    };
  }, []);

  return (
    <div className="flex flex-col w-11/12 m-auto max-h-screen">
      {isLoading && <LoadingPage />}
      <Header />
      {isSuccess && (
        <div className="max-h-screen h-screen relative flex justify-between max-w-screen-xl m-auto w-full px-4 lg:px-6 py-2.5 overflow-y-hidden">
          <ChatList />
          <div className="w-3/4">
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
        </div>
      )}
    </div>
  );
}

export default observer(Chat);
