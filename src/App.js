import React, {useState} from 'react';
import TaskList from './components/TaskList'
import request from './db/taskLists'


function App() {
  const [input, setInput] = useState('Add a new list')
  const [taskLists, setTaskLists] = useState(['The Usual Morning Line-up', 'After Lunch'])

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const addTaskList = (event) => {
    event.preventDefault();
    setTaskLists([...taskLists, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Chores</h1>
      {taskLists.map(list => <TaskList key={list} listName={list} />)}
      <form onSubmit={addTaskList}><input onChange={handleInput} value={input} onClick={() => setInput('')} /></form>
    </div>
  );
}

export default App;
