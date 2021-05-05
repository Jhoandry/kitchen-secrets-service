export const recipes = [
    {
        _id: 0,
        name: "Cachapa Oriental",
        description: "Tortilla de choclo es un plato típico a base de maíz",
        curiosities: [
            "Es un plato típico de varios países latinoamericanos como Colombia, Costa Rica, Ecuador, México y Venezuela.",
            "Puede estar acompañada de jamón, queso de mano, queso guayanés, queso telita, mantequilla o margarina. Algunas cachapas pueden estar rellenas de queso amarillo, pernil o hasta chorizo. Pero la tradicional es sólo con queso.",
            "Existen mezclas preenpacadas de cachapas, pero el sabor tierno es inigualable."
        ],
        averageScore: 0,
        scores: [],
        steps: [
            {
                description: "Pelar el maiz, desgranar y moler los granos de maíz para obtener la base de la mezcla",
                order: 1
            }, 
            {
                description: "Mezclar con la sal y el azúcar, agregar la leche y mezclar hasta conseguir un resultado homogéneo y poco espesa.",
                order: 2
            },
            {
                description: "Calentar el budare o la sartén a fuego mediano y engrasar antes de verter la mezcla",
                order: 3
            },
            {
                description: "Con la ayuda de una cuchara sopera agregar una porción de masa en el budare o sartén y regar la mezcla hasta crear una forma circular",
                order: 4
            },
            {
                description: "Cocinar 2 minuto hasta que se dore la cara que da al budare y voltear para dorar la otra mitad",
                order: 5
            },
            {
                description: "Al tener las dos caras de la cachapa listas, retirar del fuego y Untar mantequilla",
                order: 6
            },
            {
                description: "Agregar el queso elegido y doblar a la mitad. Luego a Disfrutar!",
                order: 7
            }
        ],
        ingredients: [
            {
                name: "Maíz tierno (choclo)",
                basePortion: "1", 
                unit: "Unidad"
            },
            {
                name: "Sal al gusto",
                basePortion: "", 
                unit: ""
            },
            {
                name: "Azúcar",
                basePortion: "30", 
                unit: "Gramos"
            },
            {
                name: "Leche",
                basePortion: 1, 
                unit: "Taza"
            },
            {
                name: "Queso de prefereicia (recomedacion - Queso de Mano o Guayanes)",
                basePortion: 200, 
                unit: "Gramos"
            }
        ]
    },
    {
        _id: 1,
        name: "Arepa",
        description: "Tortilla de harina de maíz precocina",
        curiosities: [
            "Esta comida venezolana y colombiana es muy versátil y hay muchas versiones diferentes de la misma receta.",
            "Las arepas venezolanas destacan de otras variedades porque su masa es más gruesa, lo que permite rellenarlas con una gran variedad de rellenos.",
            "Aunque suelen comerse en el desayuno y su preparación es muy sencilla, no las subestimes: las arepas pueden comerse a cualquier hora del día y, con un relleno lo suficientemente potente, podrán servir también como almuerzo."
        ],
        averageScore: 0,
        scores: [],
        steps: [
            {
                description: "Echa el agua en un bol grande, añade la sal y remueve",
                order: 1
            }, 
            {
                description: "Añade la harina poco a poco, removiendo todo el rato",
                order: 2
            },
            {
                description: "Cuando te cueste remover, amasa con tus manos para eliminar los grumos durante unos 2 minutos.",
                order: 3
            },
            {
                description: "Deja reposar la masa durante 5-10 minutos",
                order: 4
            },
            {
                description: "Mójate ligeramente las manos para que la masa no se pegue, divídela en bolitas y dales forma de arepa aplastándolas con las palmas de las manos (1 cm de grosor).",
                order: 5
            },
            {
                description: "Coloca una cucharadita de aceite en una plancha y extiéndelo sobre toda la superficie con ayuda de un papel de cocina. Calienta y lleva las arepas a la plancha. Cocina a fuego bajo hasta que veas que se han endurecido de un lado. Entonces, voltéalas y déjalas dorar por el otro lado.",
                order: 6
            }
        ],
        ingredients: [
            {
                name: "Harina de maíz amarilla precocida",
                basePortion: "200", 
                unit: "Gramos"
            },
            {
                name: "Sal al gusto",
                basePortion: "", 
                unit: ""
            },
            {
                name: "Agua",
                basePortion: "100", 
                unit: "Gramos"
            },
            {
                name: "Rellenos: Imaginación y creatividad! Mantequilla, Queso, jamón, pollo, cerdo, aguacate, huevos revueltos, cebolla y tomate, verduras…",
                basePortion: "", 
                unit: ""
            }
        ]
    },
    {
        _id: 3,
        name: "Lasaña de calabacín con pollo",
        description: "Este atractivo plato es una lasaña vegetal rellena de pollo y verduras. Puedes alternar las capas de lasaña con berenjena o calabacín, lo que os guste más. ¡Está riquísimo!",
        curiosities: [
            "es una receta sencilla y deliciosa. Incorporar una lista de ingredientes saludables en un solo plato es un reto que conseguiremos a la perfección con esta lasaña."],
        averageScore: 0,
        scores: [],
        steps: [
            {
                description: "Precalienta el horno a 200°. Lava los calabacines y córtalos en lonchas a lo largo. Disponlas en una fuente de horno forrada con papel sulfurizado. Sazónalas con sal, pimienta. Riégalas con un hilo de aceite y hornea 10 minutos.",
                order: 1
            }, 
            {
                description: "Corta el pollo en dados. Lava los tomates y el puerro. Pélalos y pícalos con las cebollas. Rehoga en 4 cucharadas de aceite la cebolla, el puerro 5 minutos. Agrega el tomate y cuece 5 minutos más. Incorpora el pollo y sofríe otros 5 minutos. Añade el vino, sal y cuece 5 minutos.",
                order: 2
            },
            {
                description: "En una fuente de horno, alterna capas de calabacín y de relleno. Termina con calabacín, añade el queso y gratina 12 minutos.",
                order: 3
            },
            {
                description: "EL TRUCO: Si quieres ahorrar tiempo, en lugar de hornear el calabacín, escáldalo 1 minuto en agua hirviendo.",
                order: 4
            }
        ],
        ingredients: [
            {
                name: "Calabacin",
                basePortion: "1", 
                unit: "Unidad"
            },
            {
                name: "Pollo",
                basePortion: "200", 
                unit: "Gramos"
            },
            {
                name: "Tomate",
                basePortion: "1", 
                unit: "Unidad"
            },
            {
                name: "Cebollas",
                basePortion: 1, 
                unit: "Unidad"
            },
            {
                name: "Puerro",
                basePortion: 1, 
                unit: "Unidad"
            },
            {
                name: "Vino blanco",
                basePortion: 100, 
                unit: "Mililitros"
            },
            {
                name: "Sal y pimienta al gusto",
                basePortion: "", 
                unit: ""
            },
            {
                name: "Queso de prefereicia (recomedacion - Queso de Mano o Guayanes)",
                basePortion: 200, 
                unit: "Gramos"
            }
        ]
    },
    {
        _id: 4,
        name: "Chicharrón",
        description: "rozo de carne de cerdo con cuero pero sin pelo que se fríe en su propia grasa.",
        curiosities: [
            "El chicharrón es una comida que en algunos países se obtiene tras derretir la grasa del cerdo, en otros se usa la grasa del cerdo para cocinar la carne y en otros consiste en una fritura de la piel del cerdo con o sin carne.",
            "Los chicharrones de carne de cerdo, e inclusive de pollo, son considerados en la gastronomía venezolana como una exquisitez, consumida durante todo el año."],
        averageScore: 0,
        scores: [],
        steps: [
            {
                description: "Cortar la piel de cerdo en cuadrados y ponerle la sal.",
                order: 1
            }, 
            {
                description: "Calentar una olla de fondo grueso y poner el aceite para evitar que se pegue la carne. Agregar el cerdo y bajar el fuego al mínimo para evitar que se quemen hasta que se derrita un poco la grasa. Se recomienda usar una olla antiadherente con tapa.",
                order: 2
            },
            {
                description: "Cuando se logre un volumen que permita la cocción se puede elevar el fuego a nivel medio y revolver de a ratos para tener una cocción pareja.",
                order: 3
            },
            {
                description: "Cuando los trocitos de cerdo tomen un color dorado se deben retirar y poner a escurrir la grasa. Cuando se hace en grandes cantidades se suelen poner en un lienzo para luego prensar y eliminar la grasa remanente",
                order: 4
            }
        ],
        ingredients: [
            {
                name: "Piel de cerdo",
                basePortion: "1", 
                unit: "Kilo"
            },
            {
                name: "Aceite o Manteca",
                basePortion: 20, 
                unit: "Gramos"
            },
            {
                name: "Sal al gusto",
                basePortion: "", 
                unit: ""
            }
        ]
    }
]
