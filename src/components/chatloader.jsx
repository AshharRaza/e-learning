import React from "react";

export const ChatLoader = () => {
  return (
    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-2xl px-4 py-2 shadow-sm">
      <span className="dot bg-gray-500"></span>
      <span className="dot bg-gray-500"></span>
      <span className="dot bg-gray-500"></span>

      <style jsx>{`
        .dot {
          border-radius: 50%;
          width: 6px;
          height: 6px;
          animation: bounceDots 1.4s infinite ease-in-out both;
        }
        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        @keyframes bounceDots {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};


