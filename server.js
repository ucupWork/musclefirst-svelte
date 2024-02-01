import { handler } from './build/handler.js';
import express from 'express';
import cors from 'cors';

const app = express();
// add a route that lives separately from the SvelteKit app
// Set response header 'Access-Control-Allow-Origin : *'
// app.get('/assets/js/external-scripts.js', cors({ origin: '*' }));
app.get('/health-check', (req, res) => {
    res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
    console.log('Node app is running on port 3000');
});