const jwt = require("./jwt.js")

const login = (req, res, next) => {
    console.log(req.body.username === "admin")
    if(req.body.username === 'admin'){
        console.log("login effettuato")
        let token = jwt.setToken(req.body.username)
        console.log(token)
        next();
    }
    else {
        res.status(401).send("login fallito");
    }
}

module.exports = login