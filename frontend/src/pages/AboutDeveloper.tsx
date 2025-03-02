import React from "react";
import Header from "../components/Header";
import { authStore } from "../store";

const AboutMePage = () => {
  authStore.setAuth(localStorage.getItem("access") ? true : false);
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-gradient-to-r text-black py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold">Игорь Ушаков</h1>
            <p className="text-xl mt-2">Веб-разработчик | Инноватор</p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
            {/* Фото */}
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/47274099?v=4" // Замените на путь к вашей фотографии
                alt="Игорь Ушаков"
                className="w-full h-full object-cover"
              />
            </div>
            {/* О себе */}
            <div className="max-w-lg text-center md:text-left">
              <p className="text-lg mb-4">
                Привет! Я Игорь Ушаков, 19 лет, из Абакана. Я занимаюсь
                разработкой на стеке MERN (MongoDB, Express.js, React, Node.js)
                и активно работаю с такими инструментами и технологиями, как
                Redux, Next.js, TypeScript, Tailwind CSS.
              </p>
              <p className="text-lg mb-4">
                Постоянно стремлюсь расширять свои знания и навыки в области
                веб-разработки, чтобы быть в курсе новейших технологий и лучших
                практик индустрии.
              </p>

              <p className="text-lg mb-4">
                Я активно ищу новые возможности для профессионального роста и
                открыт для сотрудничества. Мое портфолио доступно на GitHub
              </p>
              <div className="flex justify-center gap-8">
                <a
                  href="https://github.com/IgorUshakov05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-300"
                >
                  <i className="fab fa-github">GitHub</i>
                </a>
                <a
                  href="https://tenchat.ru/FullStack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-300"
                >
                  <i className="fas fa-comments">TenChat</i>
                </a>
                <a
                  href="https://t.me/O101O1O1O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-300"
                >
                  <i className="fab fa-twitter">Telegran</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
