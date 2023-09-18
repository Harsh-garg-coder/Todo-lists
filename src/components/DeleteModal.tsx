// import { useContext } from "react";
import Overlay from "./Overlay";
// import { DeleteModalContext } from "../context/deleteModalContext";

interface DeleteModalProps {
    deleteTodo : () => void,
    closeModal : () => void
}

export default function DeleteModal(props: DeleteModalProps) {

    return (
        <Overlay closeModal = {props.closeModal}>
            <div 
                onClick = {(e) => e.stopPropagation()}
                className = "w-11/12 max-w-xs bg-white-100 p-5 rounded-md text-black-400"
            > 
                <h1>Are you sure that you want to delete this Todo?</h1>
                <div className = "flex justify-center items-center gap-3 mt-3">
                    <button 
                        className = "w-1/2 p-2 sm:w-1/3 bg-red-500 rounded-md text-white-100"
                        onClick = {props.deleteTodo}
                    >Yes</button>
                    <button 
                        className = "w-1/2 p-2 sm:w-1/3 bg-black-100 rounded-md text-white-100"
                        onClick = {props.closeModal}
                    >No</button>
                </div>
            </div>
        </Overlay>
    )
}