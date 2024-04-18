/** get data from mockapi */

fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})

// post data

const newTask = {
   content: 'Check out mockapi.io',
   completed: false,
 };
 
 fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
   method: 'POST',
   headers: {'content-type':'application/json'},
   // Send your data in the request body as JSON
   body: JSON.stringify(newTask)
 }).then(res => {
   if (res.ok) {
       return res.json();
   }
   // handle error
 }).then(task => {
   // do something with the new task
 }).catch(error => {
   // handle error
 })
