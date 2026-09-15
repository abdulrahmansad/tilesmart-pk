const base = (process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");
const origin = new URL(base).origin;
const queue = ["/"];
const visited = new Set();
const failures = [];

function normalize(href, currentPath) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) {
    return null;
  }

  let url;
  try {
    url = new URL(href, `${base}${currentPath}`);
  } catch {
    return null;
  }

  if (url.origin !== origin) return null;
  if (url.pathname.startsWith("/_next/")) return null;
  return `${url.pathname}${url.search}`;
}

while (queue.length) {
  const path = queue.shift();
  if (!path || visited.has(path)) continue;
  visited.add(path);

  const response = await fetch(`${base}${path}`, { redirect: "follow" });
  if (!response.ok) {
    failures.push(`${path} -> HTTP ${response.status}`);
    continue;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) continue;

  const html = await response.text();
  const hrefPattern = /href=["']([^"']+)["']/g;
  for (const match of html.matchAll(hrefPattern)) {
    const next = normalize(match[1], path);
    if (next && !visited.has(next) && !queue.includes(next)) queue.push(next);
  }
}

if (failures.length) {
  console.error("Broken internal links found:\n" + failures.join("\n"));
  process.exit(1);
}

console.log(`Internal link crawl passed (${visited.size} URLs checked).`);
