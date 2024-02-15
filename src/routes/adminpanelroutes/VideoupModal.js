import React from 'react'
import PropTypes from 'prop-types';
import './css/VideoupModals.css';

const VideoupModal = ({ isOpen, onClose, status, message }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 id='modal-head' style={{ backgroundColor: status ? '#14a44d' : 'red' }}>{status ? 'Upload Successful!' : 'Upload Failed!'}</h2>
        <p id='modal-up-p'>{message}</p>
      </div>
    </div>
  );
};
VideoupModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    status: PropTypes.bool,
    message: PropTypes.string,
  };

export default VideoupModal