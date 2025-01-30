// external modules
const express = require('express');
const path = require('path');

// local modules
const app = express();





const {hostRouter} = require('./Routers/hostRouter');
const {ratingRouter} = require('./Routers/ratingRouter');
const {costRouter} = require('./Routers/costRouter');
const {locRouter} = require('./Routers/locRouter');
const { userRouter } = require('./Routers/userRouter');
const rootDir = require('./utils/path');
const {mongoConnect} = require('./utils/databaseUtil');

// setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

// routes
app.use(hostRouter);
app.use(userRouter);
app.use(costRouter);
app.use(locRouter);
app.use(ratingRouter);


// 404 handler
app.use((req, res) => {
  res.status(404).send('<h1>404 nott found</h1>');
});

// server listening
const PORT = 3000;

mongoConnect(()=>{
  app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
  });
})

