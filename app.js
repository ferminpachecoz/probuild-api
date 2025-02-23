const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rutas
const maquinasRoutes = require('./routes/maquinas');
const packsRoutes = require('./routes/packs');
const dialogflowRoutes = require("./routes/dialogflow");

app.use("/", dialogflowRoutes);
app.use('/machines', maquinasRoutes);
app.use('/packages', packsRoutes);

// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Manejo de errores
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
module.exports = app;
