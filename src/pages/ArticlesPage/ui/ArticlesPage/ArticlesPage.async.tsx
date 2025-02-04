import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Имитация задержки
    setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
