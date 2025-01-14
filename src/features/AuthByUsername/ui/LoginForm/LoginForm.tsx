import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
    memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
    isOpen?: boolean;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess, isOpen }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        try {
            await dispatch(loginByUsername({ username, password })).unwrap();
            onSuccess();
        } catch (e) {
            console.error(e);
        }
    }, [dispatch, password, username, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text
                    title={t('Форма авторизации')}
                />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    value={username}
                    autofocus={isOpen}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default LoginForm;
