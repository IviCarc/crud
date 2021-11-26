let express = require("express");
const request = require('request');

let app = express();

const PORT = 3000;

app.use(express.static("./client/public"))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get("/", (req,res) => {
    res.json({ username: 'Flavio' })
})

app.post("/", (req,res) => {
    console.log(res);
    res.send("grax")
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
  })