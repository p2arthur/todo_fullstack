import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName, emoji }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSignOut = () => {
    console.log("Sign out");
  };

  const handleAddItem = () => {
    console.log("Add item");
    setShowModal(!showModal);
  };

  return (
    <div className="list-header">
      <h1 className="list-header-title">
        {listName}
        <span className="emoji">{emoji}</span>
      </h1>
      <div className="button-container">
        <button className="button button_create" onClick={handleAddItem}>
          ADD NEW
        </button>
        <button className="button button_signout" onClick={handleSignOut}>
          SIGN OUT
        </button>
      </div>
      {showModal ? (
        <Modal modalMode="create" setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default ListHeader;
