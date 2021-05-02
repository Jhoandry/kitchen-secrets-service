export const recipes = [
    {
        _id: 0,
        name: "Cachapa Oriental",
        description: "Tortilla de choclo es un plato típico a base de maíz",
        curiosities: [
            "Es un plato típico a base de maíz de varios países latinoamericanos como Colombia, Costa Rica, Ecuador, México y Venezuela.",
            "Puede estar acompañada de jamón, queso de mano, queso guayanés, queso telita, mantequilla o margarina. Algunas cachapas pueden estar rellenas de queso amarillo, pernil o hasta chorizo. Pero la tradicional es sólo con queso.",
            "Existen mezclas preenpacadas de cachapas, pero el sabor tierno es inigualable."
        ],
        averages: [],
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
                unit: "unidad"
            },
            {
                name: "Sal",
                basePortion: "1", 
                unit: "pizca al gusto"
            },
            {
                name: "Azúcar",
                basePortion: "3/4", 
                unit: "taza"
            },
            {
                name: "Leche",
                basePortion: 1, 
                unit: "taza"
            },
            {
                name: "Queso de prefereicia (recomedacion - Queso de Mano o Guayanes)",
                basePortion: 200, 
                unit: "Gramos"
            }
        ]
    },
    {
        _id: 0,
        name: "Arepa",
        description: "Tortilla de harina de maíz precocina",
        curiosities: [
            "Esta comida venezolana y colombiana es muy versátil y hay muchas versiones diferentes de la misma receta.",
            "Las arepas venezolanas destacan de otras variedades porque su masa es más gruesa, lo que permite rellenarlas con una gran variedad de rellenos.",
            "Aunque suelen comerse en el desayuno y su preparación es muy sencilla, no las subestimes: las arepas pueden comerse a cualquier hora del día y, con un relleno lo suficientemente potente, podrán servir también como almuerzo."
        ],
        averages: [],
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
                name: "Sal",
                basePortion: "1", 
                unit: "pizca al gusto"
            },
            {
                name: "Agua",
                basePortion: "100", 
                unit: "Gramos"
            },
            {
                name: "Rellenos: Imaginación y creatividad, además de los gustos, son fundamentales. Mantequilla, Queso, jamón, pollo, cerdo, aguacate, huevos revueltos, cebolla y tomate, verduras…",
                basePortion: "", 
                unit: ""
            }
        ]
    }
]