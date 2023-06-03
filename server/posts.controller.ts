import { client } from "~/server/db"

class PostController {
    async getAllPosts() {
        client.connect();
        const result = await client.query('SELECT * FROM posts')
        console.log('result', result.rows);
        return result.rows
    }
}

export const postController = new PostController()