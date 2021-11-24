'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const testModel = require("./model/test_table");

const PORT = 8080;
const HOST = '0.0.0.0';


app.get("/test", async (req, res) => {
    try {
        const test = await testModel.findAll();
        res.status(200).json(test);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.post("/test", async (req, res) => {
    try {
        const {name, description} = req.body;
        await testModel.create(name, description);
        res.status(200).json({message: "test example created"});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});


app.get('/', (req, res) => {
    res.send('This is a nodeJS model running with mysql');


    console.log('MySQL Connection config:');
    console.log(connection);

    connection.query("SELECT * FROM test", (err, rows) => {
        if (err) {
            res.json({
                success: false,
                err,
            });
        } else {
            res.json({
                success: true,
                rows,
            });
        }
    });
});

connection.end();

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

