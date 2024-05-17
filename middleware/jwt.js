const jwt = require('jsonwebtoken')

let option = {
    algorithm: "HS256",
    expiresIn: "1h"
}

//metodo che si occupa di rilasciare il token
const setToken = (username)=> {
    let payload = {
        username : username
    }

    let token = jwt.sign(payload, 'secret',option)

    return token;
}

//metodo che si occupa di estrarre il payload dal token

const getPayload = (token) => {
    let patload = jwt.decode(token,{complete:true})
}

//metodo che si occuperà di verificare il token
const checkToken = (token) => {
    jwt.verify(token, 'secre', option)
}

module.exports = {setToken, getPayload, checkToken}

