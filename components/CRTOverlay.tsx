'use client';

interface CRTOverlayProps {
    className?: string;
}

export default function CRTOverlay({ className = "fixed inset-0 z-50 rounded-inherit" }: CRTOverlayProps) {
    return (
        <div className={`pointer-events-none overflow-hidden ${className}`}>
            {/* Scanlines */}
            <div
                className="absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"
                style={{ pointerEvents: 'none' }}
            ></div>

            {/* Screen flicker & vignette */}
            <div className="absolute inset-0 z-50 animate-pulse bg-black/5 mix-blend-overlay"></div>
            <div className="absolute inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]"></div>
        </div>
    );
}
