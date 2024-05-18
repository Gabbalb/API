const express = require("express");
const persone = require("./persone.json");
const app = express();
const login = require("./middleware/login.js");
const auth = require("./middleware/auth.js");

app.use(express.json());

// GET requests
app.get("/", auth, (req, res) => res.send("homepage"));
app.get("/persone", (req, res) => res.json(persone));
app.get("/persone/:id", (req, res) => {
    const { id } = req.params;
    const persona = persone.find(p => p.id == id);
    if (!persona) {
        res.status(404).send("persona non trovata");
    } else {
        res.json(persona);
    }
});
app.get("/persone/:id/hobbies", (req, res) => {
    const { id } = req.params;
    const persona = persone.find(p => p.id == id);
    if (!persona) {
        res.status(404).send("persona non trovata");
    } else {
        res.json(persona.hobbies);
    }
});
app.get("/persone/:id/hobbies/:idhobby", (req, res) => {
    const { id, idhobby } = req.params;
    const persona = persone.find(p => p.id == id);
    if (!persona) {
        res.status(404).send("persona non trovata");
    } else {
        const hobby = persona.hobbies.find(h => h.id == idhobby);
        if (!hobby) {
            res.status(404).send("hobby non trovata");
        } else {
            res.json(hobby);
        }
    }
});

// POST requests
app.post("/persone", auth, (req, res) => {
    const persona = req.body;
    persone.push(persona);
    res.json(persone);
});
app.post("/persone/:id/hobbies", auth, (req, res) => {
    const { id } = req.params;
    const persona = persone.find(p => p.id == id);
    if (!persona) {
        res.status(404).send('Persona non trovata');
    } else {
        persona.hobbies.push(req.body);
        res.json(req.body);
    }
});
app.post('/login', login, (req, res) => {
    res.send('Autenticazione OK');
});

// PUT request
app.put('/persone/:id', auth, (req, res) => {
    const { id } = req.params;
    const personaIndex = persone.findIndex(p => p.id == id);
    if (personaIndex === -1) {
        res.status(404).send('Persona non trovata');
    } else {
        const updatedPersona = { ...persone[personaIndex], ...req.body };
        persone[personaIndex] = updatedPersona;
        res.json(updatedPersona);
    }
});

app.listen(6969)