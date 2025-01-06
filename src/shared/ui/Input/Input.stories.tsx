import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text',
    value: '123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutValue = Template.bind({});
WithoutValue.args = {
    placeholder: 'Type text',
};

export const WithAutofocus = Template.bind({});
WithAutofocus.args = {
    placeholder: 'Type text',
    autofocus: true,
};
