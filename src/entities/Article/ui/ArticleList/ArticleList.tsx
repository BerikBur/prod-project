import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => (
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={cls.card}
                view={view}
            />
        ))
);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const items = articles.map((article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    ));

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? items
                : t('Статьи не найдены')}
        </div>
    );
});
