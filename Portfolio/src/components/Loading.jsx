export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <style>
        {`
          @keyframes line-loader {
            0% { transform: translateX(-150%); }
            50% { transform: translateX(50%); }
            100% { transform: translateX(250%); }
          }
          .animate-line-loading {
            animation: line-loader 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        `}
      </style>

      <div className="flex flex-col items-center gap-8">
        {/* Static Minimal Syntax */}
        <div className="text-5xl sm:text-7xl font-mono font-black text-gray-900 tracking-tighter">
          &lt;/&gt;
        </div>

        {/* Minimal Timeline Loader */}
        <div className="w-32 sm:w-40 h-[2px] bg-gray-100 overflow-hidden relative rounded-full">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gray-900 rounded-full animate-line-loading" />
        </div>
      </div>
    </div>
  );
}
