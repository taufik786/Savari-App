const express = require('express');
const app = express();
const port = 5000;
const routes = require('./router/router')
const cors = require('cors');

app.use(cors(({
    origin: 'http://localhost:4200'
})))

app.get('/', routes);
app.get('/api', routes);
app.post('/api', routes);
app.post('/login', routes);


app.listen(port, ()=>{ console.log(`Server running on http://localhost:${port}`) })