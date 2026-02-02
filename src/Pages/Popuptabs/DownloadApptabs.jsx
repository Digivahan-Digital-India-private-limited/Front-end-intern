import React from "react";

const DownloadApptabs = () => {
  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.digivahan";

    
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-80 text-center">
        <h2 className="text-lg font-bold mb-3">
          Install App for Better Experience
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          Aapka notification delivered ho chuka hai chatting aur calling
          features ke liye App ko install kijiye!
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => {
              window.location.href = PLAYSTORE_URL;
            }}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApptabs;
