import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
}

export default function RosePetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 6,
      rotation: Math.random() * 360,
      size: 20 + Math.random() * 20
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall-petal"
          style={{
            left: `${petal.left}%`,
            top: '-10%',
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.2}
            viewBox="0 0 50 60"
            className="drop-shadow-lg"
          >
            <defs>
              <radialGradient id={`petalGradient-${petal.id}`} cx="30%" cy="30%">
                <stop offset="0%" stopColor="#fda4af" />
                <stop offset="40%" stopColor="#fb7185" />
                <stop offset="70%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#be123c" />
              </radialGradient>
              <filter id={`petalShadow-${petal.id}`}>
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="1" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              d="M 25 10 Q 15 15, 12 25 Q 10 35, 15 42 Q 20 48, 25 50 Q 30 48, 35 42 Q 40 35, 38 25 Q 35 15, 25 10 Z"
              fill={`url(#petalGradient-${petal.id})`}
              filter={`url(#petalShadow-${petal.id})`}
              opacity="0.9"
            />

            <path
              d="M 25 15 Q 22 25, 25 45"
              stroke="#e11d48"
              strokeWidth="0.5"
              opacity="0.4"
              fill="none"
            />
            <path
              d="M 25 20 Q 18 30, 17 40"
              stroke="#e11d48"
              strokeWidth="0.3"
              opacity="0.3"
              fill="none"
            />
            <path
              d="M 25 20 Q 32 30, 33 40"
              stroke="#e11d48"
              strokeWidth="0.3"
              opacity="0.3"
              fill="none"
            />

            <ellipse
              cx="25"
              cy="25"
              rx="8"
              ry="10"
              fill="#fda4af"
              opacity="0.3"
            />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes fall-petal {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) rotate(90deg) translateX(30px);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(-20px);
            opacity: 1;
          }
          75% {
            transform: translateY(75vh) rotate(270deg) translateX(40px);
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(-10px);
            opacity: 0.5;
          }
        }

        .animate-fall-petal {
          animation: fall-petal linear infinite;
        }
      `}</style>
    </div>
  );
}
