const ListHeeader = ({ listName, emoji }) => {
  const handleSignOut = () => {
    console.log("Sign out");
  };

  const handleAddItem = () => {
    console.log("Add item");
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
    </div>
  );
};

export default ListHeeader;
