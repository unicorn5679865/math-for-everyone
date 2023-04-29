export default function Modal({onClose, children, title}) {

    const handleOnClose = (e) => {
        if (e.target.id === 'container') {
            onClose();
        }
    };

    return (
        <>
            <div 
                id='container'
                onClick={handleOnClose} 
                className="flex flex-col absolute overflow-y-scroll overflow-x-hidden inset-0 bg-black bg-opacity-30 backdrop-blur-sm md:justify-center items-center ">
                    <div className=" bg-white w-2/4 mt-10 px-6 py-3 rounded-lg ">
                        <div className="flex flex-col sm:flex-inline justify-between modal-header rounded text-center">
                            <h3 className="font-semibold text-xl">{title}</h3>
                            <button onClick={onClose} className="font-extralight hover:underline underline-offset">Закрыть</button>
                        </div>
                        <div className="flex flex-col my-3">
                            {children}
                        </div>
                    </div>
            </div>
        </>
    )
}