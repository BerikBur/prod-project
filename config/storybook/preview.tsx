import { Preview } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
// eslint-disable-next-line max-len
import { TranslationDecorator } from 'shared/config/storybook/TranslationDecorator/TranslationDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    // eslint-disable-next-line max-len
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, TranslationDecorator],
    // decorators: [StyleDecorator],
};

export default preview;
