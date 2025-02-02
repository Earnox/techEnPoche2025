import React, {useEffect, useRef} from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Gestion du clic à l'extérieur pour fermer la modale
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-black opacity-50'></div>
      <div
        ref={modalRef}
        className='bg-white p-6 rounded-lg shadow-lg relative z-10'>
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-red-600 text-2xl font-bold'>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
