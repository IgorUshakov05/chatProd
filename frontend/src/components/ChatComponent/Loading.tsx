import React from "react";
export default function LoadingPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>

      {/* Loading spinner */}
      <div className="relative z-10 text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        <h2 className="mt-8 text-2xl font-semibold text-gray-700">
          Загрузка...
        </h2>
        <p className="text-gray-500">Подождите немного</p>
      </div>
    </div>
  );
}
