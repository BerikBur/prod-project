import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        try {
            // eslint-disable-next-line max-len
            const response = await axios.post<User>('http://localhost:8000/login', { username, password });
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(i18n.t('Вы ввели неправильный логин или пароль'));
        }
    },
);
