import { createPortal } from "react-dom";

const NotificationModal = ({ render, message }) => {
  return createPortal(
    <div className="fixed top-4 right-4 w-[300px] min-h-[75px] flex z-[20] rounded-md overflow-hidden translate-x-[100px] animate-sneakin">{render(message)}</div>,
    document.querySelector("#notification-portal")
  );
};

export default NotificationModal;
