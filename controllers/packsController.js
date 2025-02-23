const packs = require('../database2'); // Importar la "base de datos"

const packsController = {
    getAllPacks: (req, res) => {
        res.json(packs);
    },

    getPackByName: (req, res) => {
        const pack = packs.find(p => p.name.toLowerCase() === req.params.name.toLowerCase());
        if (pack) {
            res.json(pack);
        } else {
            res.status(404).json({ message: 'Paquete no encontrado' });
        }
    }
};

module.exports = packsController;
