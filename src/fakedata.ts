import { ECategories } from "./Enums&Interfaces/ECategory";

export const data: Categories[] = [
        {
            title: "Laptop",
            category: ECategories.Saving,
            money: 100,
        },
        {
            title: "Food",
            category: ECategories.Expenses,
            money: 50,
        },
        {
            title: "Car",
            category: ECategories.Income,
            money: 200,
        },
        {
            title: "Laptop",
            category: ECategories.Saving,
            money: 100,
        },
        {
            title: "Bitcoin",
            category: ECategories.Investment,
            money: 50,
        },
        {
            title: "Car",
            category: ECategories.Expenses,
            money: 200,
        },
        {
            title: "Laptop",
            category: ECategories.Saving,
            money: 100,
        },
        {
            title: "Food",
            category: ECategories.Expenses,
            money: 50,
        },
        {
            title: "Car",
            category: ECategories.Expenses,
            money: 200,
        },
        {
            title: "Food",
            category: ECategories.Expenses,
            money: 50,
        },
        {
            title: "Car",
            category: ECategories.Expenses,
            money: 200,
        },
        {
            title: "Food",
            category: ECategories.Expenses,
            money: 50,
        },
        {
            title: "Car",
            category: ECategories.Expenses,
            money: 200,
        },

    ]

interface Categories{
    title: string;
    category: ECategories;
    money: number;
    
}