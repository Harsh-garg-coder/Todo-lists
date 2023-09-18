import { faEdit, faRefresh, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent, Dispatch, SetStateAction} from "react"
import { listArray } from "../config";

interface TodoCardProps {
    key: string,
    currentTodo: {
        id: string,
        text: string
    },
    setShowDeleteModal: (value: boolean) => void,
    setTodoToDeleteId: (value: string) => void,
    idsOfTodosGettingEdited: string[],
    setIdsOfTodosGettingEdited: Dispatch<SetStateAction<[] | string[]>>,
    newValueOfTodosGettingEdited: null | {[id: string]: {text: string}},
    setNewValueOfTodosGettingEdited: Dispatch<SetStateAction<{
        [id: string]: {
            text: string;
        };
    } | null>>,
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

export default function TodoCard(props: TodoCardProps) {
    const handleSave = () => {
        try {
            props.setTodoData((prevTodoData) => {
                const newTodoData = {...prevTodoData};

                listArray.forEach((currentList) => {
                    newTodoData[currentList] = prevTodoData[currentList].map((currentTodo) => {
                        if(currentTodo.id === props.currentTodo.id) {
                            return {
                                ...currentTodo,
                                text: props.newValueOfTodosGettingEdited?.[props.currentTodo.id].text || ""
                            }
                        }
                        return currentTodo;
                    })
                })

                return newTodoData;
            });

            props.setIdsOfTodosGettingEdited((prev) => {
                return prev.filter((id) => {
                    if(id === props.currentTodo.id) return false;
                    return true;
                })
            });

            props.setNewValueOfTodosGettingEdited((prev) => {
                if(prev === null) return prev;

                const obj = {...prev};
                delete obj[props.currentTodo.id];
                return obj;
            });
            
        } catch(error) {
            console.log(error);
        }
    }

    const handleDelete = () => {
        try {
            props.setTodoToDeleteId(props.currentTodo.id);
            props.setShowDeleteModal(true);
        } catch(error) {
            console.log(error);
        }
    }

    const handleClickOnEditButton = () => {
        try {
            props.setIdsOfTodosGettingEdited((prev) => {
                return [...prev, props.currentTodo.id];
            })
            props.setNewValueOfTodosGettingEdited((prev) => {
                let obj: {[id: string]: {text: string}} = {} as {[id: string]: {text: string}};

                if(prev !== null) {
                    obj = {...prev};
                }
                
                obj[props.currentTodo.id] = {
                    text: props.currentTodo.text
                }

                return obj;
            })
        } catch(error) {
            console.log(error);
        }
    }

    const handleClickOnRefreshButton = () => {
        try {
            props.setIdsOfTodosGettingEdited((prev) => {
                return prev.filter((todoId) => {
                    if(todoId === props.currentTodo.id) {
                        return false;
                    }
                    return true;
                })
            });

            props.setNewValueOfTodosGettingEdited(null);
        } catch(error) {
            console.log(error);
        }
    }

    const handleChangeInTodoText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        try {
            props.setNewValueOfTodosGettingEdited((prev) => {
                if(prev === null) return prev;

                const obj = {...prev};
                obj[props.currentTodo.id] = {text: e.target.value};

                return obj; 
            })
        } catch(error) {
            console.log(error);
        }
    }
    const isEditing = props.idsOfTodosGettingEdited.indexOf(props.currentTodo.id) !== -1;

    return (
        <div 
            className = "bg-black-100 py-3 px-4 w-11/12 cursor-pointer rounded-md"  
        >
            {
                isEditing ? 
                <textarea
                    value = {props.newValueOfTodosGettingEdited?.[props.currentTodo.id].text}
                    onChange = {handleChangeInTodoText}
                    className = "w-full outline-none bg-transparent border border-white-300 rounded-md px-2 py-1"
                />
                :
                <span>{props.currentTodo.text}</span>
            }

            <div className = "my-1 flex gap-2 mt-1">
                {
                    isEditing ? 
                    <div className = "flex gap-2">
                        <button 
                            onClick = {handleSave}
                        >
                            <FontAwesomeIcon icon = {faSave} size = "lg" style = {{color: "green"}} />
                        </button>
                        <button 
                            onClick = {handleClickOnRefreshButton}
                        >
                            <FontAwesomeIcon icon = {faRefresh} size = "lg" style = {{color: "yellow"}} />
                        </button>
                    </div>
                    :
                    <button 
                        onClick = {handleClickOnEditButton}
                    >
                        <FontAwesomeIcon icon = {faEdit} size = "lg" style = {{color: "orange"}} />
                    </button>
                }
                <button>
                    <FontAwesomeIcon 
                        onClick = {handleDelete} 
                        icon = {faTrash} size = "lg" style = {{color: "red"}} />
                </button>
            </div>
        </div>
    )
}