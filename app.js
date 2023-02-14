const express= require('express');
const path = require('path'); //path es nativo de NODE por lo que ni hay que instalar.

const publicPath = path.join(__dirname, 'public'); //carpeta public estatica o absoluta

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html')); //direccion absoluta
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html')); //direccion absoluta
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html')); //direccion absoluta
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});
 
