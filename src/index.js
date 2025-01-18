const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
}))


app.get('/', (req, res) => {
    res.send('api inicial')
})

app.listen(3000, () => {
    console.log('servidor abriu na porta 8000')
})