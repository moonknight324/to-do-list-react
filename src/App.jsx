import { useState } from 'react'
import './App.css'

function App() {
  const [todo,setTodo] = useState([]);
  const [task,setTask] = useState("");

  const changeTask = (e) =>{
    setTask(e.target.value);
  }

  function addTask(){
    setTodo([...todo,task]);
    setTask('')
  }

  function editTask(index, e){
    let tempArr = [...todo];
    for(let i = 0; i < tempArr.length; i++){
      if(i === index){
        tempArr[i] = e.target.value;
      }
    }

    setTodo(tempArr)
  }

  function deleteTask(index){
    let tempArr = [...todo];
    let tempArr2 = [];
    for(let i = 0; i < tempArr.length; i++){
      if(i === index){
        continue
      }
      else{
        tempArr2.push(tempArr[i])
      }
    }
    setTodo(tempArr2)
  }

  return (
    <>
       <div className='main'>
        <div className='inp'>
          <input type="txt" value={task} onChange={(e)=>changeTask(e)}/>
          <button type='submit' onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
        {todo.map((todo1, index)=>{
          return(
            <div key={index}>
              <input type="txt" value={todo1} onChange={(e)=>editTask(index, e)}/>
              <button type='submit' onClick={()=>deleteTask(index)}>Delete</button>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}

export default App
