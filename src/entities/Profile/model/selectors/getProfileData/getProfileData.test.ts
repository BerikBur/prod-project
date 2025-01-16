import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { DeepPartial } from '@reduxjs/toolkit';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
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
                data,
                isLoading: false,
                readonly: false,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
