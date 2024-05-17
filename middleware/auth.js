const jws = require('./jwt.js')


const auth = (req, res, next) => {

}


/* LA FAREMO SABATO MA IL BRO HA OVERCOOKATO
const auth = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Token mancante');
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).send('Token non valido');
        }

        req.user = decoded;
        next();
    });
};
 */