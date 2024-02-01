export type ServingHead = {
    id: string;
    title: string;
    gram?: string;
    sachet?: string;
}

export type AmountServing = {
    id: string;
    title: string;
    kkal?: string;
}

export type IngredientsList = {
    id: string;
    title: string;
    gram?: string;
    mgram?: string;
    percent?: string;
}

export type VitaminList = {
    id: string;
    alignItem: string;
    title: string;
    percent?: string;
}

export type BcaaList = {
    id: string;
    title: string;
    mgram?: string;
}

export type NutritionDescription = {
    id: string;
    description?: string;
}

export type IngredientsDescription = {
    id: string;
    description?: string;
}

export type ServingSuggestion = {
    id: string;
    description?: string;
}

export type Storage = {
    id: string;
    description?: string;
}

export type Warning = {
    id?: string;
    description?: string;
}