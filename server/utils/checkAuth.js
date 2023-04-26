import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
    const token = (req.headers.autorization || '').replace(/Bearer\s?/, '');
    // const token = (req.headers.autorization || '').split(' ')[1]
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.userId = decoded.id;
            next()
        } catch(error) {
            return res.json({
                message: `Нет доступа. ${error}`
            })
        }
    } else {
        return res.json({
            message: "Нет доступа"
        })
    }
}