// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const mongoose = require('./server/config/connection');

// Get our API routes
// const api = require('./server/routes/api');
const squadsApi = require('./server/controller/SquadController');
const topicsApi = require('./server/controller/TopicController');
const healthCheckApi = require('./server/controller/HealthCheckController');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/squads', squadsApi);
app.use('/topics', topicsApi);
app.use('/healthChecks', healthCheckApi);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));