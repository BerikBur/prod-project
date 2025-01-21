import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleCodeTextComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleCodeTextComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleCodeTextComponent = memo((props: ArticleCodeTextComponentProps) => {
    const { className, block } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeTextComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={cls.title} />
            )}
            {block.paragraphs?.map((paragraph) => (
                <Text text={paragraph} key={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
