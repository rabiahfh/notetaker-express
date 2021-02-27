const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({
    extended:
        true
}));
app.use(express.json());
app.get("/", (req, res) => {
    res.end("server works")
})

app.listen(PORT, () => {
    console.log("the server is listening on http://localhost:" + PORT)
})