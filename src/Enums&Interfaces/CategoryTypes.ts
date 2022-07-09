export enum CategoryTypes{
    Saving = "Saving",
    Expenses = "Expenses",
    Income = "Income",
    Investment = "Investment",
    Other = "Other",
}

export const CategoryLabels: ICategoryLabel[] = [
    {
        label: "Saving",
        value: CategoryTypes.Saving
    },
    {
        label: "Expenses",
        value: CategoryTypes.Expenses
    },
    {
        label: "Income",
        value: CategoryTypes.Income
    },
    {
        label: "Investment",
        value: CategoryTypes.Investment
    },
    {
        label: "Other",
        value: CategoryTypes.Other
    }
]

interface ICategoryLabel{
    label: string;
    value: CategoryTypes;
}