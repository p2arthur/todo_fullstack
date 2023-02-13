import ListItem from "./components/ListItem";
import ListHeader from "./components/ListHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const {
    data: dataTodo,
    isLoading: isLoadingtoDo,
    error: errorTodo,
  } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(dataTodo);

  //Sort by date
  const sortedTodos = dataTodo?.sort((a, b) => {
    new Date(a.date) - new Date(b.date);
  });

  //Render the sorted Todos
  const renderedTodos = sortedTodos?.map((todo) => {
    return <ListItem key={todo.id} todo={todo} />;
  });

  return (
    <div className="app">
      <ListHeader listName="Vaction ticks" emoji="🏖" />
      {renderedTodos}
    </div>
  );
};

export default App;
