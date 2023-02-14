import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";
import { useState } from "react";
import Modal from "./Modal";

const ListItem = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditItem = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <li className="list-item">
        <div className="info-container">
          <TickIcon />
          <p className="task-title">{todo.title}</p>
          <ProgressBar />
        </div>
        <div className="button-container">
          <button className="button edit" onClick={handleEditItem}>
            EDIT
          </button>
          <button className="button delete">DELETE</button>
        </div>
      </li>
      {showModal ? (
        <Modal modalMode="edit" setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default ListItem;
