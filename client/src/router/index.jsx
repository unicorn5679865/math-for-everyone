import Lesson from "../components/lesson";
import Signin from "../components/signinPage/sign-in";
import NotFound from "../components/ErrorPage/notFound";
import MenuChapter from "../components/MenuChapter";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default () =>  
    <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route
                path="/lesson"
                element={ <Lesson/>
                    // <PrivateRoute>
                    //    
                    // </PrivateRoute>
                }/>
                <Route
                path="/menuChapter"
                element={<MenuChapter/>} />
                
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>