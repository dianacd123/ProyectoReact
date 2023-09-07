import { useState } from "react";

function App() {
  
  const [todo, setTodo]  = useState("");
  const [todoList, setTodoList] = useState ([]);
  
  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList,{ todoName: todo}]);
    setTodo("");
  }


  return (
    <>
    <div className="">
      <div className="bg-gradient-to-t from-purple-500 to-purple-700 
      w-full h-screen flex items-center">
        <div className="backdrop-blur-lg backdrop-filter bg-white bg-opacity-30 
                      rounded-lg shadow-lg w-[500px] mx-auto p-5 text-center">
          <h1 className="text-gray-900 text-5xl font-bold mb-8">To-do list</h1>
          <form onSubmit={handleForm}>
            <input required className="border-2 rounded-lg bg-purple-100 border-purple-700 w-3/4 p-3 
            placeholder:text-gray-500 mb-5" 
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add To-do" 
            type="text" />
            <span><button className="ml-5  text-gray-200  py-3 px-4 bg-purple-700 rounded-lg" type="submit">Add</button></span>
          </form>
          <div className="todo-show-area">
            <ul>

              {todoList.map((singleTodo, index) => {
                  return (<li className="bg-purple-100 text-gray-700 py-4 px-5
                            text-lg rounded-lg mx-4 flex justify-between mb-2"
                            key={index}>{singleTodo.todoName}{" "}
                            <span className="">✖️</span>
                            </li>);
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
