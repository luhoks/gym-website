import React, { useState } from 'react';
import logo from '../../Assets/samplelogo.png';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="login-form">
          <div className="login-logo-container">
            <img src={logo} alt="gym" className="login-logo" />
          </div>
          <div className="login-fields">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Log in</button>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            <a href="/register" className="create-account">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
