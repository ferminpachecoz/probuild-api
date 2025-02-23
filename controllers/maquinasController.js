const machines = require('../database_dev'); // Importar la "base de datos"

const maquinasController = {
    getAllMachines: (req, res) => {
        res.json(machines);
    },

    getMachineByName: (req, res) => {
        const machineName = req.params.name ? req.params.name.toLowerCase() : null;

        if (!machineName) {
            return res.status(400).json({ message: "Debes proporcionar un nombre de máquina" });
        }

        const machine = machines.find(m => m.title && m.title.toLowerCase() === machineName);

        if (machine) {
            res.json(machine);
        } else {
            res.status(404).json({ message: "Máquina no encontrada" });
        }
    },

    searchMachines: (req, res) => {
        const query = req.params.query ? req.params.query.toLowerCase() : null;

        if (!query) {
            return res.status(400).json({ message: "Debes proporcionar un término de búsqueda" });
        }

        const results = machines.filter(m =>
            (m.title && m.title.toLowerCase().includes(query)) ||
            (m.type && m.type.toLowerCase().includes(query))
        );

        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).json({ message: "No se encontraron máquinas con esa búsqueda" });
        }
    }
};

module.exports = maquinasController;
