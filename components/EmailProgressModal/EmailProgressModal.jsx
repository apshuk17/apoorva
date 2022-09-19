import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import Spinner from "../Spinner/Spinner";

const EmailProgressModal = () => {
  return (
    <div>
      {createPortal(<Backdrop />, document.querySelector("#backdrop-portal"))}
      {createPortal(
        <div className="fixed top-0 w-screen h-screen z-[20] flex justify-center items-center">
          <Spinner className="animate-spin" width="64" height="64" />
        </div>,
        document.querySelector("#overlay-portal")
      )}
    </div>
  );
};

export default EmailProgressModal;
