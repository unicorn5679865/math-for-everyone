import React, {useState} from "react"
import { useQuery } from "../hooks/useQuery";
import LessonModal from "./modals/lesson.modal"



// const CARDS = [
//   {
//     id: 1,
//     link: "https://twitter.com",
//     name: "Функция",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     image: "img/функция2.jpg"
//   },
//   {
//     id: 2,
//     link: "https://twitter.com",
//     name: "Тригонометрия",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     image: "img/Тригонометрия.jpg"
//   },
//   {
//     id: 3,
//     link: "https://twitter.com",
//     name: "Степень с рациональным показателем. Степенная функция",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     image: "img/степенная.jpg"
//   },
//   {
//     id: 4,
//     link: "https://twitter.com",
//     name: "Введение в стереометрию",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     image: "img/стереометрия.jpg"
//   },
//   {
//     id: 5,
//     link: "https://twitter.com",
//     name: "Перпендикулярность прямых и плоскостей",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     image: "img/перпендикулярность.jpg"
//   },
//   {
//     id: 6,
//     link: "https://twitter.com",
//     name: "Параллельность прямых и плоскостей",
//     text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     image: "img/параллельность.jpg"
//   },
// ]


export default function Topics() {
  const [modalState, setModalState] = useState({
    showModal: false,
    selectedTopicId: null,
  });

  const {data} = useQuery("/topics");
  const handleOnClose = () => setModalState({
    showModal: false,
    selectedTopicId: null,
  });

  const handleOpenLessonsModal = (topicId) => {
    setModalState({
      showModal: true,
      selectedTopicId: topicId,
    });
  }

  return (
    <>
      <div className="bg-gradient-to-br from-black via-transparent to-black bg-fixed flex flex-row flex-wrap items-stretch justify-center items-center ">
        {/* cards */}
        {data?.topics.map(({ _id, name, description, img }) => (
          <div className="relative min-h-[230px] m-5 max-w-sm rounded-lg bg-white shadow-lg sm:m-12" key={_id}>
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
                onClick={() => handleOpenLessonsModal(_id)}
                type="button"
                className="bg-primary-orange text-xs font-medium uppercase shadow-[0_4px_9px_-4px_#ff951c] px-5 py-2 text-sm leading-5 rounded font-semibold text-white
                 hover:bg-primary-green hover:shadow-[0_8px_9px_-4px_#10B582] hover:scale-110 duration-300 transition ease-in-out
                 focus:bg-primary-green focus:shadow-[0_8px_9px_-4px_#10B582] active:bg-primary-green ">
                Учить
              </button>
            </div>
          </div>
        ))}

        {modalState.showModal && <LessonModal onClose={handleOnClose} topicId={modalState.selectedTopicId}/>}

      </div>

    </>
  )
}





// проверить цвета,  что такое data-te-ripple-color and data-te-ripple-init
