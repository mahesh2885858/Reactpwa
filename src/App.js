import "./App.scss";
import NavBar from "./screens/NavBar/NavBar";
import { Routes, Route, useNavigate } from "react-router";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { fireBaseApp } from "./firebase/firebaseConfigue";
import AddTodo from "./screens/Addtodo/AddTodo";
import { useEffect, useState } from "react";
import Test from "./screens/Test/Test";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const todoRef = collection(fireBaseApp, "todos");
  const [todoText, setTodoText] = useState("");
  const [isEditOn, setIsEditOn] = useState(false);
  const [editId, setEditId] = useState("");
  const navigate = useNavigate();
  const changeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const updateTodo = async (id, value) => {
    const userDoc = doc(fireBaseApp, "todos", id);
    await updateDoc(userDoc, { value });
    setEditId("");
    setIsEditOn(false);
    navigate("/");
  };
  const sendTodo = async () => {
    if (isEditOn) {
      console.log("editting....");
      updateTodo(editId, todoText);
      setTodoText("");
    } else {
      if (todoText.trim().length > 3) {
        await addDoc(todoRef, { value: todoText });
        setTodoText("");
      } else {
        return;
      }
    }
  };
  const gotoEditPage = (id, value) => {
    setIsEditOn(true);
    setEditId(id);
    setTodoText(value);
    navigate(`/edit/${id}`);
  };

  const deleteTodo = async (id) => {
    const userDoc = doc(fireBaseApp, "todos", id);
    await deleteDoc(userDoc);
  };
  useEffect(() => {
    const fetchedTodos = async () => {
      setIsLoading(true);
      try {
        const datafetched = await getDocs(todoRef);
        const final = datafetched.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTodos(final);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchedTodos();
  }, []);

  return (
    <div className="App-container">
      <nav className="nav-container">
        <NavBar />
      </nav>
      <div className="main-app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                deleteTodo={deleteTodo}
                todos={todos}
                isLoading={isLoading}
                gotoEditPage={gotoEditPage}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/addtodo"
            element={
              <AddTodo
                todoText={todoText}
                sendTodo={sendTodo}
                changeTodoText={changeTodoText}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <AddTodo
                todoText={todoText}
                sendTodo={sendTodo}
                changeTodoText={changeTodoText}
                isEditOn={isEditOn}
              />
            }
          />
          <Route path="/testuploadimage" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
