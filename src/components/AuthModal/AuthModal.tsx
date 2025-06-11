import React from 'react';
import styles from './AuthModal.module.css';
import {type ModalType} from './AuthModal.types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: ModalType;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, modalType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>{modalType === 'signup' ? 'Sign Up' : 'Log In'}</h2>
        <form>
          {modalType === 'signup' && (
            <input type="text" placeholder="Username" required />
          )}
          <input
            type="email"
            placeholder={modalType === 'signup' ? 'Email' : 'Your Email'}
            required
          />
          <input type="password" placeholder="Password" required />
          <button type="submit">{modalType === 'signup' ? 'Register' : 'Login'}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;