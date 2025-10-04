import { ArrowLeft, Heart } from 'lucide-react';

interface ReasonsPageProps {
  onNavigate: (page: string) => void;
}

export default function ReasonsPage({ onNavigate }: ReasonsPageProps) {
  const reasons = [
    "Your voice is the sweetest melody I've ever heard",
    "Your childish charm melts my heart every time",
    "You made me believe in love again when I thought it was impossible",
    "Your messages brighten even my darkest days",
    "The way you say my name makes my heart skip a beat",
    "Your loving nature shows in everything you do",
    "You understand me without me having to explain",
    "Your laughter is my favorite sound in the world",
    "You accept me for who I am, flaws and all",
    "Your kindness touches everyone around you",
    "You make the distance from Kolkata to Pune feel like nothing",
    "Your voice notes are the highlight of my day",
    "You bring joy to my life every single day",
    "Your innocence and purity of heart are rare and beautiful",
    "You make me want to be a better person",
    "Your dreams and ambitions inspire me",
    "You listen to me with your whole heart",
    "Your presence, even virtual, calms my anxiety",
    "You remember the little things I tell you",
    "Your smile, even though I haven't seen it in person, lights up my world",
    "You support me in everything I do",
    "Your optimism helps me see the bright side",
    "You make ordinary moments feel extraordinary",
    "Your love has healed wounds I thought would never heal",
    "You give me hope for our future together",
    "Your strength amazes me every day",
    "You make me laugh even when I want to cry",
    "Your honesty and openness mean everything to me",
    "You trust me with your heart and I cherish that gift",
    "Your cultural richness from Kolkata fascinates me",
    "You make me excited about life again",
    "Your voice is my comfort in difficult times",
    "You respect my opinions and thoughts",
    "Your patience with the distance shows your commitment",
    "You make me feel valued and appreciated",
    "Your creativity inspires my own",
    "You challenge me to grow and improve",
    "Your loyalty is unwavering",
    "You make me feel like the luckiest person alive",
    "Your empathy and compassion are boundless",
    "You see the best in me even when I don't",
    "Your enthusiasm is contagious",
    "You make waiting for our first meeting worthwhile",
    "Your intelligence and wisdom impress me",
    "You handle challenges with grace",
    "Your sense of humor matches mine perfectly",
    "You make me feel understood in ways no one else has",
    "Your voice gives me butterflies every single time",
    "You respect my boundaries and I respect yours",
    "Your love language speaks directly to my heart",
    "You make me believe in soulmates",
    "Your dedication to us despite the distance is admirable",
    "You make me want to work harder to give you the world",
    "Your texts are like love letters to my soul",
    "You understand the importance of communication",
    "Your presence in my life feels destined",
    "You make me feel safe to be vulnerable",
    "Your Bengali words sound like poetry to me",
    "You appreciate the little efforts I make",
    "Your priorities align with mine",
    "You make me excited for our future home together",
    "Your love for your family shows your beautiful heart",
    "You balance being sweet and strong perfectly",
    "Your midnight conversations mean the world to me",
    "You remember anniversaries and special moments",
    "Your encouragement pushes me forward",
    "You make me believe long-distance love can work",
    "Your personality shines through every message",
    "You respect my career and ambitions",
    "Your childlike wonder makes me see the world differently",
    "You make me feel romantic in ways I never have before",
    "Your consistency shows me I can depend on you",
    "You handle misunderstandings with maturity",
    "Your morning messages set the perfect tone for my day",
    "You make me want to learn more about your culture",
    "Your confidence in us keeps me grounded",
    "You appreciate my quirks and weirdness",
    "Your voice is my favorite lullaby",
    "You make sacrifices for us without complaint",
    "Your words have the power to heal my bad days",
    "You make me believe in forever",
    "Your digital presence feels as real as physical presence",
    "You understand that love transcends distance",
    "Your faith in our relationship is unwavering",
    "You make me eager to close the distance between us",
    "Your love has transformed my life completely",
    "You accept my love language and reciprocate beautifully",
    "Your promises mean something because you keep them",
    "You make me feel chosen and special",
    "Your energy, even through messages, is intoxicating",
    "You handle our time zone differences gracefully",
    "Your Bengali culture adds richness to our relationship",
    "You make me want to be part of your world",
    "Your love feels like coming home",
    "You understand my silence as much as my words",
    "Your goodnight messages give me peaceful sleep",
    "You make every day feel like an adventure",
    "Your belief in us makes me believe too",
    "You are patient with my flaws and imperfections",
    "Your love is the answer to prayers I didn't know I had",
    "You make me grateful for Instagram bringing us together",
    "Because you are simply, beautifully, perfectly YOU - and that's more than enough 💕"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
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
            100 Reasons Why I Love You
          </h1>
          <p className="text-2xl text-rose-600 font-semibold italic">
            Khushi, here's my heart in 100 reasons 💕
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${(index % 20) * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-2">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-rose-600 to-pink-600 p-12 rounded-3xl shadow-2xl text-center text-white">
          <Heart className="inline-block mb-6 animate-pulse" size={80} fill="currentColor" />
          <h2 className="text-5xl font-serif font-bold mb-6">
            And Counting...
          </h2>
          <p className="text-2xl font-serif leading-relaxed max-w-3xl mx-auto">
            Khushi, these are just 100 reasons, but the truth is, I discover new reasons to love you
            every single day. With every message, every call, every moment we share, my love for you
            grows deeper. Tumi amar jibon, tumi amar bhalobasha, tumi amar sob kichhu.
            You are my life, my love, my everything. 💕
          </p>
          <p className="text-3xl font-bold mt-8 animate-pulse">
            I love you, Khushi! ❤️
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
