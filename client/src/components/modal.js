import React from "react";

export default function Modal({visible, onClose}) {

    const handleOnClose = (e) => {
        if (e.target.id === 'container')
        onClose();
    };

    if (!visible) return null;  

    return (
        <>
        <div 
            id='container'
            onClick={handleOnClose} 
            className="flex flex-col fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white w-2/4">
                    <div className="flex flex-inline justify-between modal-header p-2 rounded text-center">
                        <h3 className="font-semibold">Название раздела</h3>
                        <button onClick={onClose} className="font-extralight hover:underline underline-offset">Закрыть</button>
                    </div>
                    <div className="flex flex-col my-3">
                        <button className="py-2 mb-1 mx-3 btn border-y border-primary-green "><a href="/">тут</a></button>
                        <button className="py-2 mb-1 mx-3 btn border-y border-primary-green"><a href="/">там</a></button>
                        <button className="py-2 mb-1 mx-3 btn border-y border-primary-green"><a href="/">здесь</a></button>
                    </div>
                </div>
        </div>
        
        </>
    )
}