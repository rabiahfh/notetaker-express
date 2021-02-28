const express = require("express");
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.urlencoded({
    extended:
        true
}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/notes', notesRoutes)

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})

// Every other route that isnt defined above will give us the index.html page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


app.listen(PORT, () => {
    console.log("the server is listening on http://localhost:" + PORT)
})