const repo = "/Tasker-O-Matic-3000";

const cacheURL = [`${repo}/`, `${repo}/index.html`, "https://unpkg.com/react@18.2.0/umd/react.production.min.js", "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js", "https://unpkg.com/@picocss/pico@1.5.10/css/pico.min.css", `${repo}/main.js`, `${repo}/form.js`, "https://unpkg.com/htm?module"];

self.addEventListener("install", e=>{
    e.waitUntil(caches.open(`pwa`).then(c=>{
            return c.addAll(cacheURL);
        })        
    );
});

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(res=>{
            return res || fetch(e.request);
        })
    );
});
