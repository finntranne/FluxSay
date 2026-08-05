import { LoaderIcon } from "lucide-react";

// Đổi thành export const để khớp với cách bạn đang import { PageLoader } bên file App.jsx
const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-900 space-y-6">
      <div className="relative flex items-center justify-center">
        <div className="absolute size-10 bg-cyan-500 rounded-full blur-xl opacity-60 animate-pulse" />
        <LoaderIcon className="size-12 text-cyan-400 animate-spin relative z-10" />
      </div>
      <div className="text-cyan-400/80 text-sm font-bold tracking-[0.3em] animate-pulse">
        Loading...
      </div>
    </div>
  );
};

export default PageLoader;
