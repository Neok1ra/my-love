import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface CelebrationScreenProps {
  onComplete: () => void;
}

export default function CelebrationScreen({ onComplete }: CelebrationScreenProps) {
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowRing(true), 1000);
    const timer = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-600 via-pink-500 to-purple-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: `${50 + (Math.random() - 0.5) * 20}%`,
              top: '-10%',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div
              className="w-3 h-3 rounded"
              style={{
                backgroundColor: ['#fda4af', '#fb7185', '#f472b6', '#fbbf24', '#60a5fa'][Math.floor(Math.random() * 5)],
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          </div>
        ))}

        {[...Array(50)].map((_, i) => (
          <Heart
            key={`heart-${i}`}
            className="absolute text-white opacity-60 animate-float-up"
            size={20 + Math.random() * 30}
            fill="currentColor"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10%',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <Sparkles className="inline-block text-yellow-300 animate-spin-slow" size={64} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-bounce-in">
          SHE SAID YES! 🎉
        </h1>

        <p className="text-3xl md:text-4xl text-white mb-8 animate-fade-in-delay font-serif">
          Khushi aur Krishna - Forever Together! 💕
        </p>

        {showRing && (
          <div className="animate-scale-in">
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-pink-200 to-rose-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/couple-photo.jpg"
                    alt="Krishna & Khushi"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.parentElement?.querySelector('.placeholder');
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="placeholder hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300">
                    <Heart size={80} className="text-rose-600 mb-4" fill="currentColor" />
                    <p className="text-rose-800 font-serif text-xl">Krishna & Khushi</p>
                    <p className="text-rose-600 text-sm mt-2">Add your photo to</p>
                    <p className="text-rose-600 text-sm font-mono">/public/images/couple-photo.jpg</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl animate-ring-pulse">
                <span className="text-5xl">💍</span>
              </div>
            </div>
          </div>
        )}

        <p className="text-2xl text-white mt-12 animate-fade-in-delay-2 font-serif italic">
          "Tumi amar bhalobasha, amar jibon, amar sob kichhu..." 💖
        </p>
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes ring-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-confetti {
          animation: confetti 3s ease-in forwards;
        }

        .animate-float-up {
          animation: float-up 5s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
        }

        .animate-ring-pulse {
          animation: ring-pulse 2s ease-in-out infinite;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in-delay 1s ease-out 1.5s forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
