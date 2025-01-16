import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return profile data', () => {
        const data = {
            username: 'username',
            age: 20,
            city: 'Moscow',
            country: Country.RUS,
            name: 'Vladimir',
            lastName: 'Vladimirov',
            currency: Currency.RUB,
            isLoading: false,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
