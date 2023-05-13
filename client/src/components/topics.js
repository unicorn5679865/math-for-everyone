import React, {useState} from "react"
import { useQuery } from "../hooks/useQuery";
import LessonModal from "./modals/lesson.modal"


export default function Topics() {
  const [modalState, setModalState] = useState({
    showModal: false,
    selectedTopicId: null,
    selectedName: "",
  });

  const {data} = useQuery("/topics");

  const handleClose = () => setModalState({
    showModal: false,
    selectedTopicId: null,
    selectedName: "",
  });

  const handleOpenLessonsModal = (topicId, topicName) => {
    setModalState({
      showModal: true,
      selectedTopicId: topicId,
      selectedName: topicName,
    });
  };

  return (
      <div className="relative bg-gradient-to-br from-black via-transparent to-black bg-fixed flex flex-row flex-wrap items-center justify-center items-center grow">
        {/* cards */}
        {data?.topics.map(({ _id, name, description, img }) => (
          <div className="relative h-[230px] m-5 max-w-sm rounded-lg bg-white shadow-lg sm:m-12" 
               key={_id}
          >
            <img
              className="h-full w-full absolute rounded-lg opacity-50  "
              src={`img/${img}`}
              alt={name}
            />
            <div className="relative h-full flex flex-column flex-wrap justify-center items-center p-[5%]">
              <h5
                className="text-xl font-medium leading-tight text-center sm:mb-6 ">
                {name}
              </h5>
              <p className="mb-4 text-base text-neutral-600 text-center ">
                {description}
              </p>
              <button
                onClick={() => handleOpenLessonsModal(_id, name)}
                type="button"
                className="bg-primary-orange uppercase shadow-[0_4px_9px_-4px_#ff951c] px-5 py-2  leading-5 rounded font-semibold text-white
                 hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] hover:scale-110 duration-300 transition ease-in-out
                 focus:bg-primary-green focus:shadow-[0_8px_9px_-4px_#10B582] active:bg-primary-green ">
                Учить
              </button>
            </div>
          </div>
        ))}
        
        <LessonModal isOpen={modalState.showModal} onClose={handleClose} topicId={modalState.selectedTopicId} title={modalState.selectedName} />
      </div>
  )
}





// проверить цвета,  что такое data-te-ripple-color and data-te-ripple-init
