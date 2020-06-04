import React from 'react';
import TaskList from './components/TaskList'


function App() {
  

  return (
    <div className="App">
      <h1>Chores</h1>
      <TaskList listName={'The Usual Morning Line-up'} />
      <TaskList listName={'After Lunch'} />
    </div>
  );
}

export default App;
