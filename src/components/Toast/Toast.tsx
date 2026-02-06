import React, { useEffect, useState, useCallback } from "react";

import "./Toast.css";
import clear from "../../assets/clear.svg";
import info from "../../assets/info.svg";
import success from "../../assets/success.svg";
import error from "../../assets/error.svg";

interface ToastProps {
  content: string;
  duration?: number;
  type?: "info" | "success" | "danger";
  onClose?: () => void;
}

export const Toast = ({
  content,
  duration = 3000,
  type = "info",
  onClose
}: ToastProps) => {
  const [visible, setVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  if (!visible) return null;

  const toastTypeClassMap = {
    info: "toastInfo",
    success: "toastSuccess",
    danger: "toastDanger"
  };

  const toastIcons = {
    info: info,
    success: success,
    danger: error
  };

  const toastTypeClass = toastTypeClassMap[type];

  return (
    <div className={`toast  ${isClosing ? "fadeOut" : ""}`}>
      <div className={`toastSector ${toastTypeClass}`}>
        <img src={toastIcons[type]} alt={`${type} icon`} />
      </div>
      <p className="contentContainer">{content}</p>
      <button onClick={handleClose} className="closeButton">
        <img src={clear} alt="close notification" />
      </button>
    </div>
  );
};
