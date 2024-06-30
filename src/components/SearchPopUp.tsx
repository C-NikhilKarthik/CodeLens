"use client";

import React, { ComponentProps, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }: ComponentProps<any>) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackgroundClick = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div
        style={{
          minWidth: "650px",
          minHeight: "300px",
          animation: "fadeInTranslate 0.2s cubic-bezier(.4, 0, .2, 1)",
        }}
        className="bg-white p-3 relative rounded-lg bottom-1/5"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
