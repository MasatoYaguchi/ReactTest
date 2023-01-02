import { WeightData, LocalStorageManager } from './LocalStorageManager';
import './HistoryView.css'
import InputBodyWeight from './InputBodyWeight';
import { Link } from 'react-router-dom';

interface HistoryComponentProps {
    weightData: WeightData,
}


const HistoryComponent = (props: HistoryComponentProps): JSX.Element => {
    return (
        <li className="histocyComponent">
            <div>
                <span className='day'>日付 : {new Date(props.weightData.unixtime).toLocaleString()}</span>
                <span className='weight'>体重 : {props.weightData.weight}kg</span>
                <span className='bodyFat'>体脂肪率 : {props.weightData.bodyFat}%</span>
            </div>
        </li>
    );
}
interface HistoryListComponentProps {
    allData: WeightData[],
}


const HistoryListomponent = (data: HistoryListComponentProps): JSX.Element => {

    return (
        <div className="histocyComponent">
            {/* forEachではなくmapを使うのは返した配列を使っているから? */}
            {data.allData.map((value: WeightData) =>
                <HistoryComponent weightData={value} />
            )}
        </div>
    );

}


function HistoryView(): JSX.Element {
    const allHistoryData = LocalStorageManager.instance.getAllData();
    return (
        <div className="contents">
            <h2>体重履歴</h2>
            <HistoryListomponent allData={allHistoryData} />
            <Link to="/">体重入力ページへ</Link>
        </div >
    );
}

export default HistoryView;
