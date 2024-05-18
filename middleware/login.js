const jwt = require("./jwt.js");

const login = (req, res, next) => {
    console.log(req.body)
    if (req.body.username === 'admin') {
        const token = jwt.setToken(req.body.username);
        res.setHeader('Authorization', token);
        next();
    } else {
        res.status(401).send("Login fallito");
    }
};

module.exports = login;