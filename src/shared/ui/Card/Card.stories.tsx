import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Text" text="Text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="Text" text="Text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
