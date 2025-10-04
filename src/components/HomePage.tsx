import { useState } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [hoveredPetal, setHoveredPetal] = useState<number | null>(null);

  const quotes = [
    {
      bengali: "Tumi amar hridoyer dhoni, amar jibon tumi",
      english: "You are the beat of my heart, you are my life"
    },
    {
      bengali: "Tomar chokhe dekhi amar swapner prithibi",
      english: "In your eyes, I see my dream world"
    },
    {
      bengali: "Tumi chhara jibon amar shunyo",
      english: "Without you, my life is empty"
    },
    {
      bengali: "Tomar hashi te bhorejai amar mon",
      english: "Your smile fills my heart with joy"
    }
  ];

  const rosePhotos = [
    { id: 1, name: 'Your Smile', image: '/images/khushi-1.jpg' },
    { id: 2, name: 'Your Eyes', image: '/images/khushi-2.jpg' },
    { id: 3, name: 'Your Laugh', image: '/images/khushi-3.jpg' },
    { id: 4, name: 'Your Voice', image: '/images/khushi-4.jpg' },
    { id: 5, name: 'Your Heart', image: '/images/khushi-5.jpg' },
    { id: 6, name: 'Your Love', image: '/images/khushi-6.jpg' },
    { id: 7, name: 'Your Soul', image: '/images/khushi-7.jpg' },
    { id: 8, name: 'Your Beauty', image: '/images/khushi-8.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <Heart className="inline-block text-rose-600 mb-4 animate-pulse" size={64} fill="currentColor" />
          <h1 className="text-6xl font-serif font-bold text-gray-800 mb-4">
            Krishna & Khushi
          </h1>
          <p className="text-2xl text-rose-600 font-semibold italic">
            Forever Entwined in Love 💕
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <p className="text-2xl font-serif text-rose-600 mb-3 italic">
                "{quote.bengali}"
              </p>
              <p className="text-lg text-gray-600 italic">
                {quote.english}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl mb-16">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-8">
            Rose of My Heart 🌹
          </h2>

          <div className="relative w-full max-w-2xl mx-auto aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <radialGradient id="centerGradient">
                  <stop offset="0%" stopColor="#fda4af" />
                  <stop offset="100%" stopColor="#be123c" />
                </radialGradient>
              </defs>

              <circle cx="200" cy="200" r="40" fill="url(#centerGradient)" />

              {rosePhotos.map((photo, index) => {
                const angle = (index * 360) / rosePhotos.length - 90;
                const radian = (angle * Math.PI) / 180;
                const x = 200 + Math.cos(radian) * 120;
                const y = 200 + Math.sin(radian) * 120;

                return (
                  <g key={photo.id}>
                    <ellipse
                      cx={x}
                      cy={y}
                      rx="50"
                      ry="70"
                      fill="#fb7185"
                      opacity="0.8"
                      transform={`rotate(${angle + 90} ${x} ${y})`}
                      className="cursor-pointer hover:opacity-100 transition-opacity duration-300"
                      onMouseEnter={() => setHoveredPetal(photo.id)}
                      onMouseLeave={() => setHoveredPetal(null)}
                    />

                    <foreignObject
                      x={x - 35}
                      y={y - 35}
                      width="70"
                      height="70"
                      className="cursor-pointer pointer-events-none"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src={photo.image}
                          alt={photo.name}
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
                        <div className="placeholder hidden w-full h-full flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-rose-300 text-xs text-rose-800 p-1 text-center">
                          <Heart size={20} fill="currentColor" className="mb-1" />
                          <span className="font-semibold">{photo.name}</span>
                        </div>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>

            {hoveredPetal && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
                {rosePhotos.find(p => p.id === hoveredPetal)?.name}
              </div>
            )}
          </div>

          <p className="text-center text-gray-600 mt-8 italic">
            Hover over each petal to see what I love about you 💕
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-12 rounded-3xl shadow-2xl border-4 border-amber-800 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-serif font-bold text-amber-900 mb-2">
                A Letter from Heart
              </h2>
              <p className="text-amber-700 italic">To the love of my life</p>
            </div>

            <div className="space-y-6 text-amber-900 font-serif text-lg leading-relaxed">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-rose-600 first-letter:mr-2 first-letter:float-left">
                Amar priyo Khushi, amar sundar devi, kotha diye ami tomake amar bhalobashar ghorota bolte parbo na.
                Shei Instagram group chat er maddhome tomar kanta amar kane pouche jaar shomoy thekei ami bujhe gechilam je amar jibon ar kokhono same thakbe na. Tomar kanta, ektu shadhu o melodious, Kolkata theke Pune e chole eshe amar hridoye dhukche.
              </p>

              <p>
                Amra kokhono personally dekha hoyni, kokhono voice call er shukh pabini,
                kintu ami tomake amar moner vitore khub close feel kori. Tomar childish charm, tomar infectious laughter,
                tomar loving nature - egulo shob text message e, shob voice note e, shob moment e jekhane amra share kori shekhane glow kore. Tumi amar moner rani, je rani amar hridoy shashon kore.
              </p>

              <p>
                Tumi amar jibone esechho jokhon ami bhalobasha te faith haraye feli, jokhon bhabchilam je amar hridoy shunyo thakbe.
                Kintu Khushi, tumi amake vul prove korecho. Tumi dekhiye dile je true love physical distance ke transcend kore,
                je hridoy hundreds of miles er across connect hote pare, je souls kokhono face to face na dekheo recognize korte pare.
              </p>

              <p>
                Tomar sathe shob din, jodi amra dur thaki, blessing er moto lagay. Tomar messages amar darkest din gulo bright kore.
                Tomar voice notes amar kaner sweetest music. Tomar loving words je food je amar soul ke nourish kore.
                Tumi amar bhalobasha, amar eternal love.
              </p>

              <p className="text-center text-2xl font-bold text-rose-800 pt-4">
                Ami tomake forever bhalobashbo, Khushi. Je distance hoy, je challenge asuk,
                amar hridoy tumi aar tumi matro. 💕
              </p>

              <p className="text-right text-xl pt-8">
                Forever yours,<br />
                <span className="text-3xl font-bold text-rose-800">your hubbby</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            onClick={() => onNavigate('memories')}
            className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-8 px-12 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 text-2xl font-bold"
          >
            <span>The Day I Met You</span>
            <ArrowRight size={32} />
          </button>

          <button
            onClick={() => onNavigate('reasons')}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-8 px-12 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 text-2xl font-bold"
          >
            <span>100 Reasons I Love You</span>
            <ArrowRight size={32} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
