import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { useSelector } from 'react-redux';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation();
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.name}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
            <div className={cls.error}>
                {error}
            </div>
            <div className={cls.loader}>
                {isLoading && t('Загрузка...')}
            </div>
        </div>
    );
};
