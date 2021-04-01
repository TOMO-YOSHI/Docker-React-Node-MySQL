let express = require("express");
let app = express();
let cors = require('cors')

app.use(cors());

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, ()=>{
    console.log('Server ready on', app.settings.port);
})

const data = {
    name: "Tomohiro",
    age: 32,
    language: ["English", "Japanese"]
}

app.get('/api/tomohiro', (req, res)=>{
    res.send(data);
})

app.get('/', (req, res)=>{
    res.send({message: "Hello World"});
})