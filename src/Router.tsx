import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputBodyWeight from "./InputBodyWeight";
import HistoryView from "./HistoryView";



function Router(): JSX.Element {
    // const baseName = import.meta.env.BASE_URL;
    const baseName = "";
    return (
        <BrowserRouter basename={baseName}>
            <Routes>
                <Route path="/" element={<InputBodyWeight />} />
                <Route path="history" element={<HistoryView />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
