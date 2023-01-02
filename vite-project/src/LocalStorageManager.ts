export interface WeightData {
    weight: number,
    bodyFat: number,
    unixtime: number
}
export class LocalStorageManager {


    private static _instance: LocalStorageManager = new LocalStorageManager();

    private constructor() {

    }

    public static get instance(): LocalStorageManager {
        return this._instance;
    }

    public getItem(key: string): WeightData {
        return JSON.parse(localStorage?.getItem(key) ?? '{\"weight\":0,\"bodyFat\":0}');
    }

    public setItem(key: string, value: WeightData) {
        // 体重未入力は保存しない
        if (value.weight === 0) return;
        localStorage?.setItem(key, JSON.stringify(value));

    }

    public getAllData() {
        const returnData: WeightData[] = [];
        for (const key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const data = localStorage[key];
                if (!parseInt(key)) continue;

                const json = JSON.parse(data);
                if (json.hasOwnProperty("weight") && json.hasOwnProperty("bodyFat")) {
                    returnData.push(json);
                }

            }
        }
        console.log(returnData);
        return returnData.sort((a: WeightData, b: WeightData) => b.unixtime - a.unixtime);
    }


}