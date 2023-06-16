import { postController } from '../posts.controller';

export default defineEventHandler(() => postController.getAllPosts())