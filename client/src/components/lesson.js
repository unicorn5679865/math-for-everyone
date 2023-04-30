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
import { ExpandablePanel } from "./common/ExpandablePanel";

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
            <div className="sm:flex justify-start mb-3 h-full"> 
                <div className="theory flex flex-col ml-4  sm:w-7/12 text-left">
                    <div className="mt-3 py-4 ">
                        <p className="text-xl border-b-2 ">Теория</p>
                    </div>
                    <div className="scrollbar overflow-y-scroll  ">
                        <Document className="w-full" file={pdf} onLoadSuccess={handleDocumentLoadSuccess}>
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
                    <div className="overflow-y-scroll">
                    {
                        lesson?.practices.map(practice => (
                            <div className="practice-container flex flex-col mb-4" key={practice._id}>
                                <ExpandablePanel text={practice.name} className="bg-primary-green">
                                    <Quiz tasks={practice.tasks} onQuizCompleted={(answers) => handleQuizCompleted(practice._id, answers)} />
                                </ExpandablePanel>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <MessageModal isOpen={modalState.isOpen} message={modalState.message} title="Ваш результат" onClose={handleClose}/>

            </div>
        
    )
}