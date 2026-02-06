import React, { useEffect, useState, useCallback } from "react";
import "./Toast.css";

type ToastProps = {
  content: string;
  duration?: number;
  type?: "info" | "success" | "danger";
  onClose?: () => void;
};

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

  const toastTypeClass = toastTypeClassMap[type];

  return (
    <div className={`toast ${toastTypeClass} ${isClosing ? "fadeOut" : ""}`}>
      {content}
      <button onClick={handleClose} className="closeButton">
        ✕
      </button>
    </div>
  );
};
