import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputBodyWeight from "./InputBodyWeight";
import HistoryView from "./HistoryView";



function Router(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InputBodyWeight />} />
                <Route path="history" element={<HistoryView />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
