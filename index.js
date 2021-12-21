const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
    var uri = `http://172.104.34.197/nlp-web-demo/process?text=${req.body.value}`;
    uri = encodeURI(uri);

    axios
        .get(uri)
        .then((response) =>
            res.status(200).send(JSON.stringify(response.data)),
        );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
