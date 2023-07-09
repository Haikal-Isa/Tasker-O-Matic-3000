const cacheURL = ["/", "https://unpkg.com/react@18.2.0/umd/react.production.min.js", "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js", "pico.min.css", "main.js", "form.js", "https://unpkg.com/htm?module"];

self.addEventListener("install", e=>{
    e.waitUntil(caches.open("pwa").then(c=>{
            return c.addAll(cacheURL);
        })        
    );
});

