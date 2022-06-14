require('dotenv').config();
const express = require('express');
const postRouter = require('./routes/post.routes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api', postRouter);

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
