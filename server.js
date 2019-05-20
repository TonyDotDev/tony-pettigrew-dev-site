const express = require('express');
const next = require('next');
const Prismic = require('prismic-javascript');
require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.port || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // **middleware and routes go here**

  server.get('/api/projects', (req, res) => {
    console.log('server working');

    Prismic.getApi(process.env.PRISMIC_URI, {
      accessToken: process.env.PRISMIC_TOKEN,
    })
      .then(api => api.query(''))
      .then(
        response => {
          res
            .json({ projects: response.results, status: 'success' })
            .status(200);
        },
        err => {
          res.json({ err, status: 'failed' }).status(500);
        },
      )
      .catch(err => res.json({ err, status: 'failed' }).status(500));
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log('Listening on PORT ' + port);
  });
});
