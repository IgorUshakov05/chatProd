import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import { authStore } from "../store";

const Poprikolu: React.FC = () => {
  authStore.setAuth(localStorage.getItem("access") ? true : false);

  return (
    <>
      <Helmet>
        <title>Зачем?</title>
        <meta name="description" content="Поприколу — Hunt AI" />
        <meta
          name="keywords"
          content="Поприколу, нейросеть, Hunt AI, бесплатный доступ, Зачем?, генерация текста, искусственный интеллект"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Зачем?" />
        <meta
          property="og:description"
          content="Используйте Hunt AI для генерации текста. Бесплатный доступ и поддержка русского языка."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chat.webhunt.ru/poprikolu" />
        <meta
          property="og:image"
          content="https://chat.webhunt.ru/preview.png"
        />
        <link rel="canonical" href="https://chat.webhunt.ru/poprikolu" />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex flex-grow items-center justify-center">
          <h1 className="text-5xl font-bold">Да по-приколу</h1>
        </main>
      </div>
    </>
  );
};

export default Poprikolu;
