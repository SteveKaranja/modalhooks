import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => {setOpenModal(false);}}>X</button>
        </div>
        <div className="title">
          <h1>An important choice awaits!</h1>
        </div>
        <div className="body">
          <p> You can either exit the modal, or continue to our website.</p>
        </div>
        <div className="footer">
          <button onClick={() => {setOpenModal(false);}} id="cancelBtn">Cancel</button>
          <a href="https://virtualoffice.co.ke" target="_blank">
            <button>Continue</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;