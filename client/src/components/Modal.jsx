import { useState } from "react";

const Modal = ({ modalMode, setShowModal }) => {
  const editMode = modalMode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleClose = (event) => {
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("close-button")
      ? setShowModal(false)
      : null;
  };

  return (
    <div className="overlay" name="overlay" onClick={handleClose}>
      <div className="modal">
        <div className="form-title-container">
          <h3 className="">Let's {modalMode} your task</h3>
          <button className="close-button" onClick={handleClose}>
            x
          </button>
        </div>

        <form className="">
          <input
            required
            type="text"
            maxLength={30}
            placeholder="Your task"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="range">Slide to select your progress</label>
          <input
            required
            type="range"
            id="range"
            min={0}
            max={100}
            name="progress"
            value={data.value}
            onChange={handleChange}
          />
          <br />
          <input className={modalMode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
