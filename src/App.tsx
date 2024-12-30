import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={RoutePath.main}>{t('Главная')}</Link>
            <Link to={RoutePath.about}>{t('О сайте')}</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={RoutePath.about} element={<AboutPage />} />
                    <Route path={RoutePath.main} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
