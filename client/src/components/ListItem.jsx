import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItem = ({ todo }) => (
  <li className="list-item">
    <div className="info-container">
      <TickIcon />
      <p className="task-title">{todo.title}</p>
      <ProgressBar />
    </div>
    <div className="button-container">
      <button className="button edit">EDIT</button>
      <button className="button delete">DELETE</button>
    </div>
  </li>
);

export default ListItem;
