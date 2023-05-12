import React, { useState } from "react";
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
                        onClick={modalExitHandler} // Remove the '()' to pass the function as a reference
                    ></div>
                    <div className="modal-content">
                        <h2>{title}</h2>
                        <p>
                            {message}
                        </p>
                        <button
                            className="close-modal"
                            onClick={modalExitHandler} // Remove the '()' to pass the function as a reference
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
