const taskListsDB = () => {

const dbName = "taskListsDB"
const dbStoreName = 'task_lists'

var db;

const openDB = () => {
    console.log('opening db...');
    const request = indexedDB.open(dbName);
    
    request.onerror = event => {
        console.log('request failed:', event.target.errorCode)
    }

    request.onsuccess = event => {
        db = event.target.result
        console.log('db opened', db)
}

    request.onupgradeneeded = event => {
        console.log('onupgrade...')
    
        const store = event.currentTarget.result.createObjectStore(dbStoreName, {autoIncrement: true});
    
        store.createIndex('name', 'name', {unique: false});
    
        console.log('upgraded:', db)
    };
}

const getObjectStore = (store_name, mode) => {
    const transaction = db.transaction(store_name, mode);

    return transaction.objectStore(store_name)
}

const clearObjectStore = () => {
    const store =  getObjectStore(dbStoreName, 'readwrite');

    const request = store.clear();

    request.onsuccess = event => {
        console.log(dbStoreName, 'store cleared')
    }

    request.onerror = event => {
        console.error('clearObjectStore', event.target.errorCode)
    }
}

const getBlob = (key, store, success_callback) => {
    const request = store.get(key);

    request.onsuccess = event => {
        const value = event.target.result;
        if(value) success_callback(value.blob)
    }
}

const addCustomers = (customerData) => {
    const transaction = db.transaction(dbStoreName, 'readwrite');
    
    transaction.oncomplete = event => {
        console.log('transaction successful')
    }
    
    transaction.onerror = event => {
        console.log('transaction failed:', event)
    }
    
    const objectStore = transaction.objectStore('customers');
    
    customerData.forEach(customer => {
        const request = objectStore.add(customer);
        request.onsuccess = event => {
            console.log('customer added:', event.target.result)
        }
    })
}

const getCustomers = (id) => {
    const store = getObjectStore(dbStoreName, 'readonly')

    const request = store.get(id)

    request.onerror = event => {
        console.log('getCustomers error:', event.target.errorCode)
    }

    request.onsuccess = event => {
        console.log('getCustomers success:', event.target.result)
    }
} 

const getLists = () => {
    const store = db.transaction(dbStoreName).objectStore(dbStoreName);

    store.openCursor().onsuccess = event => {
        const cursor = event.target.result;
        if (cursor) {
            console.log(cursor);
            cursor.continue();
        }
        else {
            console.log('No more entries')
        }
    }
}

openDB();

}
export default taskListsDB


