import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"; // Импортируем плагин для подсветки
import "highlight.js/styles/github.css"; // Импортируем тему подсветки (можно выбрать любую тему)
import remarkGfm from "remark-gfm";
import Message from "../../types/ChatMessages";
import style from "../../style/Markdown.module.css";

function BotMessage({ message }: Message) {
  return (
    <Markdown
      className={`${style.markdownText} flex gap-5 flex-col pt-5 pb-5`}
      rehypePlugins={[rehypeHighlight, remarkGfm]}
    >
      {message}
    </Markdown>
  );
}

export default BotMessage;
