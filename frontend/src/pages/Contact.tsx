import React from "react";
import Header from "../components/Header";

function Contact() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mt-24 flex items-center justify-center py-10">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Свяжитесь со мной
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
  );
}

export default Contact;
