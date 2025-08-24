// Todo.js
// Fetch todos from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/todos?_limit=50")
  .then(res => res.json())
  .then(todos => {
    // 1. Get a list of user 3's todos
    const user3Todos = todos.filter(todo => todo.userId === 3);
    console.log("📝 User 3's Todos:", user3Todos);

    // 2. Find the number of incomplete tasks for user 3
    const incompleteUser3 = user3Todos.filter(todo => !todo.completed).length;
    console.log("❌ User 3's Incomplete Tasks:", incompleteUser3);
  })
  .catch(err => console.error("Error fetching todos:", err));
