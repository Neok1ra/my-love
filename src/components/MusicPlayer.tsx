import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.preload = 'auto';
      
      // Try to auto-play after a short delay
      const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(err => {
            console.log('Auto-play failed (browser policy):', err);
            // Don't set isPlaying to true if auto-play fails
          });
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.log('Audio play failed:', err);
          setIsPlaying(false);
        });
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/audio/background-music.mp3"
        onError={() => {
          console.log('Audio file not found. Please add your music to /public/audio/background-music.mp3');
        }}
        onLoadStart={() => {
          console.log('Audio loading started');
        }}
        onCanPlay={() => {
          console.log('Audio can play');
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
      />

      <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-full shadow-2xl p-4 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transform transition-transform duration-200 shadow-lg"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="text-rose-600" size={24} fill="currentColor" />
          ) : (
            <Play className="text-rose-600 ml-1" size={24} fill="currentColor" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:scale-110 transform transition-transform duration-200"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        >
          {isMuted ? (
            <VolumeX className="text-rose-600" size={20} />
          ) : (
            <Volume2 className="text-rose-600" size={20} />
          )}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white rounded-full animate-music-bar"
                style={{
                  height: '20px',
                  animationDelay: `${i * 0.15}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes music-bar {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }

        .animate-music-bar {
          animation: music-bar 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
