import { H3Event } from 'h3'

import { PostPreviewRaw, PostRaw } from '../../handlers/Post'
import { client } from '../db'

class PostController {
    async getAllPosts(): Promise<PostPreviewRaw[]> {
        const result = await client.query('SELECT id, title, description, title_icon FROM posts;')
        return result.rows
    }

    async getPostById(event: H3Event): Promise<PostRaw> {
        const { id } = await readBody(event);
        const result = await client.query(`SELECT id, title, description, title_icon, content FROM posts WHERE id=${id} LIMIT 1;`);
        console.log('result.rows[0]', result.rows[0]);
        return result.rows[0]
    }
}

export const postController = new PostController()