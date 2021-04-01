const express = require("express");
const app = express();
const cors = require('cors');
const {mysqlPoolDb} = require('./connection');

app.use(cors());

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.settings.port, ()=>{
    console.log('Server ready on', app.settings.port);
})

app.get('/api/members', (req, res)=>{

    mysqlPoolDb.then(pool=>{

        try {
            pool.query(`
                select * from member_list
            `)
            .then(results=>{
                res.send(results);
            })
            .catch(error=>{
                throw error;
            })
        } catch(error) {
            res.send({message: "Error"})
        }

    })

})