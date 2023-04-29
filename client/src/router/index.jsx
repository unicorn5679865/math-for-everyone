import Lesson from "../components/lesson";
import Signin from "../components/signinPage/sign-in";
import NotFound from "../components/ErrorPage/notFound";
import Topics from "../components/topics";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ApiErrorHandler } from "../components/ApiErrorHandler/ApiErrorHandler";

export default () =>  
    <BrowserRouter>
        <AuthContextProvider>
            <ApiErrorHandler>
                <Header />
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                        <Route
                            path="/lesson/:lessonId"
                            element={ <Lesson/>
                                // <PrivateRoute>
                                //    
                                // </PrivateRoute>
                            }/>
                        <Route
                            path="/topics"
                            element={<Topics/>} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <Footer />
            </ApiErrorHandler>
        </AuthContextProvider>
    </BrowserRouter>