import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ArticleDetailsPage>;

const Template: StoryFn<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

const article: Article = {
    id: '1',
    title: 'JS news',
    subtitle: 'Что нового в JS за 2024 год?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf8McRaUXvoH0V0CiFPS-XRG_ZOaKYt8NVw&s',
    views: 1022,
    createdAt: '23.01.2023',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEORzDiHWKS32jWDv42NACCf0faIrKeR3DQ&s',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана. Менять её расположение можно, воспользовавшись меню с тремя точками в её заголовке и выбирая соответствующую пиктограмму.',
                // eslint-disable-next-line max-len
                'Там же можно найти и кнопку для закрытия этой панели.',
                // eslint-disable-next-line max-len
                'Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах. Консоль хороша тем, что она, когда вы пользуетесь браузером, всегда под рукой.',
                // eslint-disable-next-line max-len
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            // eslint-disable-next-line max-len
            code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id='hello'></p>\n    <script>\n      document.getElementById('hello').innerHTML = 'Hello, world!';\n    </script>\n  </body>\n</html>;",
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Обратите внимание на то, что панель инструментов разработчика расположена теперь в нижней части экрана. Менять её расположение можно, воспользовавшись меню с тремя точками в её заголовке и выбирая соответствующую пиктограмму.',
                // eslint-disable-next-line max-len
                'Там же можно найти и кнопку для закрытия этой панели.',
                // eslint-disable-next-line max-len
                'Инструменты разработчика, и, в том числе, консоль, имеются и в других браузерах. Консоль хороша тем, что она, когда вы пользуетесь браузером, всегда под рукой.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/post_images/465/185/884/465185884cda3070549c035a37a7a3e8.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "console.log('Hello, World!');",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Если вы предполагаете, что в вашем проекте потенциально могут быть использованы инпуты со сложными конфигурациями (маски, обрезка каких-то символов руками и т.д.), то при создании переиспользуемого компонента инпута я настоятельно рекомендую завязываться только на onInput и не использовать onChange. Оставляя только onChange, вы рискуете столкнуться с тем же, что и я и вам придется перелопачивать часть логики попутно разбираясь, почему же эта ерунда не работает так, как нужно. Если вам нужно полностью исключить влияние onChange, используйте только onInput с продуманной логикой обработки. Важно помнить, что onChange всегда сработает после onInput.',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.TEXT,
            title: 'Кейсы пользовательского взаимодействия',
            paragraphs: [
                // eslint-disable-next-line max-len
                'Для начала разберемся, что же это был за инпут (потому что для обычного использования инпута в базовых ситуациях и видах эта статья вряд ли будет полезна). Инпут был приблизительно следующего формата:',
            ],
        },
        {
            id: '9',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/03b/b40/15c/03bb4015c92405dc46e848daf6aabd48.png',
            title: 'Рисунок 2 - пример для инпута',
        },

    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];
