import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

function safePath(url) {
  const path = url === "/" ? "/static-homepage.html" : decodeURIComponent(url);
  const clean = normalize(path).replace(/^(\.\.[/\\])+/, "");
  return join(root, clean);
}

createServer(async (request, response) => {
  try {
    const filePath = safePath(new URL(request.url || "/", `http://localhost:${port}`).pathname);
    const data = await readFile(filePath);
    response.writeHead(200, {
      "content-type": types[extname(filePath)] || "application/octet-stream"
    });
    response.end(data);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, () => {
  console.log(`Preview server running at http://localhost:${port}`);
});
