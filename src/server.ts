import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

// ROUTE

app.get('/route', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('');

app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
});
