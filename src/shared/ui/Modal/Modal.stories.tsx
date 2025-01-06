import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'lorem ipsum lorem ipsum lorem ipsum',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'lorem ipsum lorem ipsum lorem ipsum',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
