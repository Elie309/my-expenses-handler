import { CategoryTypes } from "./Enums&Interfaces/CategoryTypes";

export const data: Categories[] = [
    {
        title: "Laptop",
        category: CategoryTypes.Saving,
        money: 100,
    },
    {
        title: "Food",
        category: CategoryTypes.Expenses,
        money: 50,
    },
    {
        title: "Car",
        category: CategoryTypes.Income,
        money: 200,
    },
    {
        title: "Desktop",
        category: CategoryTypes.Saving,
        money: 100,
    },
    {
        title: "Bitcoin",
        category: CategoryTypes.Investment,
        money: 50,
    },
]

interface Categories {
    title: string;
    category: CategoryTypes;
    money: number;

}

interface Transaction{
    Category: String | undefined;
    Date: Date;
    Money: number;
    description?: String;
}

export const transactions: Transaction[] = [
    {
        Category: data.find(x => x.title.toLowerCase() === "Laptop".toLowerCase())?.title,
        Date: new Date(2020, 1, 1),
        Money: 100,
        description: "Laptop",
    },
    {
        Category: data.find(x => x.title.toLowerCase() === "Food".toLowerCase())?.title,
        Date: new Date(2020, 1, 2),
        Money: 50,
        description: "Food",
    },
    {
        Category:  data.find(x => x.title.toLowerCase() === "Car".toLowerCase())?.title,
        Date: new Date(2020, 1, 3),
        Money: 200,
        description: "Car",
    },
    {
        Category: data.find(x => x.title.toLowerCase() === "Desktop".toLowerCase())?.title,
        Date: new Date(2020, 1, 4),
        Money: 100,
        description: "Desktop upgrade Ram",
    },
    {
        Category: data.find(x => x.title.toLowerCase() === "Bitcoin".toLowerCase())?.title,
        Date: new Date(2020, 1, 5),
        Money: 50,
        description: "Bitcoin",
    },
    {
        Category: data.find(x => x.title.toLowerCase() === "Car".toLowerCase())?.title,
        Date: new Date(2020, 1, 6),
        Money: 200,
        description: "Car",
    },
]