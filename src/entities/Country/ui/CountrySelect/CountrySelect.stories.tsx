import { Meta, StoryFn } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CountrySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
