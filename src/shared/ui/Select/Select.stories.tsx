import { Meta, StoryFn } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Select>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Укажите значение',
    options: [
        { value: '1', content: 'Первый' },
        { value: '2', content: 'Второй' },
        { value: '3', content: 'Третий' },
    ],
};
