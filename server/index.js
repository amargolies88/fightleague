// define packages
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/routes');
// load environment variables
dotenv.config({ path: '../.env' });

// start express
const app = express();

// set up middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

// connect to MongoDB
console.log(process.env.DB_URI);
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// create http server
const server = http.createServer(app);

// create Socket.IO server listening to http server
const io = socketio(server, {
    cors: {
        origin: '*',
    },
});

// start server
const PORT = 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
