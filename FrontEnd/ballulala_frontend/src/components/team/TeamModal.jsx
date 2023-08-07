import React from "react";
import './TeamSetting.css';

const TeamModal = ({ title, isOpen, onClose, children, onSubmit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="ball-modal start-modal">
      <div className="ball-modal-content">
        <div className="ball-modal-title modal-element">
          <div>{title}</div>
        </div>

        <div className="modal-element">{children}</div>

        <div className="modal-btns">
          <button className="modal-no-btn" type="button" onClick={onClose}>
            취소
          </button>

          <button
            className="modal-yes-btn"
            type="button"
            onClick={() => {
              onSubmit && onSubmit();
              onClose();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
