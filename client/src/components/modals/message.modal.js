import { useNavigate } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import Modal from "./modal";

export default function MessageModal({message, ...modalProps}) {

    return (
        <Modal {...modalProps}>
           {message}
        </Modal>
    )
}