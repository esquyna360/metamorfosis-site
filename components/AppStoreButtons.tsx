interface AppStoreButtonsProps {
  className?: string;
}

export default function AppStoreButtons({ className = '' }: AppStoreButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href="https://apps.apple.com/app/id1523575683"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-2xl transition-all hover:scale-105 shadow-lg"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.73M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-80">Download on the</span>
          <span className="font-semibold text-sm">App Store</span>
        </div>
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.metamorfosisrn"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-2xl transition-all hover:scale-105 shadow-lg"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.18 23.76c.3.16.64.22.99.16l.07-.04L13.6 14.1l-2.98-2.97-7.44 12.63z" fill="#EA4335"/>
          <path d="M20.93 10.69l-2.79-1.61L14.9 12l3.22 3.23 2.82-1.63c.8-.47.8-1.44-.01-1.91z" fill="#FBBC04"/>
          <path d="M3.18.26C2.83.07 2.44.02 2.1.14L13.6 11.9l2.98-2.97L4.24.4 3.18.26z" fill="#4285F4"/>
          <path d="M2.1.14C1.49.34 1.07.95 1.07 1.78v20.46c0 .83.42 1.44 1.03 1.64l.08.04L13.6 12 2.1.14z" fill="#34A853"/>
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-80">Get it on</span>
          <span className="font-semibold text-sm">Google Play</span>
        </div>
      </a>
    </div>
  );
}
