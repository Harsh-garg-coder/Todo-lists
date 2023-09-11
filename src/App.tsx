import { FormEvent, useState } from "react";
import Card from "./components/Card"
import { data, listArray } from "./config"

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoData, setTodoData] = useState(data);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      if(newTodo.trim() === "") {
        return;
      }

      setTodoData((prev) => {
        const newTodoList = [...prev.todo];

        newTodoList.push(newTodo);

        return {
          ...prev,
          todo: newTodoList
        };
      });

      setNewTodo("");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className = "bg-black-400 text-white-200 min-h-screen pt-12">
      <form 
        onSubmit = {handleSubmit} 
        className = "flex flex-col items-center sm:flex-row sm:justify-center gap-5 mb-12"
      >
        <input 
          className = "w-11/12 sm:w-[400px] py-3 px-5 text-black-400 outline-0 rounded-md" 
          type = "text"
          value = {newTodo}
          onChange = {(e) => setNewTodo(e.target.value)}
        />

        <button 
          className = "w-1/2 sm:w-auto bg-white-100 text-black-400 py-3 px-5 rounded-md font-semibold" 
          type = "submit"
        >Create Todo</button>
      </form>
      
      <div className = "flex justify-center gap-5 w-11/12 mx-auto flex-wrap">
        {
          listArray.map((currentList, index) => {
            return (
              <Card 
                heading = {currentList.substring(0, 1).toUpperCase() + currentList.substring(1)}
                cardCount = {data[currentList].length}
                key = {"card_" + index}
                cardsData = {todoData[currentList]}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App
