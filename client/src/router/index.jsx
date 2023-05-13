import Header from "../components/header";
import Footer from "../components/footer";
import Lesson from "../components/lesson";
import Signin from "../components/signinPage/sign-in";
import NotFound from "../components/ErrorPage/notFound";
import Topics from "../components/topics";
import { Calendar } from "../components/calendar";
import PrivateRoute from "./PrivateRoute";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ApiErrorHandler } from "../components/ApiErrorHandler/ApiErrorHandler";
import TopicsForControl from "../components/topicControl/topicsForControl";
import TopicFinalTest from "../components/topicControl/topicFinalTest";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

export default () =>  
    <BrowserRouter>
        <AuthContextProvider>
            <ApiErrorHandler>
                <Header />
                    <Routes>
                        <Route 
                            path="/" 
                            element={<Navigate to="/topics" replace></Navigate>} />
                        <Route path="/signin" element={<Signin />} />
                        <Route
                            path="/lesson/:lessonId"
                            element={ <Lesson/>
                                // <PrivateRoute>
                                // </PrivateRoute>
                            }/>
                        <Route
                            path="/topics"
                            element={<Topics/>} />
                        <Route
                            path="/calendar"
                            element={<Calendar/>} />
                        <Route
                            path="/knowledge-control"
                            element={<TopicsForControl/>} />
                        <Route
                            path="/knowledge-control/:topicId"
                            element={<TopicFinalTest/>} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <Footer />
            </ApiErrorHandler>
        </AuthContextProvider>
    </BrowserRouter>