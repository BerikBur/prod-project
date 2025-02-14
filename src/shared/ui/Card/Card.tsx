import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...other } = props;

    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...other}
        >
            {children}
        </div>
    );
});
