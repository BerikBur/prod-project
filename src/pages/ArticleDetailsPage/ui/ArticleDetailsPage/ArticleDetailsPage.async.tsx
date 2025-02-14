import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Имитация задержки
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
