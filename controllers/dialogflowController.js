const machines = require("../database_dev");  // Importamos la "base de datos"
const packs = require("../database2");  // Importamos los packs

exports.handleDialogflowRequest = (req, res) => {
    const intentName = req.body.queryResult.intent.displayName;

    if (intentName === "Consulta_Maquina") {
        const machineName = req.body.queryResult.parameters.maquina;

        // Buscar la máquina en la base de datos
        const machine = machines.find(m => m.title.toLowerCase() === machineName.toLowerCase());

        if (machine) {
            return res.json({
                fulfillmentText: `La ${machine.title} es una ${machine.type}. ${machine.info[0]}`
            });
        } else {
            return res.json({
                fulfillmentText: `Lo siento, no encontré información sobre la máquina "${machineName}".`
            });
        }
    }

    if (intentName === "Consulta_Tipo_Maquina") {
      const type = req.body.queryResult.parameters.tipo_maquina;
  
      console.log("🔍 Tipo de máquina recibido desde Dialogflow:", type);
  
      const filteredMachines = machines.filter(m => m.category.toLowerCase() === type.toLowerCase());
  
      console.log("📌 Máquinas encontradas:", filteredMachines);
  
      if (filteredMachines.length > 0) {
          const machineNames = filteredMachines.map(m => m.title).join(", ");
          return res.json({
              fulfillmentText: `Las máquinas disponibles para ${type} son: ${machineNames}.`
          });
      } else {
          return res.json({
              fulfillmentText: `No encontré máquinas del tipo "${type}".`
          });
      }
  }
  

    if (intentName === "Consulta_Pack") {
        const packName = req.body.queryResult.parameters.pack;

        // Buscar el pack en la base de datos
        const pack = packs.find(p => p.title.toLowerCase() === packName.toLowerCase());

        if (pack) {
            return res.json({
                fulfillmentText: `El pack ${pack.title} incluye: ${pack.machines.join(", ")}.`
            });
        } else {
            return res.json({
                fulfillmentText: `No encontré información sobre el pack "${packName}".`
            });
        }
    }

    // Si el intent no está mapeado, enviar una respuesta predeterminada
    return res.json({
        fulfillmentText: "Lo siento, no entendí tu consulta."
    });
};
