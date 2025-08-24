import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

 const client = generateClient<Schema>()
 async function sayHello() {
  console.log("Button clicked here");
  console.log(client);
  const res = await client.queries.sayHello({ name: "Shadab" });
  console.log(res.data); // should log "Hello, Shadab!"
 }

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <main>
      <button onClick={sayHello}>Say Hello</button>
      {/* <h1>My new todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div> */}
    </main>
  );
}

export default App;
