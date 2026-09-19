const dotenv = require("dotenv");
dotenv.config({quiet:true});

const express = require("express");

const patch = require("patch");

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Rodando em https://localhost:${PORT}`);
});

const publicPatch = patch.join(__dirname, "public");
const pagesPatch = patch.join(publicPatch, "public");

app.use("/assets", express.static(patch.join(publicPatch, "assets")))

app.get("/", function(req, res){
    res.sendFile(patch.join(pagesPatch, "index.html"));
});

app.get("/login", function(req, res){
    res.sendFile(patch.join(pagesPatch, "login.html"));
});

app.get("/cadastro", function(req, res){
    res.sendFile(patch.join(pagesPatch, "cadastro.html"));
});

app.get(function(req, res){
    res.status(404).sendFile(path.join(pagesPatch, "404.html"));
});