import { Meta, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Code>;

const Template: StoryFn<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children:
        `
        import { Meta, StoryFn } from '@storybook/react';
        import { Theme } from 'app/providers/ThemeProvider';
        import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
        import { Code } from './Code';

        export default {
            title: 'shared/Code',
            component: Code,
            argTypes: {
                backgroundColor: { control: 'color' },
            },
        } as Meta<typeof Code>;
        `,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'const a = 1;',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
