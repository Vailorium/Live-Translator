const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const { createWorker } = require('tesseract.js');
const worker = createWorker();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

//start server
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`)});
// app.use(cors());

app.use(bodyParser.json());

app.use("/static", express.static('./static/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

const upload = multer({
    dest: "/uploads"
});

app.post('/uploads', async (req, res) => {
    
    console.log("Received!");

    await worker.load();
    await worker.loadLanguage('jpn');
    await worker.initialize('jpn');
    // const { data: { text } } = await worker.recognize(req.body.value).then(res.status(200).send(text));
    
    const {data: {text}} = await worker.recognize(req.body.value);

    res.status(200).send(text);

    
});