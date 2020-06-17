import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList'

const taskList = [
  {
    name: "The Usual Morning Line-Up", tasks: [
      "Sweep 'til the floor's all clean",
      "Polish and wax",
      "Do laundry",
      "Mop and shine-up"
    ]
  },
  {
    name: "After Lunch", tasks: [
      "Puzzles",
      "Darts",
      "Baking"
    ]
  }
]

const openDB = (cb) => {
  const request = window.indexedDB.open('taskListsDB', 3)

  request.onerror = event => {
    console.log('request error:', event)
  }

  request.onupgradeneeded = event => {
    const db = event.target.result

    // Create task_lists if it does not already exist
    if (!db.objectStoreNames.contains('task_lists')) {
      db.createObjectStore('task_lists', { autoIncrement: true })
    } else {
      console.log('task_lists alreaady exists')
    }
  }

  request.onsuccess = event => {
    console.log('success!')
    const db = event.target.result;

    // Clear whatever is currently in task_lists
    const clearObjectStore = (cb) => {
      const transaction = db.transaction('task_lists', 'readwrite')

      const store = transaction.objectStore('task_lists')

      const lists = [];

      // Save the lists before clearing them
      store.openCursor().onsuccess = event => {
        const cursor = event.target.result;
        if (cursor) {
          console.log('cursor.key:', cursor.key);
          const request = store.get(cursor.key);
          request.onsuccess = event => {
            lists.push(event.target.result)
          }
          cursor.continue();
        }
        else {
          console.log('No more entries')
          console.log(lists)
          const request = store.clear();

          request.onsuccess = event => {
            console.log('store cleared')
            cb(lists)
          }

          request.onerror = event => {
            console.error('clearObjectStore error:', event.target.errorCode)
          }
        }
      }

    }

    // Refill the task_lists store 
    const addLists = (lists) => {
      const transaction = db.transaction('task_lists', 'readwrite');

      transaction.oncomplete = event => {
        console.log('All lists added')
      }

      transaction.onerror = event => {
        console.log('transaction failed:', event)
      }

      const objectStore = transaction.objectStore('task_lists');

      lists.forEach(list => {
        const request = objectStore.add(list);
        request.onsuccess = event => {
          console.log('list added:', event.target.result) // The PSK of the added list
        }
      })
      getLists(cb)
    }

    // Fetch the lists from task_lists and pass them to the callback
    const getLists = (cb) => {
      const lists = [];
      const store = db.transaction('task_lists').objectStore('task_lists');

      store.openCursor().onsuccess = event => {
        const cursor = event.target.result;
        if (cursor) {
          console.log('cursor.key:', cursor.key);
          const request = store.get(cursor.key);
          request.onsuccess = event => {
            lists.push(event.target.result)
          }
          cursor.continue();
        }
        else {
          console.log('No more entries')
          cb(lists)
        }
      }
    }

    // addLists(taskList)
    clearObjectStore(addLists);
  }
}


function App() {
  const [input, setInput] = useState('Add a new list')
  const [taskLists, setTaskLists] = useState([])

  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const addTaskList = (event) => {
    event.preventDefault();
    setTaskLists([...taskLists, { name: input, tasks: [] }])
    setInput('')
  }

  useEffect(() => {
    openDB(setTaskLists)
  }, [])

  return (
    <div className="App">
      <h1>Chores</h1>
      {taskLists.map(list => <TaskList key={list.name} list={list} />)}
      <form onSubmit={addTaskList}><input onChange={handleInput} value={input} onClick={() => setInput('')} /></form>
    </div>
  );
}

export default App;
