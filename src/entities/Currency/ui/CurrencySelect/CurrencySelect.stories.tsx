import { Meta, StoryFn } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof CurrencySelect>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
