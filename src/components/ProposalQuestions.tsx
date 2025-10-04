import { useState } from 'react';
import { Heart, Coffee, MapPin, Sparkles } from 'lucide-react';

interface ProposalQuestionsProps {
  onComplete: () => void;
}

export default function ProposalQuestions({ onComplete }: ProposalQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const questions = [
    {
      icon: Heart,
      question: "Will you be my coding partner for life? 👩‍💻❤️",
      subtitle: "Debugging life's errors together",
      hint: "Warning: May require 24/7 tech support and unlimited hugs 🤗"
    },
    {
      icon: Coffee,
      question: "Chai peene chalogi mere saath? ☕",
      subtitle: "Can I make chai for you every morning?",
      hint: "Job description: Professional chai maker & cute sipping companion required 😊"
    },
    {
      icon: MapPin,
      question: "Pune + Kolkata = Ek Ghar? 🏠",
      subtitle: "Can we turn the distance into our forever home?",
      hint: "Fun fact: Distance is just a number when love is the GPS! 📍❤️"
    },
    {
      icon: Sparkles,
      question: "Khushi, kya tum mujhse shaadi karogi? 💍",
      subtitle: "Will you marry me?",
      hint: "Hint: One answer makes me the happiest person alive! 😍"
    }
  ];

  const handleYes = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    setNoButtonPos({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
  };

  const current = questions[currentQuestion];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-900 via-red-800 to-pink-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-300 opacity-30 animate-float-random"
            size={15 + Math.random() * 25}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-lg p-12 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300 border-4 border-rose-200">
          <div className="mb-6">
            <div className="inline-block p-6 bg-gradient-to-br from-rose-500 to-red-600 rounded-full mb-4 animate-bounce-slow">
              <Icon className="text-white" size={64} />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentQuestion
                      ? 'w-8 bg-rose-600'
                      : index < currentQuestion
                      ? 'w-2 bg-rose-400'
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <h2 className="text-4xl font-bold text-rose-800 mb-3">
              {current.question}
            </h2>
            <p className="text-xl text-red-600 font-semibold mb-2">
              {current.subtitle}
            </p>
            <p className="text-sm text-rose-600 italic">
              {current.hint}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <button
              onClick={handleYes}
              className="relative px-12 py-4 bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold text-2xl rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
            >
              <span className="relative z-10">Haan! ❤️ Yes!</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-rose-600 opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </button>

            <button
              onMouseEnter={handleNoHover}
              style={{
                position: noButtonPos.x ? 'fixed' : 'relative',
                left: noButtonPos.x ? `${noButtonPos.x}px` : 'auto',
                top: noButtonPos.y ? `${noButtonPos.y}px` : 'auto'
              }}
              className="px-12 py-4 bg-gray-400 text-white font-bold text-2xl rounded-full shadow-lg hover:bg-gray-500 transform transition-all duration-300"
            >
              Nahi 😢
            </button>
          </div>

          {currentQuestion === questions.length - 1 && (
            <p className="mt-8 text-rose-600 font-semibold animate-pulse text-lg">
              💕 im  waiting for your answer with his whole heart 💕
            </p>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -10px) rotate(5deg); }
          50% { transform: translate(-10px, -20px) rotate(-5deg); }
          75% { transform: translate(10px, -10px) rotate(5deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float-random {
          animation: float-random 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
