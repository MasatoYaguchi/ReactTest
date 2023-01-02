interface NumberInputProps {
    placeHolder: string;
    unit: string;
    onChangeFunc: { (value: number): void }
}

/**
 * 全角の数値とドットを半角に変換する
 * @param str 
 * @returns 
 */
function zenkakuToHankakuNumber(str: string) {
    return str.replace(/[．０-９]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
}

export function NumberInput(props: NumberInputProps) {


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 全角は半角に変換後に数字のみ抽出
        const numberString = zenkakuToHankakuNumber(event.target.value)?.match(/[0-9 \.]/g)?.reduce((previousValue: string, currentValue: string) => previousValue + currentValue);
        if (!numberString) {
            event.target.value = "";
            return;
        }
        event.target.value = numberString;
        const value = Number(numberString);
        props.onChangeFunc(Number(value));
    }

    return (
        <div>
            <form className="inputForm">
                <label >
                    {props.placeHolder} &nbsp;
                    <input type="text" placeholder={"0.0"} inputMode="decimal" onChange={onChangeHandler} />
                </label>
                <span>{props.unit}</span>
            </form>
        </div>
    )
}
