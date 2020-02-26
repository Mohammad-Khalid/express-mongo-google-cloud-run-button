const express = require('express'),
      cors = require('cors'),
      app = express(),
      routes = require('./routes/query'),
      port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});