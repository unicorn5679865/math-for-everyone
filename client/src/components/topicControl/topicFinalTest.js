import React, {useState} from "react";
import { useParams } from "react-router";
import { Practice } from "../common/Practice";
import Quiz from "../quiz";
import { useQuery } from "../../hooks/useQuery";
import { api } from "../../api/api";
import MessageModal from "../modals/message.modal";


export default function TopicFinalTest() {
    const { topicId } = useParams();
    
    const {data: practice} = useQuery(`/topics/${topicId}/final-practice`)

    const handleQuizCompleted = async (practiceId, answers) => {
        const res = await api.validateAnswers(practiceId, answers);
        setModalState({isOpen: true, message: res.data.result });
        console.log(res);
    };

    const [ modalState, setModalState] = useState({isOpen: false, message: ""})

    const handleClose = () => {
        setModalState({isOpen: false, message: ""})
    };

    return (
        <>
        <div className="mb-3 h-full w-full p-5 overflow-y-scroll">
            {practice ? 
                <Practice text={practice.name} defaultOpen={true}>
                    <Quiz tasks={practice.tasks} onQuizCompleted={(answers) => handleQuizCompleted(practice._id, answers)} />
                </Practice>
                : 'Loading...'
            }
        </div>
        <MessageModal isOpen={modalState.isOpen} message={modalState.message} title="Ваш результат" onClose={handleClose}/>
        </>
    )
}