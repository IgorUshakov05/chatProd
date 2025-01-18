import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-bold text-blue-600">ChatGPT бесплатно</h1>
        <nav className="flex gap-4">
          <a href="#about" className="hover:text-blue-600">
            О сервисе
          </a>
          <a href="#features" className="hover:text-blue-600">
            Функции
          </a>
          <a href="#pricing" className="hover:text-blue-600">
            Тарифы
          </a>
          <a href="#blog" className="hover:text-blue-600">
            Блог
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Контакты
          </a>
        </nav>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Войти
        </Link>
      </div>
    </header>
  );
}
