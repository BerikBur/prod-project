import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
    Article, ArticleBlockType, ArticleType, ArticleView,
} from 'entities/Article/model/types/article';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleListItem>;

const Template: StoryFn<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const article = {
    id: '1',
    title: 'JS news',
    subtitle: 'Что нового в JS за 2024 год?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf8McRaUXvoH0V0CiFPS-XRG_ZOaKYt8NVw&s',
    views: 1022,
    createdAt: '23.01.2023',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEORzDiHWKS32jWDv42NACCf0faIrKeR3DQ&s',
    },
    type: [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS], // Use the enum values instead of strings
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана...',
                'Там же можно найти и кнопку для закрытия этой панели.',
                'Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах',
                'Существуют и другие способы запуска JS-кода в браузере',
                // eslint-disable-next-line max-len
                'Современный веб - это не лэндосики и интернет магазины из 2000-х, а, по большей части, достаточно сложные и интересные веб приложения. Помимо клиентской логики JS также популярен на сервере. И там его популярность растет год от года. Еще JS позволяет писать мобильные приложения и даже немного на десктоп замахивается.',
                'В общем, язык один, а возможностей много.',
                // eslint-disable-next-line max-len
                'В последнее время видны масштабные изменения в способах разработки веб-приложений. Если раньше интерфейс создавался на сервере, а на стороне клиента выполнялись лишь незначительные сценарии, то в наши дни стандартом является использование какой-либо из различных библиотек реактивного рендеринга для создания сложных стейтфул клиентских приложений.',
                // eslint-disable-next-line max-len
                'Хотя многие разработчики успешно применяют такие библиотеки как React или Vue, понимание их точной внутренней работы не слишком широко изучено. В этой статье я расскажу о создании собственной библиотеки реактивного рендеринга, и разъясню, что происходит под капотом.',
                // eslint-disable-next-line max-len
                'Использование хуков с одной стороны позволяет использовать методы жизненного цикла в функциональных компонентах и призваны улучшать производительность, что делает функциональные компоненты полноценным конкурентом классовых компонентов. С другой стороны, неправильное использование хуков приводит к лишним операциям и может свести на нет все преимущества функциональных компонентов.',
                // eslint-disable-next-line max-len
                'Реакт под капотом регистрирует все хуки, потому они должны находиться строго до любых условий (if, switch), и все хуки должны начинаться с префикса use: useState, useEffect, useMyCustomHook.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            // eslint-disable-next-line max-len
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id='hello'></p>\n    <script>\n      document.getElementById('hello').innerHTML = 'Hello, world!';\n    </script>\n  </body>\n</html>;",
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        // ... rest of the blocks
    ],
} as Article;

export const Grid = Template.bind({});
Grid.args = {
    view: ArticleView.GRID,
    article,
};

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
    article,
};

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    view: ArticleView.GRID,
    article,
};
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkList = Template.bind({});
DarkList.args = {
    view: ArticleView.LIST,
    article,
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];
