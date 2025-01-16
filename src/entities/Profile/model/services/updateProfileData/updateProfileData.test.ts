import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

describe('updateProfileData.test', () => {
    const data = {
        name: 'John',
        lastName: 'Doe',
        age: 30,
        country: Country.RUS,
        city: 'New York',
        street: 'Main St',
        houseNumber: 123,
        apartmentNumber: 4,
    };

    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: data },
        });
        thunk.api.put.mockReturnValue(Promise.reject());
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: { form: { ...data, age: undefined } },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
