import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileError, getProfileIsLoading, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readOnly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <div className={cls.btnsWrapper}>
                    {readOnly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.editBtn}
                                onClick={onEdit}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={cls.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={cls.saveBtn}
                                    onClick={onSaveEdit}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>

                        )}
                </div>
            )}
        </div>
    );
};
