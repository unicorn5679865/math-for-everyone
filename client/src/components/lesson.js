import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useParams } from "react-router";
import { useQuery } from "../hooks/useQuery";

import Quiz from "./quiz";
import { api } from "../api/api";
import MessageModal from "./modals/message.modal";
import pdf from "./pdf/kursovaya_rabota.pdf"

export default function Lesson() {

    const { lessonId } = useParams();
    const { data: lesson } = useQuery(`/lessons/${lessonId}`);
    const [ modalState, setModalState] = useState({isOpen: false, message: ""})


    const [numPages, setNumPages] = useState(null);

    const handleDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleQuizCompleted = async (practiceId, answers) => {
            const res = await api.validateAnswers(practiceId, answers);
            setModalState({isOpen: true, message: res.data.result })
    };

    const handleClose = () => {
        setModalState({isOpen: false, message: ""})
    };

    return (
            <div className="sm:flex justify-start overflow-hidden mb-3"> 
                <div className="theory flex flex-col mx-10  sm:w-6/12 h-[700px] text-left">
                    <div className="mt-3 py-4  ">
                        <p className="text-xl font-bold underline underline-offset-4">Теория</p>
                    </div>
                    <div className="scrollbar border-2 border-solid h-[650px] overflow-y-scroll  ">
                        <Document className="w-full" file={pdf} onLoadSuccess={handleDocumentLoadSuccess}>
                            {
                                Array(numPages).fill().map((_, i) =>
                                    <Page key={i} pageNumber={i+1} />
                                )
                            }
                        </Document>  
                    </div>
                </div>
                <div className="practice flex flex-col mx-10 sm:mr-10 sm:w-6/12 h-[700px] text-left">
                    {
                        lesson?.practices.map(practice => (
                            <div className="practice-container" key={practice._id}>
                                <div className="mt-3 py-4 border-solid ">
                                    <p className="text-xl font-bold underline underline-offset-4">{practice.name}</p>
                                </div>
                                <div className="scrollbar border-2 border-solid h-[650px] overflow-y-scroll  ">
                                    <Quiz tasks={practice.tasks} onQuizCompleted={(answers) => handleQuizCompleted(practice._id, answers)} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                {modalState.isOpen && <MessageModal message={modalState.message} onClose={handleClose}/>}

            </div>
        
    )
}