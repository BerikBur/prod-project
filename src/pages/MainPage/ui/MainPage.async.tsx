import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Имитация задержки
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
