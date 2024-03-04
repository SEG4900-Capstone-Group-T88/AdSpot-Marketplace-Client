import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage/Homepage";
import SignIn from "./routes/SignIn/SignIn";
import SignUp from "./routes/SignUp/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/signIn" element={<SignIn/>} />
                <Route path="/signUp" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
