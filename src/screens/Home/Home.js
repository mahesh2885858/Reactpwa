import Todo from "../../components/Todos/Todos";
import "./home.scss";
import LoadingSpinner from "../../components/loader/LoadingSpinner";
const Home = ({ gotoEditPage, todos, isLoading, deleteTodo }) => {
  return (
    <div className="home-container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Todo
          gotoEditPage={gotoEditPage}
          deleteTodo={deleteTodo}
          todos={todos}
        />
      )}
    </div>
  );
};

export default Home;
