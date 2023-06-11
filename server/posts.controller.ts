// @ts-ignore
import { client } from "~/server/db"

class PostController {
    async getAllPosts() {
        await client.connect()
        const result = await client.query('SELECT * FROM posts;')
        await client.end()
        return result.rows
    }
}

export const postController = new PostController()