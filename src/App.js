import "./App.css";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <div className="bloc">
        <Footer />
        <VisibleTodoList />
      </div>
    </div>
  );
}

export default App;
