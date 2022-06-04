const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const s3 = require('./routes/s3Route');
const dotenv = require('dotenv');
dotenv.config();
console.log(`serving ${process.env.AWS_S3_BUCKET}`);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', s3 );


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
