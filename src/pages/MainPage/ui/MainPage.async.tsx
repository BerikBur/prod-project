import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // ИМИТАЦИЯ ЗАПРОСА!!!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
