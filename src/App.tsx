import { FormEvent, useState } from "react";
import { data, listArray } from "./config"
import DeleteModal from "./components/DeleteModal";
import { v4 as uuidv4 } from 'uuid';
import ListCard from "./components/ListCard";

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todoData, setTodoData] = useState(data);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todoToDeleteId, setTodoToDeleteId] = useState("");
  const [idsOfTodosGettingEdited, setIdsOfTodosGettingEdited] = useState<[] | string[]>([]);
  const [newValueOfTodosGettingEdited, setNewValueOfTodosGettingEdited] = useState<null | {[id: string]: {text: string}}>(null);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if(newTodoText.trim() === "") {
        return;
      }

      setTodoData((prev) => {
        const newTodoList = [...prev.todo];

        newTodoList.push({
          id: uuidv4(),
          text: newTodoText
        });

        return {
          ...prev,
          todo: newTodoList
        };
      });

      setNewTodoText("");
    } catch(error) {
      console.log(error);
    }
  }

  const deleteTodo = () => {
    try {
      setTodoData((prevTodoData) => {
        const newTodoData = prevTodoData;

        listArray.forEach((currentList) => {
          newTodoData[currentList] = prevTodoData[currentList].filter((currentTodo) => {
            if(currentTodo.id === todoToDeleteId) {
              return false;
            }
            return true;
          });
        });

        return newTodoData;
      });
      setShowDeleteModal(false);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
      <div className = "bg-black-400 text-white-200 min-h-screen pt-12">
        <form 
          onSubmit = {handleSubmit} 
          className = "w-11/12 max-w-[700px] flex flex-col items-center sm:flex-row sm:justify-center gap-5 mb-12 border-2 border-white-300 mx-auto p-5 rounded-md"
        >
          <input 
            className = "w-11/12 sm:w-[400px] py-3 px-5 text-black-400 outline-0 rounded-md" 
            type = "text"
            value = {newTodoText}
            onChange = {(e) => setNewTodoText(e.target.value)}
          />

          <button 
            className = "bg-white-100 text-black-400 py-3 px-5 rounded-md font-semibold" 
            type = "submit"
          >Create Todo</button>
        </form>
        
        <div className = "flex justify-center gap-5 w-11/12 mx-auto flex-wrap items-start">
          {
            listArray.map((currentList, index) => {
              return (
                <ListCard 
                  heading = {currentList.substring(0, 1).toUpperCase() + currentList.substring(1)}
                  cardCount = {data[currentList].length}
                  key = {"card_" + index}
                  cardsData = {todoData[currentList]}
                  setShowDeleteModal = {setShowDeleteModal}
                  setTodoToDeleteId = {setTodoToDeleteId}
                  idsOfTodosGettingEdited = {idsOfTodosGettingEdited}
                  setIdsOfTodosGettingEdited = {setIdsOfTodosGettingEdited}
                  newValueOfTodosGettingEdited = {newValueOfTodosGettingEdited}
                  setNewValueOfTodosGettingEdited = {setNewValueOfTodosGettingEdited}
                  setTodoData = {setTodoData}
                />
              )
            })
          }
        </div>

        {
            showDeleteModal && 
            <DeleteModal 
              deleteTodo = {deleteTodo}
              closeModal = {() => setShowDeleteModal(false)}
            />
        }
      </div>
  )
}

export default App
