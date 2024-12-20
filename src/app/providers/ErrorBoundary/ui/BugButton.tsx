import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => {
        setError((prev) => !prev);
    };

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw-error')}
        </Button>
    );
};
