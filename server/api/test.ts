import { postController } from '../controllers/posts.controller';

export default defineEventHandler(() => postController.getAllPosts())

