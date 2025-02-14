import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// enum LoginErrors {
//     INCORRECT_USERNAME = 'INCORRECT_USERNAME',
//     INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
// }

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            // eslint-disable-next-line max-len
            const response = await extra.api.post<User>('/login', { username, password });
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Вы ввели неправильный логин или пароль'));
        }
    },
);
