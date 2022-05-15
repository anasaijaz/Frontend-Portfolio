import Appbar from "./components/Appbar";
import {Box} from "@mui/material";
import Current from "./pages/Current";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route index path="*" element={ <Current/>}/>
        </Routes>
    </div>
  );
}

export default App;
