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
    }
]