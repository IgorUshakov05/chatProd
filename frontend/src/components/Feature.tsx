import React from 'react';
import { ChatBubbleLeftRightIcon, CodeBracketIcon, UserCircleIcon, ShieldCheckIcon, DevicePhoneMobileIcon, BoltIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Интерфейс Реального Времени',
    description: 'Благодаря WebSocket и Socket.IO общение происходит мгновенно без задержек.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Поддержка Markdown',
    description: 'Используйте форматирование Markdown для удобного отображения сообщений.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Аутентификация Пользователей',
    description: 'JWT-токены обеспечивают безопасный вход и защиту пользовательских данных.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Интеграция с AI',
    description: 'Искусственный интеллект помогает обрабатывать сообщения и генерировать ответы.',
    icon: BoltIcon,
  },
  {
    name: 'Отзывчивый Дизайн',
    description: 'Приложение адаптировано под любые устройства благодаря Tailwind CSS.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Навигация на Основе Маршрутов',
    description: 'Обеспечивает удобный доступ к чатам и страницам приложения.',
    icon: UserCircleIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Возможности Hunt AI</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Чат на основе ИИ
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Удобный, быстрый и безопасный чат с поддержкой AI, аутентификацией и адаптивным дизайном.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Пример интерфейса"
            src="/screen1.jpeg"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
