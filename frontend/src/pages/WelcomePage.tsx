import React from "react";
import Header from "../components/Header";
import CTAction from "../components/CTA";
import { observer } from "mobx-react";
import { Helmet } from "react-helmet";
import { useAuthorization } from "../hook/Auth";
import { authStore } from "../store/index";

const HomePage = observer(() => {
  let { data } = useAuthorization();
  authStore.setAuth(data?.success);

  return (
    <>
      <Helmet>
        <title>Hunt AI — Бесплатная нейронка</title>
        <meta
          name="description"
          content="Hunt AI — бесплатный аналог ChatGPT на русском языке. Используйте нашу нейросеть для генерации текстов, ответов на вопросы и автоматизации работы."
        />
        <meta
          name="keywords"
          content="Hunt AI, бесплатная нейронка, ChatGPT на русском, нейросеть, AI, генерация текста, искусственный интеллект, GPT-4, нейросетевые технологии"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hunt AI — Бесплатная нейронка" />
        <meta
          property="og:description"
          content="Используйте Hunt AI — бесплатную нейросеть на русском языке для генерации текстов и ответов на вопросы."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/preview.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>
      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        <Header />
        <main className="">
          <CTAction />
          <div className="px-4 py-8 flex-grow space-y-6">
            <section className="bg-white p-6 px-4 py-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">О Hunt AI</h2>
              <p>
                Hunt AI — это бесплатная нейросеть, работающая на русском языке.
                Используйте её для генерации текстов, ответов на вопросы и
                автоматизации повседневных задач.
              </p>
            </section>
            <section className="bg-white p-6 px-4 py-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Почему выбирают нас?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Бесплатный доступ без ограничений</li>
                <li>Поддержка русского языка</li>
                <li>Современные AI-алгоритмы</li>
                <li>Высокая скорость генерации ответов</li>
                <li>Гибкость в работе с текстами</li>
                <li>Интеграция с различными сервисами</li>
              </ul>
            </section>
            <section className="bg-white p-6 px-4 py-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Как начать?</h2>
              <p>
                Просто зарегистрируйтесь и начните использовать Hunt AI прямо
                сейчас! Никаких сложных настроек, всё работает из коробки.
              </p>
            </section>
            <section className="bg-white p-6 px-4 py-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Применение Hunt AI</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Создание уникального контента</li>
                <li>Автоматизированные ответы на вопросы</li>
                <li>Генерация SEO-оптимизированных статей</li>
                <li>Переводы и адаптация текстов</li>
                <li>Анализ и обработка данных</li>
              </ul>
            </section>
            <section className="bg-white p-6 px-4 py-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">
                Часто задаваемые вопросы
              </h2>
              <p>
                <strong>1. Это действительно бесплатно?</strong>
                <br /> Да, Hunt AI предоставляет бесплатный доступ к своим
                основным возможностям.
              </p>
              <p>
                <strong>2. Чем Hunt AI отличается от ChatGPT?</strong>
                <br /> Наша нейросеть ориентирована на пользователей
                русскоязычного пространства и оптимизирована для работы с
                локальными запросами.
              </p>
              <p>
                <strong>
                  3. Можно ли использовать Hunt AI в коммерческих целях?
                </strong>
                <br /> Да, генерация текстов доступна для бизнеса и маркетинга.
              </p>
            </section>
          </div>
        </main>
        <footer className="p-4 text-center bg-gray-200">
          &copy; {new Date().getFullYear()} Hunt AI — Бесплатная нейронка
        </footer>
      </div>
    </>
  );
});

export default HomePage;
