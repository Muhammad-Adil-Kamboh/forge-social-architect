import React from "react";
import { X } from "lucide-react";

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoVideoModal: React.FC<DemoVideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-2xl mx-4">
        <button
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl bg-black">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ZK-rNEhJIDs"
            title="Product Demo Video | SaaS Explainer Video | Infinity"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DemoVideoModal;
