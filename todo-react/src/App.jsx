import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
    <center class="todo-container">
    <AppName/>
    <AddTodo/>
    <div className="todo-item">
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    </div>
    </center>
    </>
  );
}

export default App;
