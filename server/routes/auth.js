import { Router } from 'express';
import { register, login, getMe} from '../controllers/auth.js'

// http://localhost:3002/api/auth
const router = new Router();

//Register
// http://localhost:3002/api/auth/register
router.post('/register', register)

//Login
router.post('/login', login)

//Get me
router.get('/me', getMe)
export default router;