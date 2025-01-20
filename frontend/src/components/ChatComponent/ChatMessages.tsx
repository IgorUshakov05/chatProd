import React from "react";
import { From } from "../../types/ChatMessages";
import UserMessage from "./UserMessageItem";
import BotMessage from "./BotMessageItem";
function ChatMessages() {
  const markdownText = `
  # Добро пожаловать в Markdown!

  ## Основные элементы

  - **Жирный текст**: \`**текст**\`
  - *Курсив*: \`*текст*\`
  - ~~Зачеркнутый~~: \`~~текст~~\`

  ## Списки

  ### Нумерованный список
  1. Первый элемент
  2. Второй элемент
  3. Третий элемент

  ### Маркированный список
  - Пункт 1
  - Пункт 2
    - Вложенный пункт
    - Еще один вложенный пункт

  ## Код

  ### Однострочный код
  Используйте \`console.log('Hello, world!');\`.

  ### Многострочный код
  \`\`\`javascript
  function greet(name) {
    return \`Привет, \${name}!\`;
  }

  console.log(greet('Игорь'));
  \`\`\`

  ## Ссылки и изображения

  - Ссылка: [Посетите Google](https://google.com)
  - Изображение:

    ![Логотип React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

  ## Таблицы

  | Имя       | Возраст | Город       |
  |-----------|---------|-------------|
  | Иван      | 25      | Москва      |
  | Ольга     | 22      | Санкт-Петербург |
  | Александр | 30      | Казань      |

  ## Цитаты

  > Это пример цитаты.

  > **Цитаты можно вложить:**
  > > Вложенная цитата.

  ## Горизонтальная линия

  ---

  Вот и всё! 😊
  `;
  return (
    <div className="flex gap-5 flex-col pt-5 pb-5">
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <BotMessage message={markdownText} sender={From.User} />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
      <UserMessage
        message="Heawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wdHeawdhuawd ahgwudb a89wyd auwd8y9ayfwdhu yaw8tdf yagiwdy8tafdwygllo lorem100  a wd"
        sender={From.User}
      />
    </div>
  );
}

export default ChatMessages;
