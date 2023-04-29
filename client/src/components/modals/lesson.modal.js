import { useNavigate } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import Modal from "./modal";

export default function LessonModal({topicId, onClose, title}) {

    const { data: lessons } = useQuery(`/topics/${topicId}/lessons`);
    const navigate = useNavigate();

    const handleLessonClick = (lessonId) => {
        navigate(`/lesson/${lessonId}`);
    };

    return (
        <Modal onClose={onClose} title={title}>
            {lessons?.map((lesson) => 
                <button
                    key={lesson._id}
                    className="py-3 mb-3 btn border border-primary-green rounded-lg shadow-lg transition ease-in-out delay-150 
                                hover:-translate-y-0.5 hover:scale-105 duration-300"
                    onClick={() => handleLessonClick(lesson._id)}>
                    {lesson.name}
                </button>
            )}
        </Modal>
    )
}