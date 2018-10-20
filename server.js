const app = require('express')();
const bp = require('body-parser');
const routes = require('./routes');

require('dotenv').config();

app.use(bp.json());
app.use(bp.urlencoded());

routes(app);

app.listen(process.env.PORT);
