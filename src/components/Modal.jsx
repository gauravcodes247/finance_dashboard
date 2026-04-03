const Modal = ({ children, onClose }) => {
  return (
    <div 
  className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
  onClick={onClose}
>
      <div 
  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-[90%] max-w-md"
  onClick={(e) => e.stopPropagation()}
>
        
        {/* Close button */}
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 text-xl">✕</button>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;