import { User } from 'entities/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs?: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title: string;
    src: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    GRID = 'GRID',
    LIST = 'LIST',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
    views: number;
}
