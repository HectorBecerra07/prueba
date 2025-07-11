const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
