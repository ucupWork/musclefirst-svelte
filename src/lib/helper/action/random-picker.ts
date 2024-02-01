import uuid from "uuid";

import { 
    setLoading,
    setListPerson,
    setResult,
    urlLink, 
    countData,
    switchLayer,
} from "$stores/random-picker";

export const addItem = (text: string, link: string) => {
    const item = { id: uuid(), text, link };
    setListPerson.update(prev => [item, ...prev]);
};

export const deleteAllItem = () => {
    setListPerson.set([]);
};

export const deleteItem = (index: number) => {
    setListPerson.update(prev => prev.filter(item => item.id !== index));
};

export const randomPick = (items: any) => {
    const list = items;

    setLoading.set(true);
    setResult.set("");

    const result = list[Math.floor(Math.random() * list.length)];
    setTimeout(() => {
        setResult.set(result.text);
        setLoading.set(false);
        // console.log(setResult.set(result.text));
    }, 5500);
};

export const emptyList = () => {
    setListPerson.set([]);
    setResult.set("");
};

export const goBack = () => {
    setListPerson.set([]);
    setResult.set("");
    setLoading.set(false);
    urlLink.set("");
    countData.set(0);
    switchLayer.set("");
    window.location.reload();
};