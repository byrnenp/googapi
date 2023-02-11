const http = require("http");
const express = require("express")
const hostname = "127.0.0.1";
const port = 3000;

const app = express();


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
