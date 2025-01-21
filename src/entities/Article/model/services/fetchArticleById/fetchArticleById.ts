import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (id, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!id) {
            return rejectWithValue(i18n.t('error'));
        }

        try {
            const response = await extra.api.get<Article>(`/articles/${id}`);
            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t('error'));
        }
    },
);
