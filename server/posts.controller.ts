import { client } from "~/server/db"

class PostController {
    async getAllPosts() {
        await client.connect()
        const result = await client.query('SELECT * FROM test;')
        console.log('result', result.rows);
        await client.end()
        return result.rows
    }
}

export const postController = new PostController()