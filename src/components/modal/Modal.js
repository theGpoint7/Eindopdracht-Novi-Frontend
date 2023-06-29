import React from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

function Modal({ displayModal, setDisplayModal, title, message, navigateTo }) {
    const navigate = useNavigate();

    function modalExitHandler() {
        setDisplayModal(false);
        navigate(navigateTo);
    }

    return (
        <>
            {displayModal && (
                <div className="modal">
                    <div
                        className="overlay"
                        onClick={modalExitHandler}
                    ></div>
                    <div className="modal-content">
                        <h2>{title}</h2>
                        <p>
                            {message}
                        </p>
                        <button
                            className="close-modal"
                            onClick={modalExitHandler}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
