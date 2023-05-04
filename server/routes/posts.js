import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost } from '../controllers/posts.js';

// http://localhost:3002/api/posts
const router = new Router();

//Create Post
// http://localhost:3002/api/posts
router.post('/', checkAuth, createPost)


export default router;