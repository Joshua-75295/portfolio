import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // Coding playlist (using royalty-free music URLs or local files)
  const playlist = [
    { 
      title: "Coding Flow",
      artist: "Lo-Fi Beats",
      url: "/music/coding-flow.mp3" // You would add actual music files
    },
    { 
      title: "Focus Mode",
      artist: "Ambient Sounds",
      url: "/music/focus-mode.mp3"
    },
    { 
      title: "Debug Session",
      artist: "Electronic Vibes",
      url: "/music/debug-session.mp3"
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  return (
    <>
      {/* Music Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPlayer(!showPlayer)}
        className="fixed top-20 right-4 z-40 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors"
      >
        <Music size={20} />
      </motion.button>

      {/* Music Player */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-16 right-4 z-50 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 p-6 w-80"
          >
            <div className="text-center mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                {playlist[currentTrack].title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {playlist[currentTrack].artist}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevious}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors"
              >
                <SkipBack size={20} className="text-gray-700 dark:text-gray-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors"
              >
                <SkipForward size={20} className="text-gray-700 dark:text-gray-300" />
              </motion.button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="p-1 hover:bg-gray-100 dark:hover:bg-dark-700 rounded transition-colors"
              >
                {isMuted ? (
                  <VolumeX size={18} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Volume2 size={18} className="text-gray-700 dark:text-gray-300" />
                )}
              </motion.button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 bg-gray-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Audio Element */}
            <audio
              ref={audioRef}
              src={playlist[currentTrack].url}
              volume={volume}
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;