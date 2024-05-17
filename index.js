const express = require("express");
const persone = require("./persone.json")
const app = express();
const login = require("./middleware/login.js")
const auth = require("./middleware/auth.js")

//GET request
//
app.get("/", (req, res) => res.send("homepage"));
app.get("/persone" ,(req, res) => res.json(persone))
app.get("/persone/:id" ,(req, res) => {
    const {id} = req.params;
    const persona = persone.find(p => p.id == id )
    if(!persona) {
        res.status(404).send("persona non trovata")
        return
    } else
        res.json(persona)

})
app.get("/persone/:id/hobbies/" ,(req, res) => {
    const {id} = req.params;
    const persona = persone.find(p => p.id == id )
    if(!persona) {
        res.status(404).send("persona non trovata")
        return
    } else
        res.json(persona.hobbies)

})
app.get("/persone/:id/hobbies/:idhobby" ,(req, res) => {
    const {id, idhobby} = req.params;
    const persona = persone.find(p => p.id == id )
    if(!persona) {
        res.status(404).send("persona non trovata")
        return
    } 
    const hobby = persona.hobbies.find(h => h.id == idhobby)

    if(!hobby) {
        res.status(404).send("hobby non trovata")
        return
    } 
    else
        res.json(hobby)

})

app.use(express.json());

//POST REQUEST
app.post("/persone", (req, res) => {
    
    console.log(req.body)
    const persona = req.body
    persone.push(persona)
    res.json(persone)
})

//POST REQUEST hobbie
app.post("/persone/:id/hobbies/", (req, res) => {
     const {id} = req.params;
     const persona = persone.find(p => p.id == id)

     if(!persona) {
        res.status(404).send('Persona non trovata');
        return;
     }

    console.log(req.body)
    persona.hobbies.push(req.body)
    res.json(req.body)
})

//PUT REQUEST
app.put('/persone/:id',(req, res)=>{
    const {id} = req.params;
    const persona = persone.find(p.id == id)

    if(!persona){}
})



app.post('/login', login ,(req, res) => {
    console.log(req.body);
    res.send('Autenticazione OK');
})


//implemento middleware per autenticazione

app.listen("6969", () => {console.log("server running")})



