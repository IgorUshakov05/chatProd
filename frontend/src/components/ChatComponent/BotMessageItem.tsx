import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"; // Импортируем плагин для подсветки
import "highlight.js/styles/github.css"; // Импортируем тему подсветки (можно выбрать любую тему)
import remarkGfm from "remark-gfm";
import Message from "../../types/ChatMessages";

function BotMessage({ message }: Message) {
  return (
    <Markdown rehypePlugins={[rehypeHighlight, remarkGfm]}>{message}</Markdown>
  );
}

export default BotMessage;
