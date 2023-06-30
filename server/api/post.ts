import { postController } from '../controllers/posts.controller';

export default defineEventHandler((event) => postController.getPostById(event))

