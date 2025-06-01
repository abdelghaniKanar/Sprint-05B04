import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-primary-100 retro-border p-6 max-w-md w-full mx-4">
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="retro-button">
            <X size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
