const student = require("./student");

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(`
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <title>About student</title>
    </head>
    <body>
        <p>My name is ${student.getStudentFullName(id)}. My student ID is ${student.getStudentId(id)}</p>
    </body>
    </html>
  `);
});

server.listen(PORT);
