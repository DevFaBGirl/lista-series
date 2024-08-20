const express = require('express');
const router = express.Router(); // Definindo um único router para ser reutilizado
const cors = require('cors');
const listaSeries = require('./dados.json'); 

const app = express();
app.use(cors());
app.use(express.json()); // Necessário para processar o body das requisições POST

//GET
router.get('/series', (req, res) => {
    res.json(listaSeries); 
});

//POST
router.post('/series', (req, res) => { // Usar router para definir a rota
    const serie = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    };
    
    listaSeries.push(series); // Adiciona a nova série ao array original
    res.status(201).json({message: `Série '${serie.title}' adicionada com sucesso!`}); // Retorna a nova série criada
});


app.use(router);

app.listen(3333, () => {
    console.log("Server running successfully");
});
