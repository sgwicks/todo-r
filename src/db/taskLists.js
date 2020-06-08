let db;
const request = window.indexedDB.open('taskLists');

request.onerror = event => {
    console.log('request failed:', event.target.errorCode)
}

request.onsuccess = event => {
    db = event.target.result
    console.log(db)
}

export default request