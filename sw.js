const CACHE_NAME = 'budget-tracker-v1';

self.addEventListener('install', (event) => {
  console.log('SW installing');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('SW activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  console.log('SW fetch:', event.request.url);
});