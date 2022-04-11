export interface weightData {
    weight: number,
    bodyFat: number
}
export class LocalStorageManager {


    private static _instance: LocalStorageManager = new LocalStorageManager();

    private constructor() {

    }

    public static get instance(): LocalStorageManager {
        return this._instance;
    }

    public getItem(key: string): weightData {
        return JSON.parse(localStorage?.getItem(key) ?? '{\"weight\":0,\"bodyFat\":0}');
    }

    public setItem(key: string, value: weightData,) {
        localStorage?.setItem(key, JSON.stringify(value));

    }

    public getAllData() {
        const returnData: { [key: string]: weightData } = {};
        for (const key in localStorage) {
            if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
                const data = localStorage[key];
                returnData[key] = JSON.parse(data);
            }
        }
        return returnData;
    }


}