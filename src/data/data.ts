import Expresso from "../assets/coffees/Expresso.svg"
import Americano from "../assets/coffees/Americano.svg"
import Árabe from "../assets/coffees/Árabe.svg"
import Café_com_Leite from "../assets/coffees/Café_com_Leite.svg"
import Café_Gelado from "../assets/coffees/Café_Gelado.svg"
import Capuccino from "../assets/coffees/Capuccino.svg"
import Chocolate_Quente from "../assets/coffees/Chocolate_Quente.svg"
import Cubano from "../assets/coffees/Cubano.svg"
import Expresso_Cremoso from "../assets/coffees/Expresso_Cremoso.svg"
import Havaiano from "../assets/coffees/Havaiano.svg"
import Irlandês from "../assets/coffees/Irlandês.svg"
import Latte from "../assets/coffees/Latte.svg"
import Macchiato from "../assets/coffees/Macchiato.svg"
import Mochaccino from "../assets/coffees/Mochaccino.svg"



export const Coffees = [
    {
        id: 1,
        category: ["tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        photo: Expresso,
        price: 9.90,
    },
    {
        id: 2,
        category: ["tradicional"],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        photo: Americano,
        price: 9.90,
    },
    {
        id: 3,
        category: ["tradicional"],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        photo: Expresso_Cremoso,
        price: 9.90,
    },
    {
        id: 4,
        category: ["tradicional", " gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        photo: Café_Gelado,
        price: 9.90,
    },
    {
        id: 5,
        category: ["tradicional", " com leite"],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        photo: Café_com_Leite,
        price: 9.90,
    },
    {
        id: 6,
        category: ["tradicional", " com leite"],
        name: "Latte",
        description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        photo: Latte,
        price: 9.90,
    },
    {
        id: 7,
        category: ["tradicional", " com leite"],
        name: "Capuccino",
        description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
        photo: Capuccino,
        price: 9.90,
    },
    {
        id: 8,
        category: ["tradicional", " com leite"],
        name: "Macchiato",
        description:
        "Café expresso misturado com um pouco de leite quente e espuma",
        photo: Macchiato,
        price: 9.90,
    },
    {
        id: 9,
        category: ["tradicional", " com leite"],
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        photo: Mochaccino,
        price: 9.90,
    },
    {
        id: 10,
        category: ["especial", " com leite"],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        photo: Chocolate_Quente,
        price: 9.90,
    },
    {
        id: 11,
        category: ["especial", " alcoólico", " gelado"],
        name: "Cubano",
        description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
        photo: Cubano,
        price: 9.90,
    },
    {
        id: 12,
        category: ["especial"],
        name: "Havaiano",
        description: "Uma bebida adocicada preparada com café e leite de coco",
        photo: Havaiano,
        price: 9.90,
    },
    {
        id: 13,
        category: ["especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        photo: Árabe,
        price: 9.90,
    },
    {
        id: 14,
        category: ["especial", " alcoólico"],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        photo: Irlandês,
        price: 9.90,
    },
];