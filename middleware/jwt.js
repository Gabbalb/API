const jwt = require('jsonwebtoken');

const option = {
    algorithm: "HS256",
    expiresIn: "1h"
};

const setToken = (username) => {
    const payload = { username };
    const token = jwt.sign(payload, 'secret', option);
    return token;
};

const getPayload = (token) => {
    const payload = jwt.decode(token, { complete: true });
    return payload;
};

const checkToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret', option);
        return decoded;
    } catch (err) {
        return null;
    }
};

module.exports = { setToken, getPayload, checkToken };