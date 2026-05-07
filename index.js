const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});

//ERROR 404 HANDLERS
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html")
})

// app.get("*", (req, res) => {
//   res.status(404).sendFile(__dirname + "/404.html");
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");

//   if (req.url === "/") {
//     fs.readFile("index.html", (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       res.end(data);
//     });
//   } else if (req.url === "/about") {
//     fs.readFile("about.html", (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       res.end(data);
//     });
//   } else if (req.url === "/contact-me") {
//     fs.readFile("contact-me.html", (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       res.end(data);
//     });
//   } else {
//     fs.readFile("404.html", (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       res.end(data);
//     });
//   }
// });
