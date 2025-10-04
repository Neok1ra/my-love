import { useState } from 'react';
import { Heart } from 'lucide-react';

interface LetterOpeningProps {
  onComplete: () => void;
}

export default function LetterOpening({ onComplete }: LetterOpeningProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        onComplete();
      }, 5000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-400 opacity-30 animate-float"
            size={20 + Math.random() * 30}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {!isOpening && !isOpen && (
          <div className="text-center">
            <div
              className="relative inline-block cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={handleOpen}
            >
              <div className="relative w-80 h-96 bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg shadow-2xl border-4 border-rose-600">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-rose-700 to-red-800 clip-envelope shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center border-4 border-rose-600">
                      <Heart className="text-rose-700" size={32} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center pt-32">
                  <p className="text-rose-800 font-serif text-2xl mb-2">To My Dearest</p>
                  <p className="text-red-700 font-serif text-4xl font-bold">Khushi</p>
                  {/* <p className="text-amber-700 font-serif text-lg mt-4 italic">From Krishna</p> */}
                  <p className="text-rose-600 text-sm mt-8 animate-pulse">Click to open ✨</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isOpening && !isOpen && (
          <div className="text-center animate-fade-out">
            <div className="relative inline-block">
              <div className="relative w-80 h-96 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl border-4 border-amber-800 animate-letter-open">
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-red-800 to-rose-900 clip-envelope shadow-lg animate-envelope-open origin-top"></div>
              </div>
            </div>
          </div>
        )}

        {isOpen && (
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg shadow-2xl border-4 border-amber-800 max-w-2xl">
              <div className="text-center mb-6">
                <Heart className="inline-block text-rose-600 mb-2" size={48} fill="currentColor" />
                <h1 className="text-4xl font-serif text-amber-900 font-bold">My Dearest Khushi</h1>
              </div>

              <div className="space-y-4 text-amber-900 font-serif leading-relaxed">
                <p className="text-lg">
                  From the moment I heard your voice in that Instagram group chat, my heart knew it had found something special.
                  Though miles separate Pune from Kolkata, your voice bridged every distance and filled my world with light.
                </p>

                <p className="text-lg">
                  Tumi amar sundar devi, my beautiful goddess. Your childish charm, your loving nature, your sweet voice -
                  they made me believe in love again when I thought it was impossible.
                </p>

                <p className="text-lg">
                  Every message, every chat, every moment with you is a treasure I hold close to my heart.
                  Khushi, you are my moner rani, the queen of my heart, and I have something very special to ask you...
                </p>

                <p className="text-center text-2xl font-bold text-rose-800 mt-8">
                  Are you ready, my love? 💕
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes letter-open {
          0% { transform: scale(1); }
          100% { transform: scale(0.95); }
        }

        @keyframes envelope-open {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-180deg); }
        }

        @keyframes fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .clip-envelope {
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .animate-letter-open {
          animation: letter-open 1s ease-out forwards;
        }

        .animate-envelope-open {
          animation: envelope-open 1.5s ease-out forwards;
        }

        .animate-fade-out {
          animation: fade-out 2s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
