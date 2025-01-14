import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (!config.resolve) {
        config.resolve = {};
    }
    if (!config.resolve.modules) {
        config.resolve.modules = [];
    }
    if (!config.resolve.extensions) {
        config.resolve.extensions = [];
    }
    if (!config.resolve.alias) {
        config.resolve.alias = {};
    }
    if (!config.module) {
        config.module = {
            rules: [],
        };
    }
    if (!config.module.rules) {
        config.module.rules = [];
    }
    if (!config.plugins) {
        config.plugins = [];
    }

    config.resolve.modules.push(paths.src, 'node_modules');
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
        ...config.resolve.alias,
        entities: path.resolve(__dirname, '..', '..', 'src', 'entities'),
    };

    // eslint-disable-next-line no-param-reassign
    if (config.module.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule | null | undefined | string | false | 0 | '' | '...') => {
            if (rule && typeof rule === 'object' && 'test' in rule && rule.test && /svg/.test(rule.test.toString())) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        }) as RuleSetRule[];
    }

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
