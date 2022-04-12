import { useState } from 'react'
import './InputBodyWeight.css'
import { NumberInput } from "./NumberInput.js"
import { LocalStorageManager } from './LocalStorageManager';

function InputBodyWeight(): JSX.Element {
  const [weight, setWeight] = useState(0);
  const [bodyFat, setbodyFat] = useState(0);

  return (
    <div className="contents">
      <h2>体重管理</h2>
      <NumberInput placeHolder='体重を入力' unit='kg' onChangeFunc={(val: number) => {
        setWeight(val);
      }} />
      <NumberInput placeHolder='体脂肪率を入力' unit='%' onChangeFunc={(val: number) => {
        setbodyFat(val);
      }} />
      <p>
        <button type="button" onClick={
          () => {
            const unixTime = +(new Date());
            LocalStorageManager.instance.setItem(
              unixTime.toString(),// keyはUnixTimme
              { unixtime: unixTime, weight: weight, bodyFat: bodyFat }
            );
          }
        }>
          保存
        </button>
      </p>
      <p>
        入力体重: {weight} kg
      </p>
      <p>
        入力体脂肪率: {bodyFat} %
      </p>
      <a>履歴</a>
    </div>
  )
}

export default InputBodyWeight;
