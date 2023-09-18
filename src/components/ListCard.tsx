import { Dispatch, SetStateAction } from "react"
import TodoCard from "./TodoCard"

interface ListCardProps {
    heading: string,
    cardCount: number,
    key: string,
    cardsData: {id: string, text: string}[],
    setShowDeleteModal: (value: boolean) => void,
    setTodoToDeleteId: (value: string) => void
    idsOfTodosGettingEdited: string[],
    setIdsOfTodosGettingEdited: Dispatch<SetStateAction<[] | string[]>>
    newValueOfTodosGettingEdited: null | {[id: string]: {text: string}}
    setNewValueOfTodosGettingEdited: Dispatch<SetStateAction<{
        [id: string]: {
            text: string;
        };
    } | null>>
    setTodoData: Dispatch<SetStateAction<{
        todo: {
            id: string;
            text: string;
        }[];
        inprogress: {
            id: string;
            text: string;
        }[];
        done: {
            id: string;
            text: string;
        }[];
    }>>
}

export default function ListCard(props: ListCardProps) {
    return (
        <div 
            className = "w-11/12 md:w-[45%] lg:w-[31%] bg-black-300 rounded-md shadow-md"
        >
            <div className = "flex gap-3 bg-black-200 py-3 px-4 rounded-md items-center">
                <span>{props.heading}</span>
                <span className = "flex justify-center items-center bg-white-200 text-black-400 text-xs w-4 h-4 rounded-full">
                    {props.cardCount}
                </span>
            </div>

            <div className = "flex flex-col items-center gap-3 py-5">
                {
                    props.cardsData.map((currentTodo, index) => {
                        return (
                            <TodoCard
                                key = {props.heading + "_card_" + index}
                                currentTodo = {currentTodo}
                                setShowDeleteModal = {props.setShowDeleteModal}
                                setTodoToDeleteId = {props.setTodoToDeleteId}
                                idsOfTodosGettingEdited = {props.idsOfTodosGettingEdited}
                                setIdsOfTodosGettingEdited = {props.setIdsOfTodosGettingEdited}
                                newValueOfTodosGettingEdited = {props.newValueOfTodosGettingEdited}
                                setNewValueOfTodosGettingEdited = {props.setNewValueOfTodosGettingEdited}
                                setTodoData = {props.setTodoData}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}