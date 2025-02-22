
![Logo](https://github.com/IgorUshakov05/Web-Chat-With-AI/blob/main/frontend/public/WebHunt.png?raw=true)


# Web Chat With AI

Чата с использованием искусственного интеллекта.


## Стек

**Клиент:** React, TypeScript, MobX, MobX-React, Axios, @heroicons/react, Tailwind CSS, Highlight.js, Rehype-highlight, Remark-gfm, @tanstack/react-query, ESLint



**Сервер:** Node.js, Express.js, Socket.IO, Cors, JsonWebToken (JWT), Morgan, UUID, Dotenv, Nodemon, Ts-node, TypeScript, Mongodb, Mongoose


## Запуск

Клонирование проекта

```bash
  git clone https://github.com/IgorUshakov05/Web-Chat-With-AI.git
```

Установка зависимостей и запуск сервера

```bash
  cd Web-Chat-With-AI/backend && npm install && npm run dev
```

Установка зависимостей и запуск клиента

```bash
  cd Web-Chat-With-AI/frontend && npm install && npm run dev
```


## Настройка axios для отправки запросов с Bearer

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});
export default api;
```


## Запросы на сервер 
#### Запрос на регистрацию
```typescript
export const registration_user = async (data_user: InputData) =>
  axios.post<ResponseAuth>("/auth/registration", data_user);
```

#### Запрос на аунтификацию (для защищенных маршрутов)
```typescript
export const authentication = (): Promise<RaspondAuthentication> => {
  const token = localStorage.getItem("access");

  if (!token) {
    return Promise.reject({
      success: false,
      message: "Токена нет",
    } as RaspondAuthentication);
  }

  return new Promise<RaspondAuthentication>((resolve, reject) => {
    axios
      .get<RaspondAuthentication>("/auth/verify-user")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при проверке токена:", error);
        reject({
          success: false,
          message: "Ошибка при проверке токена",
        } as RaspondAuthentication);
      });
  });
};
```
#### Запрос на вход
```typescript
export const login_user = async (data_user: InputData) =>
  axios.post<ResponseAuth>("/auth/login", data_user);
```


#### Кастомный хук с использованием [tanstack/react-query](https://tanstack.com/query/latest)

```typescript
export const useAuthRegistration = (data: InputData) => {
  const navigator = useNavigate();
  return useMutation(() => registration_user(data), {
    onError: (error: any) => {
      console.log("Ошибка:", error.response?.data.save_user.error);
    },
    onSuccess: (data) => {
      localStorage.setItem("access", data.data.access || "");
      localStorage.setItem("refresh", data.data.refresh || "");
      localStorage.setItem("chat_id", data.data.id_chat || "");
      navigator(`/chat/${data.data.id_chat}`);
    },
  });
};
```

#### Мемоизация редуктора ввода логина и пароля

```typescript
let [dataForm, dispatch] = useReducer(reducer, { mail: "", password: "" });
function reducer(state: InputData, action: ActionType) {
    console.log(state);
    switch (action.type) {
      case InputType.LOGIN:
        return { ...state, mail: action.payload };
      case InputType.PASSWORD:
        return { ...state, password: action.payload };
      default:
        return { ...state };
    }
  }
  const handleLoginChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ payload: e.target.value, type: InputType.LOGIN });
    },
    []
  );
  const loginProps = useMemo(
    () => ({
      current_value: dataForm.mail,
      handler_input: handleLoginChange,
      text: "Логин",
    }),
    [dataForm.mail, handleLoginChange]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ payload: e.target.value, type: InputType.PASSWORD });
    },
    []
  );
  const passwordProps = useMemo(
    () => ({
      current_value: dataForm.password,
      handler_input: handlePasswordChange,
      text: "Пароль",
    }),
    [dataForm.password, handlePasswordChange]
  );
```
## Функциональные Возможности Web-Chat-With-AI

- Интерфейс Реального Времени
- Поддержка Markdown 
- Управление Состоянием с MobX
- Отзывчивый Дизайн с Tailwind CSS 
- Интеграция с AI
- Аутентификация Пользователей
- Навигация на Основе Маршрутов
- Получение Данных с Axios и React Query 


## Автор: Ушаков Игорь

- [TenChat](https://tenchat.ru/FullStack)
- [GitHub](https://github.com/IgorUshakov05)


