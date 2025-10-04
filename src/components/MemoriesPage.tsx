import { ArrowLeft, MessageCircle, Phone, Heart, Music, Sparkles, Clock } from 'lucide-react';

interface MemoriesPageProps {
  onNavigate: (page: string) => void;
}

export default function MemoriesPage({ onNavigate }: MemoriesPageProps) {
  const memories = [
    {
      icon: MessageCircle,
      title: 'The Instagram Group Chat',
      date: 'The Beginning of Forever',
      description: 'It was just another day until I saw your message in that group. Your words caught my attention, but it was your voice note that captured my heart. Khushi, I didn\'t know someone\'s voice could make me feel so alive.',
      emotion: 'The moment everything changed ✨',
      image: '/images/memory-1.jpg'
    },
    {
      icon: Heart,
      title: 'Your First Voice Note',
      date: 'The Day I Fell',
      description: 'When I heard your voice for the first time, my heart skipped a beat. That sweet, melodious voice traveling from Kolkata to Pune, bridging hundreds of miles in an instant. Tumi amar sundar devi, you became my goddess that very moment.',
      emotion: 'My heart knew it found home 💕',
      image: '/images/memory-2.jpg'
    },
    {
      icon: Phone,
      title: 'Our First Call',
      date: 'Hours Felt Like Minutes',
      description: 'Our first voice call lasted hours, but it felt like mere minutes. Your childish laughter, your sweet voice, the way you said my name - everything about you was perfect. I didn\'t want that call to end, and I knew I never wanted to stop talking to you.',
      emotion: 'Time stood still for us ⏰',
      image: '/images/memory-3.jpg'
    },
    {
      icon: Music,
      title: 'Sharing Songs & Dreams',
      date: 'Our Melody Together',
      description: 'When we started sharing our favorite songs, I realized we were creating our own melody. Every song you sent became special, every lyric reminded me of you. Music became our language of love, Khushi.',
      emotion: 'Our hearts sing in harmony 🎵',
      image: '/images/memory-4.jpg'
    },
    {
      icon: Clock,
      title: 'Late Night Conversations',
      date: 'When Time Didn\'t Matter',
      description: 'Those late-night chats when the world was asleep, but we were wide awake, lost in conversation. Talking about everything and nothing, sharing secrets, dreams, and fears. Distance didn\'t matter when our hearts were so close.',
      emotion: 'Every moment with you is precious 🌙',
      image: '/images/memory-5.jpg'
    },
    {
      icon: Sparkles,
      title: 'When I Knew',
      date: 'Love Found Me Again',
      description: 'The moment I realized you made me believe in love again. After thinking my heart would remain closed forever, you opened it with your childish charm and loving nature. Khushi, you didn\'t just enter my life - you became my life.',
      emotion: 'You are my miracle 💫',
      image: '/images/memory-6.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-8 text-lg font-semibold transition-colors"
        >
          <ArrowLeft size={24} />
          Back to Home
        </button>

        <div className="text-center mb-16 animate-fade-in">
          <Heart className="inline-block text-rose-600 mb-4 animate-pulse" size={64} fill="currentColor" />
          <h1 className="text-6xl font-serif font-bold text-gray-800 mb-4">
            The Day I Met You
          </h1>
          <p className="text-2xl text-rose-600 font-semibold italic">
            Our Beautiful Journey from Instagram to Forever 💕
          </p>
        </div>

        <div className="space-y-12">
          {memories.map((memory, index) => {
            const Icon = memory.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-slide-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl transform group-hover:scale-105 transition-transform duration-300 opacity-20"></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="aspect-square">
                        <img
                          src={memory.image}
                          alt={memory.title}
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
                          <Icon size={80} className="text-rose-600 mb-4" />
                          <p className="text-rose-800 font-serif text-xl text-center px-4">{memory.title}</p>
                          <p className="text-rose-600 text-sm mt-4 font-mono">Add photo to:</p>
                          <p className="text-rose-600 text-xs font-mono">/public/images/memory-{index + 1}.jpg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-gray-800">
                          {memory.title}
                        </h3>
                        <p className="text-rose-600 font-semibold italic">{memory.date}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {memory.description}
                    </p>

                    <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-2xl border-2 border-rose-300">
                      <p className="text-rose-700 font-serif italic text-center text-lg">
                        {memory.emotion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-amber-50 to-amber-100 p-12 rounded-3xl shadow-2xl border-4 border-amber-800 text-center">
          <h2 className="text-4xl font-serif font-bold text-amber-900 mb-6">
            And This Is Just The Beginning...
          </h2>
          <p className="text-2xl text-amber-800 font-serif leading-relaxed">
            Khushi, these memories are precious, but I know our best moments are still ahead of us.
            The day we finally meet, the day I hold your hand, the day I see your beautiful smile in person -
            those will be the moments that complete our story. Tumi amar bhalobasha, forever and always. 💕
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
