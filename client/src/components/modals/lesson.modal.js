import { useNavigate } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import Modal from "./modal";


export default function LessonModal({topicId, ...modalProps}) {
    const { data: lessons } = useQuery(`/topics/${topicId}/lessons`);
    const navigate = useNavigate();

    const handleLessonClick = (lessonId) => {
        navigate(`/lesson/${lessonId}`);
    };

    return (
        <Modal {...modalProps}>
            {lessons?.map((lesson) => 
                <button
                    key={lesson._id}
                    className="py-3 mb-3 btn border border-primary-green rounded-lg shadow-lg transition ease-in-out hover:-translate-y-0.5 hover:scale-105 duration-100"
                    onClick={() => handleLessonClick(lesson._id)}
                >
                    {lesson.name}
                </button>
            )}
        </Modal>
    )
}