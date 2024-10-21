import React from 'react';
import Modal from 'react-modal';
import './ConfirmDeleteModal.css'; // Ensure the CSS file is imported

Modal.setAppElement('#root'); // Ensure accessibility

const ConfirmDeleteModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Delete"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Are you sure you want to delete this post?</h2>
      <div className="modal-buttons">
        <button className="modal-button modal-button-confirm" onClick={onConfirm}>Delete</button>
        <button className="modal-button modal-button-cancel" onClick={onRequestClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
