import Modal from "./modal";

export default function MessageModal({message, ...modalProps}) {

    return (
        <Modal {...modalProps}>
           {message}
        </Modal>
    )
}