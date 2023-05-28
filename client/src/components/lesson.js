import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useParams } from "react-router";
import { useQuery } from "../hooks/useQuery";
import { api } from "../api/api";
import MessageModal from "./modals/message.modal";

import Quiz from "./quiz";
import { Practice } from "./common/Practice";

export default function Lesson() {

    const { lessonId } = useParams();
    const { data: lesson } = useQuery(`/lessons/${lessonId}`);
    const { data: progress, refresh: refreshProgress } = useQuery(`/lessons/${lessonId}/progress`);

    const [ modalState, setModalState] = useState({isOpen: false, message: ""});
    const [recentResults, setRecentResults] = useState({});

    const [numPages, setNumPages] = useState(null);

    const handleDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleQuizCompleted = async (practiceId, answers) => {
        const res = await api.validateAnswers(practiceId, answers);
        setModalState({isOpen: true, message: `Оценка: ${res.data.mark}.` });
        setRecentResults((prevState) => ({
            ...prevState,
            [practiceId]: res.data.results,
        }));
        refreshProgress();
    };

    const handleClose = () => {
        setModalState({isOpen: false, message: ""})
    };

    return (
            <div className="sm:flex justify-start mb-3 h-full"> 
                <div className="theory flex flex-col ml-4 sm:w-7/12 text-left">
                    <div className="mt-3 py-4">
                        <p className="text-xl border-b-2">Теория</p>
                    </div>
                    <div className="scrollbar overflow-y-scroll  ">
                        <Document className="w-full" file={lesson?.link} onLoadSuccess={handleDocumentLoadSuccess}>
                            {
                                Array(numPages).fill().map((_, i) =>
                                    <Page key={i} pageNumber={i+1} />
                                )
                            }
                        </Document>  
                    </div>
                </div>

                <div className="practice flex flex-col mx-10 sm:mr-10 sm:w-5/12 text-left">
                    <div className="mt-3 py-4">
                        <p className="text-xl border-b-2">Практика</p>
                    </div>
                    <div className="scrollbar overflow-y-scroll">
                    {
                        lesson?.practices.map(practice => (
                            <Practice currentProgress={progress[practice._id]} text={practice.name} key={practice._id}>
                                <Quiz tasks={practice.tasks} onQuizCompleted={(answers) => handleQuizCompleted(practice._id, answers)} userResults={recentResults[practice._id]}/>
                            </Practice>
                        ))
                    }
                    </div>
                </div>
                <MessageModal isOpen={modalState.isOpen} message={modalState.message} title="Ваш результат" onClose={handleClose}/>

            </div>
        
    )
}