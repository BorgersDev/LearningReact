import './App.css';
import { useState } from 'react'
import { Task } from './Task'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1 ,
      taskName: newTask,
      isCompleted: false,
    };
    setTodoList([...todoList, task])
  };
    const deleteTask = (ID) => {
    setTodoList(todoList.filter((task) => task.id !== ID));
  }; 
    const completeTask = (ID) => {
      setTodoList(todoList.map((task) => {
        if (task.id === ID){
          return {...task, isCompleted : true};
        } else {
          return task;
        }
      }))
    };
   
  return ( 
  <div className="App">
    <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={addTask}>➕</button>
    </div>
    <div className='list'>
      {todoList.map((task) => {
        return <Task  taskName={task.taskName} completeTask={completeTask} isCompleted={task.isCompleted} id={task.id} deleteTask={deleteTask} />;
      })}
    </div>
  </div>
  );
}

export default App;
   