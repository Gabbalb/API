const jwt = require('jsonwebtoken');
const fs = require('fs');

const option = {
    algorithm: "RS256",
    expiresIn: "1h"
};

const setToken = (username) => {
    const payload = { username };
    const privateKey = fs.readFileSync("./rsa.key");

    const token = jwt.sign(payload, privateKey, option);
    return token;
};

const getPayload = (token) => {
    const payload = jwt.decode(token, { complete: true });
    return payload;
};

const checkToken = (token) => {
    const publicKey = fs.readFileSync("./rsa.pem");
    jwt.verify(token, publicKey, option);
};

module.exports = { setToken, getPayload, checkToken };