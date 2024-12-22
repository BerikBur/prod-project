import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one argument', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
});
