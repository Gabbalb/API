const jwt = require('./jwt.js')


const auth = (req, res, next) => {
    if (req.headers['authorization'] == null)
        res.sendStatus(401);
    try {
        let token = req.headers['authorization'];
        token = token.slice(7);
        jwt.checkToken(token);
        next();
    } catch (error) {
        console.log(error.message)
        res.sendStatus(401)
    }
}

module.exports = auth;