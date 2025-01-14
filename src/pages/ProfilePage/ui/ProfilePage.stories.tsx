import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

// При корректировке компонента AboutPage.tsx передать пропсы корректно,
// пример без использования spread-оператора:
// const {src, alt} = props;
// const {one_prop, two_prop} = otherProps;
// <MyCustomComponent one_prop={one_prop} two_prop={two_prop} />
// <img src={src} alt={alt} />
const Template: StoryFn<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
