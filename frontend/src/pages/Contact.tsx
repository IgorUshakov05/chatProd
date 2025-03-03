import React from "react";
import {Helmet} from 'react-helmet'
import Header from "../components/Header";
import { authStore } from "../store";

function Contact() {
  authStore.setAuth(localStorage.getItem("access") ? true : false);

  return (
    <>
      <Helmet>
        <title>Есть вопросы?</title>
        <meta name="description" content="Свяжитесь с нами через Telegram или почту. Мы готовы ответить на все ваши вопросы по нейросети Hunt AI." />
        <meta name="keywords" content="контакты, Hunt AI, Telegram, почта, поддержка, вопросы, нейросеть" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Контакты — Hunt AI" />
        <meta property="og:description" content="Свяжитесь с нами через Telegram или почту. Мы готовы ответить на все ваши вопросы по нейросети Hunt AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:image" content="https://yourwebsite.com/contact-preview.jpg" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Helmet>

      <div className="overflow-hidden">
        <Header />
        <div className="mt-24 flex items-center justify-center py-10">
          <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              Свяжитесь с нами
            </h2>

            <div className="space-y-4">
              {/* Телеграм */}
              <div className="flex items-center justify-between p-4 bg-blue-500 text-white rounded-md">
                <div className="flex items-center space-x-3">
                  <i className="fab fa-telegram-plane text-2xl"></i>
                  <span className="text-lg">Telegram</span>
                </div>
                <a
                  href="https://t.me/O101O1O1O" // замените на ваш актуальный Telegram
                  className="text-blue-200 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Написать
                </a>
              </div>

              {/* Почта */}
              <div className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-md">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-2xl"></i>
                  <span className="text-lg">Почта</span>
                </div>
                <a
                  href="mailto:developer@webhunt.ru"
                  className="text-gray-400 hover:text-white"
                >
                  Написать
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
