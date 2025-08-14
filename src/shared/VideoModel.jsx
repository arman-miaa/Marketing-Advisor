

const VideoModal = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative bg-black rounded-xl overflow-hidden max-w-6xl w-full">
        <video src={videoSrc} controls autoPlay className="w-full h-auto" />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-2xl text-white cursor-pointer bg-red-500 hover:bg-red-600 pl-2 pr-3 py-1 rounded-full"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
