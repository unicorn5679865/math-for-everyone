import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "../../hooks/useQuery";

export default function LessonModal({topicId, onClose, name}) {
console.log(topicId);

    const handleOnClose = (e) => {
        if (e.target.id === 'container') {
            onClose();
        }
    };

    const { data: lessons } = useQuery(`/topics/${topicId}/lessons`);
    const navigate = useNavigate();

    const handleLessonClick = (lessonId) => {
        navigate(`/lesson/${lessonId}`);
    };

    console.log(lessons);


    return (
        <>
            <div 
                id='container'
                onClick={handleOnClose} 
                className="flex flex-col absolute overflow-y-scroll overflow-x-hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm md:justify-center items-center ">
                    <div className=" bg-white w-2/4 mt-10 px-6 py-3 rounded-lg ">
                        <div className="flex flex-col sm:flex-inline justify-between modal-header rounded text-center">
                            <h3 className="font-semibold text-xl">{name}</h3>
                            <button onClick={onClose} className="font-extralight hover:underline underline-offset">Закрыть</button>
                        </div>
                        <div className="flex flex-col my-3">
                            {
                                lessons?.map((lesson) => 
                                    <button
                                        key={lesson._id}
                                        className="py-3 mb-3 btn border border-primary-green rounded-lg shadow-lg transition ease-in-out delay-150 
                                                    hover:-translate-y-0.5 hover:scale-105 duration-300"
                                        onClick={() => handleLessonClick(lesson._id)}>
                                        {lesson.name}
                                    </button>
                                )
                            }
                        </div>
                    </div>
            </div>
        </>
    )
}