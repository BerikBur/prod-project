import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA },
    { value: Country.BLR, content: Country.BLR },
];

export const CountrySelect = memo((
    {
        className,
        value,
        onChange,
        readOnly,
    }: CountrySelectProps,
) => {
    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readOnly={readOnly}
        />
    );
});
