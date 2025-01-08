import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '123',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: {
        username: '123',
        password: '123',
    },
})];

export const WithError = Template.bind({});
WithError.args = {
    error: 'ERROR',
};
WithError.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '123',
        error: 'ERROR',
    },
})];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [StoreDecorator({
    loginForm: {
        username: '123',
        password: '123',
        isLoading: true,
    },
})];
