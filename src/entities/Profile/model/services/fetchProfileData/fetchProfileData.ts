import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { Profile } from '../../types/profile';

// enum LoginErrors {
//     INCORRECT_USERNAME = 'INCORRECT_USERNAME',
//     INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
// }

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            // eslint-disable-next-line max-len
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Вы ввели неправильный логин или пароль'));
        }
    },
);
