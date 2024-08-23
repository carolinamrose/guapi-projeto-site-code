import Styles from "./modal.module.scss";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className={Styles.modal__background}> 
      <div className={Styles.modal__container}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
