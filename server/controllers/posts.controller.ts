import { PostRaw } from '../../handlers/Post'
import { client } from '../db'

class PostController {
    async getAllPosts(): Promise<PostRaw[]> {
        const result = await client.query('SELECT * FROM posts;')
        return result.rows
    }
}

export const postController = new PostController()