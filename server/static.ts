import * as express from 'express';


const app = express();
app.use(express.static('server/public'));

app.listen(80);