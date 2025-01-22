import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.comment, {}, [className])}>
                {Array(3)
                    .fill(0)
                    .map((item, index) => (
                        <CommentCard
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            isLoading
                        />
                    ))}
            </div>
        );
    }

    if (!comments) {
        return null;
    }

    return (
        <div className={classNames(cls.comment, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('Комментарий отсутствует')} />}
        </div>
    );
});
