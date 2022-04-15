import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Hey, ever heard of a modal?</h1>
      <p>A modal is a content box that is displayed on top of all other contents, while putting an overlay.</p>
      <p>By Stephen Karanja</p>
      <p><a href="https://linkedin.com/in/stevekaranja" target="_blank">Linkedin</a> | <a href="https://virtualoffice.co.ke" target="_blank">Virtual Office Point</a> | <a href="https://stevekaranja.medium.com" target="_blank">Medium</a></p>
      <button className="openModalBtn" onClick={() => {setModalOpen(true)}}>
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
