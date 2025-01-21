import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, ReactNode, useCallback, useState,
} from 'react'; // добавляем useState
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
    className?: string;
    children: ReactNode;
}

export const Code = memo((props: CodeProps) => {
    const { className, children } = props;
    const [isCopied, setIsCopied] = useState(false);
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(children as string);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }, [children]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            {isCopied && <div className={cls.notification}>{t('Скопировано!')}</div>}
            <code>
                {children}
            </code>
        </pre>
    );
});
