import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [message, setMessage] = useState(0);

  const messages = [
    "Khushi, amar priyo... ❤️",
    "Tumi amar sundar devi... 🌹",
    "Your voice stole my heart from Kolkata to Pune...",
    "Bhalobasha... forever and always... 💕",
    "Get ready for something special..."
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessage(prev => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    const timer = setTimeout(() => {
      onComplete();
    }, 11000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(timer);
    };
  }, [onComplete, messages.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" className="text-rose-300 opacity-70">
              <path
                d="M15 27c-1-1-13-8-13-16 0-4.5 3.5-8 8-8 2.5 0 4.5 1 5 2.5.5-1.5 2.5-2.5 5-2.5 4.5 0 8 3.5 8 8 0 8-12 15-13 16z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8 relative">
          <div className="relative inline-block animate-bloom">
            <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-2xl">
              <defs>
                <radialGradient id="roseGradient">
                  <stop offset="0%" stopColor="#fecaca" />
                  <stop offset="30%" stopColor="#fda4af" />
                  <stop offset="70%" stopColor="#fb7185" />
                  <stop offset="100%" stopColor="#dc2626" />
                </radialGradient>
              </defs>

              <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="100"
                    cy="100"
                    rx="40"
                    ry="60"
                    fill="url(#roseGradient)"
                    opacity="0.9"
                    transform={`rotate(${angle} 100 100)`}
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </g>

              <circle cx="100" cy="100" r="25" fill="#fecaca" className="animate-pulse" />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full bg-rose-400/30 animate-ping" />
          </div>
        </div>

        <div className="h-24 flex items-center justify-center">
          <p className="text-rose-100 text-2xl font-serif italic animate-fade-in px-4">
            {messages[message]}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes bloom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes fall-slow {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-bloom {
          animation: bloom 3s ease-in-out infinite;
        }

        .animate-fall-slow {
          animation: fall-slow 10s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
