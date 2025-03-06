import React from 'react';
import ReactDOM from 'react-dom/client'; // импортировать из 'react-dom/client'
import App from './App'; // Импорт компонента App

// Создание root-элемента
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Рендерим приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
