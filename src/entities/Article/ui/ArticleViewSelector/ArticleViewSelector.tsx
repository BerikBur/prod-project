import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/grid-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';

import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        value: ArticleView.LIST,
        icon: ListIcon,
    },
    {
        value: ArticleView.GRID,
        icon: GridIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(({ value, icon }) => (
                <Button
                    key={value}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(value)}
                >
                    <Icon
                        Svg={icon}
                        className={classNames('', { [cls.notSelected]: value !== view }, [className])}
                    />
                </Button>
            ))}
        </div>

    );
};
