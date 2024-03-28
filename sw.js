
















































































































<script>
    if('serviceWorker' in navigator){
        window.addEventListener('load',()=>{
            navigator.serviceWorker.register('sw.js',{
                scope:"/"
            })
            .then(registration => {
                console.log('service worker is registered',registration);
            })
            .catch(err =>{
                console.log('service worker is not found',err);
            })
        })
    }
</script>




const cacheName = 'site-cache-v1'
const assestsToCache = [
    "/",
    "/index.html",
]

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assestsToCache);
        })
    );
});

 self.addEventListener('activate',(event)=>{
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assestsToCache);
        })
    );

});
