import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clear(): void,
    addItem(item: ListItem): void,
    removeItem(id: string): void
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []){}

    get list(): ListItem[] {
        return this._list
    }
    set list(list: ListItem[]) {
        this._list = list
    }

    load(): void {
        throw new Error("Method not implemented.");
    }
    save(): void {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    addItem(item: ListItem): void {
        throw new Error("Method not implemented.");
    }
    removeItem(id: string): void {
        throw new Error("Method not implemented.");
    }
}