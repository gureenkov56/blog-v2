import { CategoryId } from '~/handlers/category/categoryId.enum'

export type PostRaw = {
    id: number
    category_id: CategoryId
    content?: string
    description?: string
    seo_description?: string
    seo_h1?: string
    title?: string
    title_icon?: string
}

export interface IPost {
    id: number
    categoryId: CategoryId
    content: string
    description: string
    seoDescription: string
    seoH1: string
    title: string
    titleIcon: string
}

export class Post implements IPost {
    public id
    public categoryId
    public content
    public description
    public seoDescription
    public seoH1
    public title
    public titleIcon

    constructor({
        id, category_id, content, description, seo_description, seo_h1, title, title_icon
    }: PostRaw) {
        this.id = id;
        this.categoryId = category_id;

        this.description = description || 'Краткое описание отсутствует';
        this.title = title || 'Здесь должен быть заголовок';
        this.content = content || '';
        this.titleIcon = title_icon || '💡';

        this.seoDescription = seo_description || this.description;
        this.seoH1 = seo_h1 || this.title;
    }
}