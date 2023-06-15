import { postController } from '~/server/posts.controller';

export default defineEventHandler(() => postController.getAllPosts())