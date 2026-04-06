const https = require('https');
function scrapeUnsplash(query) {
  return new Promise((resolve) => {
    https.get('https://unsplash.com/s/photos/' + encodeURIComponent(query.replace(/ /g, '-')), {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+[^\"']+/);
        resolve(match ? match[0] : null);
      });
    });
  });
}

(async () => {
  const queries = [
    'kid boy formal suit',
    'kid denim overalls',
    'child cozy knit sweater',
    'little girl summer floral dress',
    'silk scarf',
    'men wool coat',
    'winter puffer jacket',
    'winter fashion'
  ];
  for (let q of queries) {
    let url = await scrapeUnsplash(q);
    if(url) {
        url = url.split('?')[0] + '?w=800&q=80&fit=crop';
    }
    console.log(q, '=>', url);
  }
})();
