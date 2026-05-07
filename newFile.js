const { app } = require(".");

app.get("/", (req, res) => {
  if (req.url === "/") {
    //     fs.readFile("index.html", (err, data) => {
    //       if (err) {
    //         console.error(err);
    //         return;
    //       }
    //       res.end(data);
    //     });
  }
});
