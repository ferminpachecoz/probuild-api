let db =[
  {
    id: 1,
    name: "pack inicial",
    spaceRequired: 300,
    operatorsRequired: "7-10",
    production: "33",
    description: "Empezá tu camino en la fabricación de aberturas de PVC con tecnología accesible y flexible. Este pack está diseñado para aquellos fabricantes que desean iniciar en el rubro con una capacidad productiva de hasta 33 ventanas por día en jornadas de 8 horas. Ideal para quienes buscan crecer de forma orgánica, permite aumentar tu tecnología y capacidad de producción a medida que tu negocio se desarrolla. Con máquinas mono-cabezal, el pack inicial es la opción perfecta para comenzar con una inversión ajustada sin comprometer la calidad y precisión de tu taller.",
    short_description: "Comenzá tu taller con maquinaria, para fabricar aberturas de PVC, básica y flexible. Ideal para iniciar en el rubro con capacidad para 33 ventanas diarias.",
    machines: ["ACK 420 S", "CRM 201S", "KM 215 S", "SDT 275", "TK 503", "CA 601", "CK 412"],
    additionals: ["VP 1000", "WB 4000", "SKN 301", "GPT 1000"],
    image: "/images/Pack Inicial PNG.webp",
    aireComprimido: "6 - 8 Bar/500 lt min.",
    electricidadRequerida: 14
  },
  {
    id: 2,
    name: "pack semi avanzado",
    spaceRequired: 300,
    operatorsRequired: "7-10",
    production: "44",
    description: "Mejora la eficiencia de tu taller con tecnología de doble cabezal. Este pack está pensado para aquellos que ya tienen un taller en funcionamiento o desean dar un paso más en la optimización de su producción. Con una capacidad de hasta 44 ventanas por día y un equipo que requiere las mismas condiciones operativas que el pack inicial (7-10 operarios y 300 m²), este pack eleva la productividad y la eficiencia al incorporar cortadoras y soldadoras de doble cabezal, además de una atornilladora automática.",
    short_description: "Optimiza tu producción con cortadoras y soldadoras de doble cabezal. Perfecto para fabricar 44 ventanas por día con mayor eficiencia.",
    machines: ["DC 421 PBS", "FR 225 S", "ST 264", "KM 215 S", "SDT 275", "SM 201", "DK 502", "CK 412"],
    additionals: ["VP 1000", "HP 1000", "WB 4000", "NSM 352", "SKN 301", "GPT 1000"],
    image: "/images/Pack semi-avanzado PNG.webp",
    aireComprimido: "500 lt min.",
    electricidadRequerida: 17
  },
  {
    id: 3,
    name: "pack avanzado",
    spaceRequired: 660,
    operatorsRequired: "9-9",
    production: "110",
    description: "Maximiza tu producción con tecnología avanzada y mayor automatización. Este pack está diseñado para fabricantes que buscan un volumen de fabricación superior, con una capacidad de hasta 110 ventanas por día en jornadas de 8 horas. Ideal para quienes trabajan con desarrolladoras, proyectos grandes o distribuidores, este pack incluye centros de corte y mecanizado de alta tecnología, permitiendo automatizar la producción con sistemas de etiquetado de ventanas y software avanzado. El pack avanzado es perfecto para quienes necesitan cubrir una alta demanda con la mejor tecnología disponible.",
    short_description: "Automatiza tu producción y aumenta la capacidad a 110 ventanas diarias. Equipado con tecnología avanzada y sistemas de etiquetado.",
    machines: ["DC 421 PBS","FR 226 S","ST 264","KM 215 S","SDT 275","CCL 1660","NSM 352","CK 412"],
    additionals: ["VP 1000","WB 4000","SKN 301","GPT 1000"],
    image: "/images/Pack avanzado PNG.webp",
    aireComprimido: "500 lt / min 6-8 bar",
    electricidadRequerida: 28
  },
  {
    id: 4,
    name: "pack elite",
    spaceRequired: 550,
    operatorsRequired: "8-10",
    production: "154",
    description: "La máxima tecnología para los fabricantes más exigentes. Este pack es la solución definitiva para quienes buscan la última tecnología en la fabricación de aberturas de PVC. Con una capacidad de hasta 154 ventanas por día, el Pack Elite está diseñado para aquellos fabricantes que demandan alta productividad con una inversión en maquinaria de punta. Equipado con las máquinas más avanzadas del mercado, permite automatizar por completo el proceso productivo, logrando niveles excepcionales de eficiencia y precisión. Ideal para empresas que buscan diferenciarse con calidad y rendimiento superior.",
    short_description: "Máxima tecnología para alta producción. Este pack automatiza completamente tu taller, permitiéndote fabricar 154 ventanas diarias.",
    machines: ["PIM 6509","SM 1000","MEM 128","SDT 280","CCL 1660","NSM 353","SKN 301","CK 412"],
    additionals: ["VP 1000","HP 1000","GPT 1000","WB 4000"],
    image: "/images/Pack Elite PNG.webp",
    aireComprimido: "500 lT. / min 6-8 Bar",
    electricidadRequerida: 32
  }
]
module.exports= db;