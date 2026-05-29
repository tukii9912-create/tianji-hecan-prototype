const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");
const generateReading = require("./api/generate-reading");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json",
};

function serveStatic(req, res) {
  const requestUrl = new URL(req.url, `http://localhost:${port}`);
  const rawPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = path.normalize(path.join(root, decodeURIComponent(rawPath)));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/generate-reading")) {
    generateReading(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(port, () => {
  console.log(`Tianji Hecan dev server running at http://localhost:${port}`);
});
