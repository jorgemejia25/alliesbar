export default function RotatingLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer rotating dashed circle */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] text-[#fed65b]/40"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Inner static glass icon with trend line */}
      <svg
        viewBox="0 0 100 100"
        className="w-[55%] h-[55%] text-white drop-shadow-lg"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Martini Glass Outline */}
        <path d="M 15 20 L 85 20 L 50 60 Z" className="text-[#fed65b]/80" />
        <path d="M 50 60 L 50 90" className="text-[#fed65b]/80" />
        <path d="M 30 90 L 70 90" className="text-[#fed65b]/80" />

        {/* Trend line inside the bowl (representing data/profit) */}
        <path d="M 35 45 L 45 35 L 55 40 L 65 25" strokeWidth="4" className="text-white" />
        
        {/* Arrow head for trend line */}
        <path d="M 55 25 L 65 25 L 65 35" strokeWidth="4" className="text-white" />
      </svg>
    </div>
  );
}
