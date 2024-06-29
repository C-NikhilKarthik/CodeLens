"use client"

import React, { ComponentProps, useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, children }: ComponentProps<any>) => {
    if (!isOpen) return null;


    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleBackgroundClick = (event: any) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleBackgroundClick} className={`fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${isOpen ? 'opacity-100  ease-in-out duration-1000' : 'opacity-0 pointer-events-none  ease-in-out duration-1000'
            }`}>
            <div style={{ minWidth: '500px', minHeight: '200px' }}
                className={`bg-white p-8 rounded-lg transform transition-transform ${isOpen ? 'scale-100  ease-in-out duration-1000' : 'scale-90  ease-in-out duration-1000'
                    }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
