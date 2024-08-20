const express = require('express');
const router = express.Router(); 
const cors = require('cors');
const listaSeries = require('./dados.json'); 

const app = express();
app.use(cors());
app.use(express.json()); 

//GET
router.get('/series', (req, res) => {
    res.json(listaSeries); 
});

//POST
router.post('/series', (req, res) => {
    const serie = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    };
    
    listaSeries.series.push(serie); 
    res.status(201).json({message: `Série '${serie.title}' adicionada com sucesso!`}); 
});


app.use(router);

app.listen(3333, () => {
    console.log("Server running successfully");
});
