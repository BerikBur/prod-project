import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('should render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('should increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        const incrementBtn = screen.getByTestId('increment-btn');
        incrementBtn.click();
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('should decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        const decrementBtn = screen.getByTestId('decrement-btn');
        decrementBtn.click();
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
