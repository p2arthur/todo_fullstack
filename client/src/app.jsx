import ListItem from "./components/ListItem";
import ListHeader from "./components/ListHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} emoji={"🏖"} />
      <div>{data.length} users fetched</div>
    </div>
  );
};

export default App;
