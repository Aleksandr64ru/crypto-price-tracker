## Crypto Price Tracker

Crypto Price Tracker — это простое веб-приложение для отслеживания актуальных цен на криптовалюты. Приложение показывает 15 первых криптовалют.Оно использует публичный API CoinGecko для получения данных и отображения информации о различных криптовалютах в реальном времени.

## 🔹 Функции
- ✅ Отображение актуальных цен на криптовалюты в реальном времени.
- ✅ Динамическое изменение цен и процентных изменений за 24 часа.
- ✅ Возможность переключения между светлой и тёмной темой.
- ✅ Отображение суточного объема торгов для каждой криптовалюты.
- ✅ Адаптивный дизайн для удобного просмотра на разных устройствах.

## 📂 Структура проекта

```bash
src/
├─ components/         # Основные компоненты React
│    ├─ CryptoList.tsx      # Список криптовалют
│    ├─ CryptoItem.tsx      # Отдельный элемент криптовалюты
│    ├─ Header.tsx          # Заголовок с переключением темы
│    ├─ ThemeToggle.tsx     # Компонент кнопки переключения темы
├─ styles/            # Стили с использованием styled-components
│    ├─ GlobalStyle.ts       # Глобальные стили
│    ├─ CryptoStyles.ts      # Стили для списка криптовалют
│    ├─ HeaderStyles.ts      # Стили для заголовка
│    ├─ ThemeToggleStyles.ts # Стили для переключателя темы
├─ services/          # API-запросы
│    ├─ cryptoApi.ts        # Функция для получения данных с CoinGecko
├─ theme.ts           # Темы (светлая/тёмная)
├─ App.tsx            # Главный компонент приложения
```

## 🛠️ Установка и запуск.

1. Клонирование репозитория

- ```bash git clone https://github.com/Aleksandr64ru/crypto-price-tracker.git ```

- ```bash cd crypto-price-tracker ```

2. Установка зависимостей

- ```bash npm install ```

3. Запуск приложения

- ```bash npm start ```

Приложение будет доступно по адресу http://localhost:3000/.

## 📌 Использование компонентов

## CryptoList.tsx (Список криптовалют)

Этот компонент отображает список криптовалют, используя CryptoItem.

```bash
Edit
import React from 'react';
import { CryptoList as StyledCryptoList } from '../styles/CryptoStyles';
import CryptoItem from './CryptoItem';
import { Crypto } from '../types/Crypto';

interface CryptoListProps {
  cryptos: Crypto[];
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptos }) => (
  <StyledCryptoList>
    {cryptos.length > 0 ? (
      cryptos.map((crypto, index) => (
        <CryptoItem key={crypto.id} crypto={crypto} index={index} />
      ))
    ) : (
      <p>Loading...</p>
    )}
  </StyledCryptoList>
);

export default CryptoList;
```

## CryptoItem.tsx (Отдельный элемент криптовалюты)

Этот компонент отображает данные одной криптовалюты (цена, изменение, объем).

```bash
import React from 'react';
import {
  CryptoItem as StyledCryptoItem,
  CryptoImage,
  Price,
  PriceChange,
  Volume
} from '../styles/CryptoStyles';
import { Crypto } from '../types/Crypto';

interface CryptoItemProps {
  crypto: Crypto;
  index: number;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ crypto, index }) => (
  <StyledCryptoItem>
    <span>{index + 1}.</span>
    <CryptoImage src={crypto.image} alt={crypto.name} />
    <span>
      {crypto.name} ({crypto.symbol.toUpperCase()})
    </span>
    <Price isPositive={crypto.price_change_percentage_24h > 0}>
      ${crypto.current_price.toLocaleString()}
    </Price>
    <PriceChange isPositive={crypto.price_change_percentage_24h > 0}>
      {crypto.price_change_percentage_24h.toFixed(2)}%
    </PriceChange>
    <Volume>
      Vol: {crypto.total_volume.toLocaleString()}
    </Volume>
  </StyledCryptoItem>
);

export default CryptoItem;

```


## Header.tsx (Шапка с переключателем темы)
Этот компонент содержит заголовок и кнопку переключения темы.

```bash
import React from 'react';
import { Header as StyledHeader, HeaderTitle } from '../styles/HeaderStyles';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme }) => (
  <StyledHeader>
    <HeaderTitle>Crypto Price Tracker</HeaderTitle>
    <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
  </StyledHeader>
);

export default Header;

```

## ThemeToggle.tsx (Кнопка переключения темы)

```bash
import React from 'react';
import { ThemeToggle as StyledThemeToggle } from '../styles/ThemeToggleStyles';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => (
  <StyledThemeToggle onClick={onToggle}>
    {isDarkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
  </StyledThemeToggle>
);

export default ThemeToggle;

```

## 📌 Работа с API (cryptoApi.ts)

Этот файл отвечает за получение данных о криптовалютах с CoinGecko API.

```bash
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const API_PARAMS = {
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: 10,
  page: 1,
  sparkline: false,
};

export const getCryptoPrices = async () => {
  try {
    const response = await axios.get(API_URL, { params: API_PARAMS });
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    return [];
  }
};

```

🎨 Темы (theme.ts)

Файл theme.ts содержит стили для светлой и тёмной темы.

```bash
export const lightTheme = {
  background: '#f4f4f4',
  text: '#333',
  cardBg: '#fff',
  priceUp: '#2cbe76',
  priceDown: '#e74c3c',
};

export const darkTheme = {
  background: '#1e1e1e',
  text: '#f1f1f1',
  cardBg: '#2c2c2c',
  priceUp: '#2ecc71',
  priceDown: '#e74c3c',
};

```

## ✅ Полезные команды
Проверка кода на ошибки

- ```bash npm run lint ``` - Автоисправление ошибок.

- ```bash npm run lint:fix ``` - Форматирование кода (Prettier).

- ```bash npm run format ``` -  Автоматического форматирования кода.

## Заключение.

Так как проект представляет собой упрощённуюк версию рипто-сайта для отслеживания цен, в будующем возможно добавление поиска криптовалют, графиков , создание профиля , добавление монет в избранное и т.д.
